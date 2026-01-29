'use client'

import { useState, useEffect } from 'react'
import { Loader2, UserPlus, UserMinus, Users, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CompUser {
  email: string
  customerId: string
  grantedAt: string | null
  note: string | null
}

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  
  // Grant access form
  const [grantEmail, setGrantEmail] = useState('')
  const [grantNote, setGrantNote] = useState('')
  
  // Revoke access form
  const [revokeEmail, setRevokeEmail] = useState('')
  
  // Comp users list
  const [compUsers, setCompUsers] = useState<CompUser[]>([])
  const [loadingUsers, setLoadingUsers] = useState(false)

  const authenticate = () => {
    if (adminKey.trim()) {
      setIsAuthenticated(true)
      loadCompUsers()
    }
  }

  const loadCompUsers = async () => {
    setLoadingUsers(true)
    try {
      const res = await fetch('/api/admin', {
        headers: { Authorization: `Bearer ${adminKey}` },
      })
      const data = await res.json()
      if (data.success) {
        setCompUsers(data.users)
      }
    } catch {
      console.error('Failed to load users')
    }
    setLoadingUsers(false)
  }

  const grantAccess = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminKey}`,
        },
        body: JSON.stringify({
          action: 'grant',
          email: grantEmail,
          note: grantNote || undefined,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: data.message })
        setGrantEmail('')
        setGrantNote('')
        loadCompUsers()
      } else {
        setMessage({ type: 'error', text: data.error })
      }
    } catch {
      setMessage({ type: 'error', text: 'Request failed' })
    }

    setLoading(false)
  }

  const revokeAccess = async (email: string) => {
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminKey}`,
        },
        body: JSON.stringify({
          action: 'revoke',
          email,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setMessage({ type: 'success', text: data.message })
        setRevokeEmail('')
        loadCompUsers()
      } else {
        setMessage({ type: 'error', text: data.error })
      }
    } catch {
      setMessage({ type: 'error', text: 'Request failed' })
    }

    setLoading(false)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-md w-full shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Admin Access
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Admin Key
              </label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && authenticate()}
                placeholder="Enter admin secret key"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none"
              />
            </div>
            <Button onClick={authenticate} className="w-full">
              Authenticate
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          BAIRE Admin
        </h1>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
            {message.text}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Grant Access */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-sage-100 rounded-lg">
                <UserPlus className="h-5 w-5 text-sage-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Grant Comp Access</h2>
            </div>
            
            <form onSubmit={grantAccess} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={grantEmail}
                  onChange={(e) => setGrantEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Note (optional)
                </label>
                <input
                  type="text"
                  value={grantNote}
                  onChange={(e) => setGrantNote(e.target.value)}
                  placeholder="e.g., Beta tester, Friend & family"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none text-sm"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Grant Access'}
              </Button>
            </form>
          </div>

          {/* Quick Revoke */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <UserMinus className="h-5 w-5 text-red-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Revoke Access</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={revokeEmail}
                  onChange={(e) => setRevokeEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none text-sm"
                />
              </div>
              <Button 
                onClick={() => revokeEmail && revokeAccess(revokeEmail)}
                disabled={loading || !revokeEmail}
                variant="outline"
                className="w-full border-red-200 text-red-700 hover:bg-red-50"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Revoke Access'}
              </Button>
            </div>
          </div>
        </div>

        {/* Comp Users List */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Users className="h-5 w-5 text-slate-600" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Comp Users ({compUsers.length})
              </h2>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={loadCompUsers}
              disabled={loadingUsers}
            >
              {loadingUsers ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Refresh'}
            </Button>
          </div>

          {compUsers.length === 0 ? (
            <p className="text-slate-500 text-sm py-8 text-center">
              No comp users yet
            </p>
          ) : (
            <div className="divide-y divide-slate-100">
              {compUsers.map((user) => (
                <div key={user.customerId} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{user.email}</p>
                    <p className="text-sm text-slate-500">
                      {user.note && <span className="mr-2">{user.note}</span>}
                      {user.grantedAt && (
                        <span>· Added {new Date(user.grantedAt).toLocaleDateString()}</span>
                      )}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => revokeAccess(user.email)}
                    disabled={loading}
                    className="text-red-600 hover:bg-red-50 border-red-200"
                  >
                    Revoke
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* API Info */}
        <div className="mt-8 bg-slate-100 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3">API Usage</h3>
          <div className="text-sm text-slate-600 space-y-2 font-mono">
            <p><strong>Grant:</strong> POST /api/admin {"{"} action: "grant", email: "..." {"}"}</p>
            <p><strong>Revoke:</strong> POST /api/admin {"{"} action: "revoke", email: "..." {"}"}</p>
            <p><strong>Check:</strong> POST /api/admin {"{"} action: "check", email: "..." {"}"}</p>
            <p><strong>List all:</strong> GET /api/admin</p>
            <p className="text-slate-500 mt-2">Header: Authorization: Bearer YOUR_ADMIN_SECRET</p>
          </div>
        </div>
      </div>
    </div>
  )
}
