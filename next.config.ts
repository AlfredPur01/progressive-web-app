import type { NextConfig } from 'next'
import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.placeholder.com'],
  },
}

export default withPWA(config)