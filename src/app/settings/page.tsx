'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout'
import { Moon, Sun, Smartphone } from 'lucide-react'

export default function Settings() {
  const [theme, setTheme] = useState('light')
  
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">Settings</h1>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Smartphone className="w-6 h-6 mr-2" />
              App Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {theme === 'light' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span>Theme</span>
                </div>
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}