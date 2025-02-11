// src/components/layout.tsx
'use client'

import { useState, useEffect } from 'react'
import { Navigation } from './navigation'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error)
        })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>
      <footer className="bg-white shadow-lg mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2025 PWA App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}