import { Layout } from '@/components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Next.js PWA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a Progressive Web App built with Next.js and TypeScript.
            It features offline support, push notifications, and is installable on your device.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">📱 Installable</h2>
            <p className="text-gray-600">Install this app on your device for a native app-like experience.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">🔔 Push Notifications</h2>
            <p className="text-gray-600">Stay updated with real-time notifications.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">⚡ Offline Support</h2>
            <p className="text-gray-600">Access the app even without an internet connection.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}