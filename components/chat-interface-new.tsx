'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, AlertCircle, Menu, X, Plus, MessageSquare, ChevronLeft, Settings, Crown, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  isBlurred?: boolean
}

interface Conversation {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
}

interface ChatInterfaceProps {
  isPaid: boolean
  isTrialExhausted: boolean
  onMessageSent?: () => void
  userTier?: 'trial' | 'access' | 'offer' | 'comp'
  trialEndsAt?: number | null
}

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: `Welcome to BAIRE! I'm here to help you navigate the home-buying process with confidence.

Ask me anything about:
• Scheduling showings & what to look for
• Understanding offers, contingencies, and terms
• Negotiation strategies
• The closing process

**Note:** I provide educational guidance, not legal or financial advice. For specific situations, consult licensed professionals.

What would you like to explore?`,
}

export function ChatInterfaceNew({ 
  isPaid, 
  isTrialExhausted, 
  onMessageSent,
  userTier = 'trial',
  trialEndsAt
}: ChatInterfaceProps) {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'default',
      title: 'New conversation',
      messages: [WELCOME_MESSAGE],
      createdAt: new Date(),
    }
  ])
  const [activeConvoId, setActiveConvoId] = useState('default')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const activeConvo = conversations.find(c => c.id === activeConvoId) || conversations[0]
  const messages = activeConvo?.messages || []

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + 'px'
    }
  }, [input])

  const startNewConversation = () => {
    const newConvo: Conversation = {
      id: Date.now().toString(),
      title: 'New conversation',
      messages: [WELCOME_MESSAGE],
      createdAt: new Date(),
    }
    setConversations(prev => [newConvo, ...prev])
    setActiveConvoId(newConvo.id)
    setSidebarOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return

    if (!isPaid && isTrialExhausted) {
      setError('Free trial queries exhausted. Please upgrade to continue.')
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    }

    // Update conversation with user message
    setConversations(prev => prev.map(c => 
      c.id === activeConvoId 
        ? { 
            ...c, 
            messages: [...c.messages, userMessage],
            title: c.messages.length === 1 ? input.trim().slice(0, 30) + '...' : c.title
          }
        : c
    ))
    
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

      setConversations(prev => prev.map(c => 
        c.id === activeConvoId 
          ? { ...c, messages: [...c.messages, assistantMessage] }
          : c
      ))
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

  const getTierBadge = () => {
    switch (userTier) {
      case 'comp':
        return { label: 'Full Access', icon: Sparkles, color: 'bg-purple-100 text-purple-700 border-purple-200' }
      case 'offer':
        return { label: 'Full Access', icon: Crown, color: 'bg-sage-100 text-sage-700 border-sage-200' }
      case 'access':
        return { label: 'Access', icon: null, color: 'bg-sage-100 text-sage-700 border-sage-200' }
      default:
        return { label: 'Free Trial', icon: null, color: 'bg-amber-100 text-amber-700 border-amber-200' }
    }
  }

  const tierBadge = getTierBadge()

  return (
    <div className="fixed inset-0 z-50 flex bg-[#f9fafb]">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-[#1a1a1a] transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="text-white font-semibold text-lg">BAIRE</Link>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white/60 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={startNewConversation}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors"
            >
              <Plus className="h-4 w-4" />
              New conversation
            </button>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto p-2">
            <div className="space-y-1">
              {conversations.map((convo) => (
                <button
                  key={convo.id}
                  onClick={() => {
                    setActiveConvoId(convo.id)
                    setSidebarOpen(false)
                  }}
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-left transition-colors",
                    convo.id === activeConvoId 
                      ? "bg-white/15 text-white" 
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <MessageSquare className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{convo.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar Footer - User Info */}
          <div className="p-4 border-t border-white/10">
            <div className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border",
              tierBadge.color
            )}>
              {tierBadge.icon && <tierBadge.icon className="h-4 w-4" />}
              {tierBadge.label}
            </div>
            {userTier === 'trial' && trialEndsAt && (
              <p className="text-xs text-white/50 mt-2 px-1">
                Trial ends: {new Date(trialEndsAt * 1000).toLocaleDateString()}
              </p>
            )}
            <div className="mt-3 space-y-1">
              <Link 
                href="/billing" 
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Settings className="h-4 w-4" />
                Settings & Billing
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-white lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-600 hover:text-slate-900"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-semibold text-slate-900">BAIRE</span>
          <div className={cn(
            "ml-auto px-2.5 py-1 rounded-full text-xs font-medium border",
            tierBadge.color
          )}>
            {tierBadge.label}
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-8">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "mb-8",
                  message.role === 'user' ? "flex justify-end" : ""
                )}
              >
                {message.role === 'assistant' ? (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">B</span>
                    </div>
                    <div className={cn("flex-1 min-w-0", message.isBlurred && "relative")}>
                      <p className={cn(
                        "text-[15px] leading-relaxed text-slate-800 whitespace-pre-wrap",
                        message.isBlurred && "blur-sm select-none"
                      )}>
                        {message.content}
                      </p>
                      {message.isBlurred && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg text-center">
                            <p className="font-medium text-slate-800 mb-2">Upgrade to see full response</p>
                            <Link href="/pricing" className="text-sage-600 hover:text-sage-700 font-medium">
                              View pricing →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="max-w-[85%] bg-sage-600 text-white px-4 py-3 rounded-2xl rounded-br-md">
                    <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="mb-8 flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">B</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="px-4 py-3 bg-red-50 border-t border-red-200">
            <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              {error}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-slate-200 bg-white p-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="relative flex items-end gap-3 bg-slate-100 rounded-2xl px-4 py-3">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isDisabled ? 'Upgrade to continue...' : 'Ask about home buying...'}
                disabled={isDisabled}
                rows={1}
                className="flex-1 bg-transparent text-[15px] text-slate-800 placeholder:text-slate-400 resize-none focus:outline-none disabled:opacity-50 max-h-[200px]"
              />
              <button
                type="submit"
                disabled={isDisabled || !input.trim()}
                className={cn(
                  "flex-shrink-0 p-2 rounded-xl transition-colors",
                  input.trim() && !isDisabled
                    ? "bg-sage-600 text-white hover:bg-sage-700"
                    : "bg-slate-300 text-slate-500"
                )}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-2">
              BAIRE provides educational information only, not professional advice.
            </p>
          </form>
        </div>
      </main>
    </div>
  )
}
