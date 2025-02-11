'use client'


import { Layout } from '@/components/layout'

export default function Features() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-4">Offline Support</h2>
            <p className="text-gray-600">Access your content even without internet connection.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-4">Push Notifications</h2>
            <p className="text-gray-600">Stay updated with real-time alerts.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}