'use client'

import { useState } from 'react'
import { Layout } from '@/components/layout'
import { Bell } from 'lucide-react'

export default function Notifications() {
  const [permissionStatus, setPermissionStatus] = useState<NotificationPermission | null>(null)

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission()
      setPermissionStatus(permission)
      
      if (permission === 'granted') {
        new Notification('Notifications Enabled', {
          body: 'You will now receive push notifications',
          icon: '/icons/icon-192x192.png'
        })
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error)
    }
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">Notifications</h1>
        <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <div className="text-center space-y-4">
            <Bell className="w-16 h-16 mx-auto text-blue-600" />
            <h2 className="text-xl font-semibold">Enable Push Notifications</h2>
            <p className="text-gray-600">
              Stay updated with important alerts and notifications.
            </p>
            <button
              onClick={requestPermission}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {permissionStatus === 'granted'
                ? 'Notifications Enabled'
                : 'Enable Notifications'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}