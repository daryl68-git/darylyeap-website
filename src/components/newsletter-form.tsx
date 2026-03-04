'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail, CheckCircle2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      
      setIsSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center animate-in fade-in zoom-in duration-300">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-emerald-900 mb-2">Thank you for subscribing!</h3>
        <p className="text-emerald-700">
          <span className="whitespace-nowrap">Please check your inbox to verify your email and grab your free gift.</span>
        </p>
        <p className="text-emerald-700">
        <span className="whitespace-nowrap">(Can't find it? Check your 'Promotions' or 'Spam' folder)</span>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-slate-400" />
          </div>
          <Input
            type="email"
            placeholder="Enter your email address"
            className="pl-10 h-12 bg-white border-slate-200 focus:border-amber-500 focus:ring-amber-500 text-base text-slate-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          className="h-12 px-8 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : (
            'Subscribe'
          )}
        </Button>
      </div>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <p className="text-xs text-center text-slate-500">
        I won’t send you spam. You can unsubscribe at any time.
      </p>
    </form>
  )
}
