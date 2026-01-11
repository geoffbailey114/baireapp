'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  isBlurred?: boolean
}

interface ChatInterfaceProps {
  isPaid: boolean
  isTrialExhausted: boolean
  onMessageSent?: () => void
}

export function ChatInterface({ 
  isPaid, 
  isTrialExhausted, 
  onMessageSent 
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Welcome to BAIRE! I'm here to help you understand the home-buying process. Ask me anything about real estate terminology, documents, procedures, or what to expect during your home purchase.

Remember: I provide educational information only. For specific legal, financial, or property-related advice, please consult licensed professionals.

What would you like to learn about today?`,
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return

    // Check if trial user has exhausted queries
    if (!isPaid && isTrialExhausted) {
      setError('Free trial queries exhausted. Please upgrade to continue.')
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          message: userMessage.content,
          history: messages.slice(-10).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        isBlurred: data.isTrialRestricted,
      }

      setMessages((prev) => [...prev, assistantMessage])
      onMessageSent?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const isDisabled = (!isPaid && isTrialExhausted) || isLoading

  return (
    <div className="flex flex-col h-[600px] md:h-[700px] bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'chat-message',
              message.role === 'user' ? 'chat-message-user' : 'chat-message-assistant'
            )}
          >
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                  message.role === 'user'
                    ? 'bg-sage-200 text-sage-800'
                    : 'bg-slate-200 text-slate-700'
                )}
              >
                {message.role === 'user' ? 'You' : 'B'}
              </div>
              <div className={cn('flex-1 min-w-0', message.isBlurred && 'relative')}>
                <p
                  className={cn(
                    'text-sm whitespace-pre-wrap leading-relaxed',
                    message.isBlurred && 'trial-blur'
                  )}
                >
                  {message.content}
                </p>
                {message.isBlurred && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 px-4 py-2 rounded-lg shadow-sm text-center">
                      <p className="text-sm font-medium text-slate-700">
                        Upgrade to see full response
                      </p>
                      <a
                        href="/pricing"
                        className="text-sm text-sage-600 hover:text-sage-700 underline"
                      >
                        View pricing
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="chat-message chat-message-assistant">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-slate-200 text-slate-700 text-sm font-medium">
                B
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking...
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Error message */}
      {error && (
        <div className="px-4 py-2 bg-red-50 border-t border-red-200">
          <div className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-t border-slate-200 p-4">
        <div className="flex gap-3">
          <Textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              isDisabled
                ? 'Upgrade to continue asking questions...'
                : 'Ask about home buying...'
            }
            disabled={isDisabled}
            className="min-h-[48px] max-h-[120px] resize-none"
            rows={1}
          />
          <Button 
            type="submit" 
            disabled={isDisabled || !input.trim()}
            size="icon"
            className="flex-shrink-0"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          Press Enter to send, Shift+Enter for new line
        </p>
      </form>
    </div>
  )
}
