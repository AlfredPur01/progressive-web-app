
# Next.js PWA Template: Offline-First App with Animated Transitions & Push Notifications

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-000000?logo=next.js)](https://nextjs.org/)
[![PWA](https://img.shields.io/badge/PWA-Optimized-5A0FC8?logo=pwa)](https://web.dev/progressive-web-apps/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

**Author**: Alfreed Ayilara Pur 
**Connect**:  
[![Twitter](https://img.shields.io/badge/Twitter-@d_darkmystique-1DA1F2?logo=twitter)](https://x.com/d_darkmystique)  
[![TikTok](https://img.shields.io/badge/TikTok-@idan_0f_tech1-000000?logo=tiktok)](https://tiktok.com/@idan_of_tech1)
[![TikTok](https://img.shields.io/badge/TikTok-@alfred_pur.js-000000?logo=tiktok)](https://tiktok.com/@alfred_pur.js)

---

## 🌟 Key Features
- **App-Like Experience**: Smooth page transitions & installability
- **Offline-First Architecture**: Service worker caching for core content
- **Push Notifications**: Web Push API integration
- **Animated UI**: Framer Motion-powered transitions & hover effects
- **SEO-Optimized**: SSR/SSG & semantic HTML
- **Modern Design System**: Tailwind CSS + CSS variables

![App Preview] 
---

## 🛠️ Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Type Safety**: TypeScript 5
- **Styling**: Tailwind CSS + CSS Modules
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **PWA**: `next-pwa` + Workbox

---

## ⚡ Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/your-username/nextjs-pwa-template.git
cd nextjs-pwa-template
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Run Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

---

## 🔧 Core Configuration

### PWA Setup (`next.config.js`)
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

module.exports = withPWA({
  // Next.js config
});
```

### Web App Manifest (`public/manifest.json`)
```json
{
  "name": "Next.js PWA",
  "short_name": "NextPWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [...]
}
```

---

## 🎨 Design System

### Color Scheme
```css
:root {
  --primary: #2563eb;    /* Blue 600 */
  --secondary: #4f46e5;  /* Indigo 600 */
  --accent: #db2777;     /* Pink 600 */
}
```

### Typography
- **Primary Font**: [Inter](https://rsms.me/inter/) (via `next/font`)
- **Code Font**: [Geist Mono](https://vercel.com/font/mono)

### Animation Example
```tsx
import { motion } from 'framer-motion';

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Install App
</motion.button>
```

---

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nextjs-pwa-template)

### Build & Export
```bash
npm run build
npm start
```

---

## 📈 SEO Optimization

### Metadata Setup (`app/layout.tsx`)
```tsx
export const metadata = {
  title: 'Next.js PWA Template | Offline-First App',
  description: 'A production-ready PWA template with TypeScript, animations, and push notifications.',
  keywords: ['Next.js', 'PWA', 'TypeScript', 'Offline App'],
  openGraph: {
    images: '/og-image.jpg',
  },
};
```

---

## 📂 Repository Structure
```
.
├── public/
│   ├── manifest.json
│   └── service-worker.js
├── src/
│   ├── app/
│   │   ├── (main)/           # Core pages
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── styles/
│   └── utils/                # Service worker utils
├── .env.example
└── next.config.js
```

---

## 📚 Documentation
- [Project Wiki](https://github.com/your-username/nextjs-pwa-template/wiki)
- [API Reference](/docs/API.md)
- [Design System](/design-system.fig)

---

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)  
**Contribute**: [Guidelines](/CONTRIBUTING.md)  
**Report Issues**: [GitHub Issues](https://github.com/your-username/nextjs-pwa-template/issues)