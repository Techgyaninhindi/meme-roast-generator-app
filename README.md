
# 🔥 AI Profile Roaster - Complete Documentation

> **AI-Powered Hinglish Roast Generator for Entertainment & Viral Sharing**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

1. [🎯 Overview](#overview)
2. [✨ Features](#features)
3. [🛠️ Technology Stack](#technology-stack)
4. [🚀 Installation & Setup](#installation--setup)
5. [🌐 Hosting Options](#hosting-options)
6. [👨‍💼 Admin Panel](#admin-panel)
7. [👤 User Dashboard](#user-dashboard)
8. [🔧 Configuration](#configuration)
9. [📱 API Integration](#api-integration)
10. [💰 Monetization](#monetization)
11. [🔒 Security](#security)
12. [📊 Analytics](#analytics)
13. [🚨 Troubleshooting](#troubleshooting)
14. [📞 Support](#support)

## 🎯 Overview

AI Profile Roaster is a modern web application that generates funny, sarcastic Hinglish roasts based on user photos and bios. Perfect for entertainment, viral content creation, and social media sharing.

### 🎪 Demo Credentials

**🔗 Live Demo:** `https://your-domain.com`

**👨‍💼 Admin Panel:**
- **URL:** `https://your-domain.com/admin`
- **Login:** Admin login system (Configure in Firebase Auth)
- **Features:** User management, ad management, analytics, system monitoring

**👤 User Dashboard:**
- **URL:** `https://your-domain.com/dashboard`
- **Login:** Phone OTP authentication
- **Features:** Roast history, statistics, premium subscription

## ✨ Features

### 🤖 AI-Powered Roast Generation
- **8 Roast Styles:** Classic, Brutal, Filmy, Desi, Gen-Z, Influencer, Cringe, Mild
- **OpenAI Integration:** GPT-3.5 Turbo for dynamic content generation
- **Unique Results:** Anti-repetition system ensures fresh roasts
- **Hinglish Support:** Perfect blend of Hindi and English

### 📸 Multiple Input Methods
- **Photo Upload:** Selfie/profile picture analysis
- **Bio Input:** Text-based personality roasting
- **Instagram Links:** Profile analysis (future feature)
- **Friend Roasting:** Upload friend's photo for roasts

### 🎨 Meme Card Generator
- **Instant Meme Creation:** Convert roasts to shareable image cards
- **Social Media Formats:** 1080x1080 and 9:16 aspect ratios
- **Custom Watermarking:** Brand protection
- **Download & Share:** Direct social media integration

### 💰 Ad Integration & Monetization
- **Banner Ads:** Top and bottom placement
- **Interstitial Ads:** Between roast generations
- **Native Ads:** Seamlessly integrated content
- **Premium Subscriptions:** Ad-free experience at ₹99/year

### 📊 Analytics & Management
- **User Analytics:** Engagement, retention, conversion tracking
- **Revenue Tracking:** Subscription and ad revenue monitoring
- **System Health:** Server monitoring, API usage, performance metrics

## 🛠️ Technology Stack

### Frontend
```json
{
  "framework": "React 18.3.1",
  "language": "TypeScript",
  "styling": "Tailwind CSS + shadcn/ui",
  "routing": "React Router DOM",
  "state": "React Query + Context API",
  "build": "Vite"
}
```

### Backend Services
```json
{
  "authentication": "Firebase Auth (Phone OTP)",
  "database": "Firestore",
  "storage": "Firebase Cloud Storage",
  "ai": "OpenAI GPT-3.5 Turbo",
  "analytics": "Google Analytics + Custom Dashboard"
}
```

### Deployment
```json
{
  "hosting": "Netlify/Vercel (Recommended)",
  "domain": "Custom domain support",
  "ssl": "Automatic HTTPS",
  "cdn": "Global CDN for fast loading"
}
```

## 🚀 Installation & Setup

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git
```

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/ai-profile-roaster.git
cd ai-profile-roaster
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Configuration
Create `.env` file:
```env
# OpenAI Configuration
VITE_OPENAI_API_KEY=sk-your-openai-api-key

# Firebase Configuration
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef

# App Configuration
VITE_APP_NAME="AI Profile Roaster"
VITE_APP_URL=https://your-domain.com
VITE_PREMIUM_PRICE=99
```

### Step 4: Firebase Setup
1. Create Firebase project at https://console.firebase.google.com
2. Enable Authentication (Phone provider)
3. Create Firestore database
4. Set up Storage bucket
5. Configure security rules

### Step 5: Run Development Server
```bash
npm run dev
```
Open http://localhost:5173

### Step 6: Build for Production
```bash
npm run build
```

## 🌐 Hosting Options

### 🎯 Recommended: Netlify (Easiest)

**Pros:**
- ✅ Free tier available
- ✅ Automatic deployments from Git
- ✅ Built-in CDN
- ✅ Custom domain support
- ✅ HTTPS automatically

**Setup:**
1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

**Cost:** Free for personal projects, $19/month for teams

### 🚀 Alternative: Vercel

**Pros:**
- ✅ Excellent React support
- ✅ Edge functions support
- ✅ Analytics included
- ✅ Global CDN

**Setup:**
1. Connect GitHub to Vercel
2. Auto-detects React settings
3. Add environment variables
4. Deploy automatically

**Cost:** Free tier, $20/month for Pro

### 💻 VPS Hosting (Advanced)

**Recommended Providers:**
- **DigitalOcean:** $5/month droplet
- **Linode:** $5/month Nanode
- **AWS EC2:** Variable pricing
- **Google Cloud:** $10/month credit

**Setup Process:**
```bash
# On your VPS
sudo apt update
sudo apt install nginx nodejs npm

# Clone and build
git clone your-repo
cd ai-profile-roaster
npm install
npm run build

# Configure Nginx
sudo nano /etc/nginx/sites-available/ai-roaster
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /var/www/ai-roaster/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 🏠 Can You Use Shared Hosting?

**❌ Not Recommended for Shared Hosting Because:**
- React apps need Node.js build process
- Static file serving only
- No server-side rendering support
- Limited environment variable support

**✅ Workaround for Shared Hosting:**
1. Build locally: `npm run build`
2. Upload `dist` folder contents to public_html
3. Configure .htaccess for SPA routing:

```apache
# .htaccess
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 👨‍💼 Admin Panel

### Access Details
**URL:** `https://your-domain.com/admin`
**Authentication:** Firebase Admin SDK (configure separately)

### Features Overview

#### 📊 Analytics Dashboard
- **Real-time Stats:** Users, revenue, engagement
- **Revenue Breakdown:** Subscriptions vs ads
- **User Metrics:** Daily active users, retention
- **Performance Monitoring:** Server health, API usage

#### 🎯 Ad Management
- **Campaign Creation:** Create and manage ad campaigns
- **Performance Tracking:** CTR, impressions, revenue
- **Ad Placement Control:** Banner, interstitial, native
- **Revenue Optimization:** A/B testing support

#### 👥 User Management
- **User Profiles:** Complete user information
- **Subscription Status:** Premium vs free users
- **Activity Monitoring:** Last login, usage patterns
- **Support Tools:** Direct messaging, account management

#### ⚙️ System Settings
- **App Configuration:** Pricing, features, limits
- **API Management:** OpenAI key configuration
- **Maintenance Mode:** App-wide maintenance control
- **Security Settings:** Authentication rules

### Admin Panel Code Structure
```
src/pages/AdminPanel.tsx
├── Analytics Tab
├── Ad Management Tab
├── User Management Tab
├── Revenue Tracking Tab
├── System Health Tab
└── Settings Tab
```

## 👤 User Dashboard

### Access Details
**URL:** `https://your-domain.com/dashboard`
**Authentication:** Phone OTP via Firebase Auth

### Features Overview

#### 📈 Personal Analytics
- **Roast Statistics:** Total roasts generated
- **Engagement Metrics:** Shares, downloads
- **Achievement System:** Badges and milestones
- **Usage History:** Complete roast timeline

#### 🔥 Roast History
- **Saved Roasts:** Bookmark favorite roasts
- **Category Filters:** Filter by roast style
- **Search Function:** Find specific roasts
- **Export Options:** Download or share collections

#### 💎 Premium Features
- **Subscription Status:** Current plan details
- **Premium Benefits:** Ad-free experience, priority generation
- **Billing History:** Payment records
- **Upgrade Options:** Plan comparison

#### 🎨 Customization
- **Profile Settings:** Name, preferences
- **Roast Preferences:** Favorite styles
- **Notification Settings:** Email/SMS preferences
- **Privacy Controls:** Data sharing options

## 🔧 Configuration

### OpenAI API Setup
1. Get API key from https://platform.openai.com
2. Add to environment variables
3. Configure rate limits in `src/services/aiService.ts`
4. Monitor usage in OpenAI dashboard

### Firebase Configuration
```javascript
// src/config/firebase.js
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};
```

### Ad Configuration
```typescript
// src/hooks/useAdManager.tsx
const adConfig = {
  interstitialFrequency: 3, // Show after every 3 roasts
  bannerFrequency: 30, // Refresh every 30 seconds
  nativeAdFrequency: 5 // Show every 5 actions
};
```

## 📱 API Integration

### OpenAI Integration
```typescript
// Example API call
const generateRoast = async (prompt: string) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.9
    })
  });
};
```

### Rate Limiting
- **OpenAI:** 3 requests/minute (free tier)
- **Firebase:** 50,000 reads/day (free tier)
- **Implement caching** for repeated requests

## 💰 Monetization

### Revenue Streams

#### 1. Premium Subscriptions (₹99/year)
**Benefits:**
- ✅ No ads
- ✅ Unlimited roasts
- ✅ Premium roast styles
- ✅ Priority processing
- ✅ Advanced customization

#### 2. Advertisement Revenue
**Ad Types:**
- **Banner Ads:** ₹0.50 per 1000 impressions
- **Interstitial Ads:** ₹2.00 per 1000 impressions
- **Native Ads:** ₹1.50 per 1000 impressions

**Expected Revenue:**
- **10,000 MAU:** ₹15,000-25,000/month
- **50,000 MAU:** ₹75,000-125,000/month
- **100,000 MAU:** ₹150,000-250,000/month

#### 3. API Licensing
- White-label solutions for other apps
- Enterprise integrations
- Custom roast generation services

### Payment Integration
```bash
# Install Stripe or Razorpay
npm install @stripe/stripe-js
# or
npm install razorpay
```

## 🔒 Security

### Best Practices Implemented

#### 1. Data Protection
- **Firebase Security Rules:** Restrict data access
- **Input Validation:** Prevent injection attacks
- **File Upload Limits:** Prevent abuse
- **Rate Limiting:** API protection

#### 2. User Privacy
- **GDPR Compliance:** Data deletion rights
- **Consent Management:** Clear privacy policies
- **Data Minimization:** Collect only necessary data
- **Secure Storage:** Encrypted sensitive data

#### 3. Content Moderation
- **AI Content Filtering:** Prevent offensive content
- **User Reporting:** Community moderation
- **Admin Controls:** Manual content review
- **Compliance Monitoring:** Legal requirement adherence

### Security Configuration
```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /roasts/{roastId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📊 Analytics

### Tracking Implementation

#### 1. Google Analytics 4
```javascript
// Install GA4
npm install gtag

// Track custom events
gtag('event', 'roast_generated', {
  'roast_style': 'classic',
  'user_type': 'premium'
});
```

#### 2. Custom Analytics Dashboard
- **User Engagement:** Session duration, bounce rate
- **Feature Usage:** Most popular roast styles
- **Conversion Funnel:** Free to premium conversion
- **Revenue Analytics:** MRR, ARPU, LTV

#### 3. Performance Monitoring
```javascript
// Performance tracking
const trackPerformance = () => {
  const navigation = performance.getEntriesByType('navigation')[0];
  const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
  
  gtag('event', 'page_load_time', {
    'value': loadTime,
    'metric_id': 'LCP'
  });
};
```

## 🚨 Troubleshooting

### Common Issues & Solutions

#### 1. Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version # Should be >= 18
```

#### 2. Firebase Connection Issues
```javascript
// Check Firebase config
console.log('Firebase Config:', firebaseConfig);

// Test connection
firebase.auth().onAuthStateChanged((user) => {
  console.log('Auth state:', user);
});
```

#### 3. OpenAI API Issues
- **Rate Limits:** Implement exponential backoff
- **API Key:** Verify key in OpenAI dashboard
- **Quota:** Monitor usage and billing

#### 4. Deployment Issues
```bash
# Netlify deployment
npm run build && netlify deploy --prod --dir=dist

# Check environment variables
echo $VITE_OPENAI_API_KEY
```

### Performance Optimization

#### 1. Code Splitting
```javascript
// Lazy load components
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
```

#### 2. Image Optimization
```javascript
// Compress uploaded images
const compressImage = (file) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  // Implement compression logic
};
```

#### 3. Caching Strategy
```javascript
// Service Worker for caching
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
```

## 📞 Support

### Getting Help

#### 1. Documentation
- **README.md:** Complete setup guide
- **API Docs:** `/docs/api/` endpoint documentation
- **Component Docs:** Storybook integration

#### 2. Community Support
- **GitHub Issues:** Bug reports and feature requests
- **Discord Server:** Real-time community help
- **Stack Overflow:** Tag your questions with `ai-profile-roaster`

#### 3. Professional Support
- **Email:** support@your-domain.com
- **Response Time:** 24-48 hours
- **Premium Support:** Available for enterprise customers

### Contributing

#### 1. Development Setup
```bash
git clone https://github.com/yourusername/ai-profile-roaster.git
cd ai-profile-roaster
npm install
npm run dev
```

#### 2. Pull Request Guidelines
- Fork the repository
- Create feature branch: `git checkout -b feature/amazing-feature`
- Commit changes: `git commit -m 'Add amazing feature'`
- Push to branch: `git push origin feature/amazing-feature`
- Open Pull Request

#### 3. Code Standards
- **TypeScript:** Strict mode enabled
- **ESLint:** Airbnb configuration
- **Prettier:** Code formatting
- **Testing:** Jest + React Testing Library

### License
```
MIT License

Copyright (c) 2024 AI Profile Roaster

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🎉 Quick Start Commands

```bash
# Clone and setup
git clone https://github.com/yourusername/ai-profile-roaster.git
cd ai-profile-roaster
npm install

# Development
npm run dev

# Production build
npm run build

# Deploy to Netlify
npm run build && netlify deploy --prod --dir=dist

# Deploy to Vercel
vercel --prod
```

**🚀 Your AI Profile Roaster is ready to go viral!**

---

*For the latest updates and detailed guides, visit our [GitHub Wiki](https://github.com/yourusername/ai-profile-roaster/wiki)*
