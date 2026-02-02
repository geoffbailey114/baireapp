'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Send, Loader2, AlertCircle, Menu, Plus, MessageSquare, Settings, Sparkles, Trash2, PanelLeftClose, PanelLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { UserProfile } from '@/lib/user-profile'

const STORAGE_KEY = 'baire_conversations'
const SIDEBAR_KEY = 'baire_sidebar_collapsed'

// Format message content with markdown-style formatting
function formatMessageContent(content: string): React.ReactNode {
  // Split by lines to handle upgrade message specially
  const lines = content.split('\n')
  
  return lines.map((line, lineIndex) => {
    // Check if this is an upgrade nudge line (starts with * and ends with *)
    const isUpgradeNudge = /^\*For more detailed|^\*Upgrade to Access|^\*For comprehensive/i.test(line.trim())
    
    if (isUpgradeNudge) {
      // Style upgrade message as a standout callout
      const cleanText = line.replace(/^\*|\*$/g, '').trim()
      return (
        <span key={lineIndex} className="block mt-4 pt-3 border-t border-sage-200">
          <span className="inline-flex items-center gap-2 text-sage-700 italic">
            <span className="text-sage-500">💡</span>
            {cleanText}
          </span>
          {lineIndex < lines.length - 1 && '\n'}
        </span>
      )
    }
    
    // Handle regular markdown formatting
    let formatted: React.ReactNode = line
    
    // Bold: **text**
    if (line.includes('**')) {
      const parts = line.split(/\*\*([^*]+)\*\*/g)
      formatted = parts.map((part, i) => 
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
      )
    }
    
    // Italic: *text* (single asterisks, but not the upgrade line)
    else if (line.includes('*') && !isUpgradeNudge) {
      const parts = line.split(/\*([^*]+)\*/g)
      formatted = parts.map((part, i) => 
        i % 2 === 1 ? <em key={i}>{part}</em> : part
      )
    }
    
    return (
      <span key={lineIndex}>
        {formatted}
        {lineIndex < lines.length - 1 && '\n'}
      </span>
    )
  })
}

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
  createdAt: string
}

interface ChatInterfaceProps {
  isPaid: boolean
  isTrialExhausted: boolean
  onMessageSent?: () => void
  userTier?: 'trial' | 'access' | 'offer' | 'comp'
  trialEndsAt?: number | null
  userProfile?: UserProfile | null
}

function getWelcomeMessage(profile?: UserProfile | null): Message {
  let content = `Welcome to BAIRE! I'm here to help you navigate the home-buying process with confidence.`
  
  if (profile?.onboardingCompleted && profile?.journeyStage) {
    if (profile.journeyStage === 'starting') {
      content = `Welcome to BAIRE! I see you're just starting to explore home buying. I'm here to help you understand the process from the ground up.`
    } else if (profile.journeyStage === 'shopping') {
      content = `Welcome back to BAIRE! Since you're actively shopping, I can help you evaluate properties, schedule showings, and understand what to look for.`
    } else if (profile.journeyStage === 'ready-offer') {
      content = `Welcome to BAIRE! You're ready to make moves. I can help you craft competitive offers and navigate negotiations.`
    } else if (profile.journeyStage === 'under-contract') {
      content = `Welcome to BAIRE! Congratulations on getting under contract. I can help you navigate inspections, contingencies, and the path to closing.`
    }
    
    if (profile.buyerExperience === 'first-time') {
      content += ` As a first-time buyer, don't hesitate to ask about anything—no question is too basic.`
    }
  }
  
  content += `

Ask me anything about:
• Scheduling showings & what to look for
• Understanding offers, contingencies, and terms
• Negotiation strategies
• The closing process

What would you like to explore?`

  return {
    id: 'welcome',
    role: 'assistant',
    content,
  }
}

export function ChatInterfaceNew({ 
  isPaid, 
  isTrialExhausted, 
  onMessageSent,
  userTier = 'trial',
  trialEndsAt,
  userProfile
}: ChatInterfaceProps) {
  const welcomeMessage = getWelcomeMessage(userProfile)
  const [isInitialized, setIsInitialized] = useState(false)
  
  const createDefaultConversation = useCallback((): Conversation => ({
    id: 'default',
    title: 'New conversation',
    messages: [welcomeMessage],
    createdAt: new Date().toISOString(),
  }), [welcomeMessage])
  
  const [conversations, setConversations] = useState<Conversation[]>([createDefaultConversation()])
  const [activeConvoId, setActiveConvoId] = useState('default')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Load from localStorage
  useEffect(() => {
    try {
      const savedCollapsed = localStorage.getItem(SIDEBAR_KEY)
      if (savedCollapsed !== null) {
        setSidebarCollapsed(savedCollapsed === 'true')
      }
      
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Conversation[]
        if (parsed && parsed.length > 0) {
          setConversations(parsed)
          setActiveConvoId(parsed[0].id)
        }
      }
    } catch (e) {
      console.error('Failed to load from localStorage:', e)
    }
    setIsInitialized(true)
  }, [])

  // Save conversations
  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations))
      } catch (e) {
        console.error('Failed to save conversations:', e)
      }
    }
  }, [conversations, isInitialized])

  // Save sidebar state
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(SIDEBAR_KEY, String(sidebarCollapsed))
    }
  }, [sidebarCollapsed, isInitialized])

  const activeConvo = conversations.find(c => c.id === activeConvoId) || conversations[0]
  const messages = activeConvo?.messages || []

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      messages: [welcomeMessage],
      createdAt: new Date().toISOString(),
    }
    setConversations(prev => [newConvo, ...prev])
    setActiveConvoId(newConvo.id)
    setSidebarOpen(false)
  }

  const deleteConversation = (convoId: string) => {
    if (conversations.length === 1) {
      setConversations([createDefaultConversation()])
      setActiveConvoId('default')
    } else {
      setConversations(prev => prev.filter(c => c.id !== convoId))
      if (activeConvoId === convoId) {
        const remaining = conversations.filter(c => c.id !== convoId)
        setActiveConvoId(remaining[0]?.id || 'default')
      }
    }
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
        return { label: 'Full Access', icon: Sparkles, color: 'bg-sage-100 text-sage-700 border-sage-300' }
      case 'offer':
        return { label: 'Full Access', icon: Sparkles, color: 'bg-sage-100 text-sage-700 border-sage-300' }
      case 'access':
        return { label: 'Access', icon: null, color: 'bg-sage-100 text-sage-700 border-sage-300' }
      default:
        return { label: 'Free Trial', icon: null, color: 'bg-amber-50 text-amber-700 border-amber-200' }
    }
  }

  const tierBadge = getTierBadge()

  // Sidebar content component to avoid duplication
  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-sage-200">
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="text-sage-800 font-semibold text-lg">BAIRE</Link>
          {isMobile && (
            <button 
              onClick={() => setSidebarOpen(false)}
              className="text-sage-500 hover:text-sage-700 p-1"
            >
              <PanelLeftClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <button
          onClick={startNewConversation}
          className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg border border-sage-300 bg-white hover:bg-sage-100 text-sage-700 text-sm font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          New conversation
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {conversations.map((convo) => (
            <div
              key={convo.id}
              className={cn(
                "group w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-left transition-colors",
                convo.id === activeConvoId 
                  ? "bg-sage-200 text-sage-900" 
                  : "text-sage-600 hover:bg-sage-100 hover:text-sage-800"
              )}
            >
              <button
                onClick={() => {
                  setActiveConvoId(convo.id)
                  if (isMobile) setSidebarOpen(false)
                }}
                className="flex-1 flex items-center gap-2 min-w-0"
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{convo.title}</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteConversation(convo.id)
                }}
                className="opacity-0 group-hover:opacity-100 p-1 hover:bg-sage-300 rounded transition-all"
                title="Delete conversation"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-sage-200">
        <div className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border",
          tierBadge.color
        )}>
          {tierBadge.icon && <tierBadge.icon className="h-4 w-4" />}
          {tierBadge.label}
        </div>
        <div className="mt-3">
          <Link 
            href="/billing" 
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-sage-600 hover:bg-sage-100 hover:text-sage-800 transition-colors"
          >
            <Settings className="h-4 w-4" />
            Settings & Billing
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 flex bg-white">
      {/* Desktop Sidebar */}
      <aside className={cn(
        "hidden lg:flex flex-col border-r border-sage-200 bg-sage-50 transition-all duration-300 ease-in-out overflow-hidden",
        sidebarCollapsed ? "w-0" : "w-72"
      )}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-sage-50 border-r border-sage-200 lg:hidden">
            <SidebarContent isMobile />
          </aside>
        </>
      )}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 bg-white">
          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-600 hover:text-slate-900 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          {/* Desktop collapse toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex p-2 -ml-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title={sidebarCollapsed ? "Show sidebar" : "Hide sidebar"}
          >
            {sidebarCollapsed ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
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
                      <div className={cn(
                        "text-[15px] leading-relaxed text-slate-800 whitespace-pre-wrap",
                        message.isBlurred && "blur-sm select-none"
                      )}>
                        {formatMessageContent(message.content)}
                      </div>
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

        {/* Input */}
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
