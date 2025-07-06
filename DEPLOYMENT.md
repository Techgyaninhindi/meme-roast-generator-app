
# 🚀 AI Profile Roaster - Complete Deployment Guide

## 🎯 Quick Deployment Options

### 1. 🌟 Netlify (Recommended - Easiest)

**Step 1: Prepare Your Code**
```bash
# Build the project
npm run build

# Test build locally
npm run preview
```

**Step 2: Deploy to Netlify**

**Option A: Drag & Drop (Fastest)**
1. Go to https://app.netlify.com
2. Drag your `dist` folder to the deploy area
3. Your site is live instantly!

**Option B: Git Integration (Best for ongoing updates)**
1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (in Environment variables)

**Step 3: Configure Environment Variables**
Go to Site Settings > Environment Variables and add:
```env
VITE_OPENAI_API_KEY=sk-your-openai-key
VITE_FIREBASE_API_KEY=your-firebase-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
```

**Step 4: Custom Domain (Optional)**
1. Go to Domain Settings
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatic!

**💰 Cost:** Free forever for personal projects

---

### 2. ⚡ Vercel (Great Performance)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
# From your project directory
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: ai-profile-roaster
# - Directory: ./
# - Override settings? No
```

**Step 3: Environment Variables**
```bash
# Add environment variables
vercel env add VITE_OPENAI_API_KEY
# Enter your OpenAI API key

vercel env add VITE_FIREBASE_API_KEY
# Enter your Firebase API key

# Continue for all environment variables
```

**Step 4: Production Deploy**
```bash
vercel --prod
```

**💰 Cost:** Free tier available, $20/month for Pro

---

### 3. 🌐 VPS Hosting (DigitalOcean/Linode)

**Step 1: Create VPS**
- **DigitalOcean:** Create $5/month droplet (Ubuntu 22.04)
- **Linode:** Create $5/month Nanode
- **AWS EC2:** t3.micro instance

**Step 2: Server Setup**
```bash
# SSH into your server
ssh root@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 for process management
sudo npm install -g pm2
```

**Step 3: Deploy Application**
```bash
# Clone your repository
git clone https://github.com/yourusername/ai-profile-roaster.git
cd ai-profile-roaster

# Install dependencies
npm install

# Create environment file
nano .env
# Add all your environment variables

# Build the application
npm run build

# Copy built files to web directory
sudo mkdir -p /var/www/ai-roaster
sudo cp -r dist/* /var/www/ai-roaster/
```

**Step 4: Configure Nginx**
```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/ai-roaster
```

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/ai-roaster;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

**Step 5: Enable Site & SSL**
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/ai-roaster /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install Certbot for free SSL
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

**💰 Cost:** $5-10/month

---

### 4. 🏠 Shared Hosting (cPanel/DirectAdmin)

**⚠️ Limitations:** No Node.js, manual uploads, static files only

**Step 1: Build Locally**
```bash
npm run build
```

**Step 2: Upload Files**
1. Compress the `dist` folder
2. Upload to `public_html` via File Manager
3. Extract files

**Step 3: Configure .htaccess**
Create `.htaccess` in `public_html`:
```apache
# Enable rewrite engine
RewriteEngine On

# Handle client-side routing
RewriteBase /
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

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
    Header always set X-Content-Type-Options nosniff
</IfModule>
```

**Step 4: Update on Changes**
- Rebuild locally: `npm run build`
- Re-upload `dist` folder contents
- Clear browser cache

**💰 Cost:** $3-15/month

---

## 🔧 Environment Configuration

### Required Environment Variables

```bash
# OpenAI Configuration
VITE_OPENAI_API_KEY=sk-proj-xxxxx

# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdefghijk

# App Configuration
VITE_APP_NAME="AI Profile Roaster"
VITE_APP_URL=https://your-domain.com
VITE_PREMIUM_PRICE=99

# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Getting API Keys

#### 1. OpenAI API Key
1. Go to https://platform.openai.com
2. Sign up/Login
3. Go to API Keys section
4. Create new API key
5. Copy the key (starts with `sk-`)

#### 2. Firebase Configuration
1. Go to https://console.firebase.google.com
2. Create new project or select existing
3. Go to Project Settings > General
4. Scroll to "Your apps" section
5. Add web app or use existing config
6. Copy the configuration object

#### 3. Google Analytics (Optional)
1. Go to https://analytics.google.com
2. Create property
3. Get Measurement ID (G-XXXXXXXXXX)

---

## 🛡️ Security Best Practices

### 1. Environment Variables Security
```bash
# Never commit .env files
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.production" >> .gitignore

# Use different keys for development/production
VITE_OPENAI_API_KEY_DEV=sk-dev-key
VITE_OPENAI_API_KEY_PROD=sk-prod-key
```

### 2. Firebase Security Rules
```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Roasts are private to the user
    match /roasts/{roastId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
    
    // Admin-only collections
    match /admin/{document=**} {
      allow read, write: if request.auth != null && 
        request.auth.token.admin == true;
    }
  }
}

// Storage Rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /uploads/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 3. Content Security Policy
```html
<!-- Add to index.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://apis.google.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https: blob:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.openai.com https://*.googleapis.com;
">
```

---

## 📊 Performance Optimization

### 1. Build Optimization
```bash
# Analyze bundle size
npm install -g vite-bundle-analyzer
npx vite-bundle-analyzer

# Optimize images before build
npm install imagemin imagemin-webp imagemin-mozjpeg imagemin-pngquant
```

### 2. Code Splitting
```javascript
// Lazy load heavy components
const AdminPanel = lazy(() => import('./pages/AdminPanel'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));

// Wrap in Suspense
<Suspense fallback={<div>Loading...</div>}>
  <AdminPanel />
</Suspense>
```

### 3. Caching Strategy
```javascript
// Service Worker (public/sw.js)
const CACHE_NAME = 'ai-roaster-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});
```

---

## 🚨 Troubleshooting Common Issues

### 1. Build Failures
```bash
# Clear everything and restart
rm -rf node_modules package-lock.json dist
npm install
npm run build

# Check Node.js version
node --version  # Should be >= 18
```

### 2. Environment Variable Issues
```bash
# Check if variables are loaded
console.log('OpenAI Key:', import.meta.env.VITE_OPENAI_API_KEY?.slice(0, 10));

# Make sure VITE_ prefix is used
# ❌ OPENAI_API_KEY=xxx
# ✅ VITE_OPENAI_API_KEY=xxx
```

### 3. Routing Issues (404 on Refresh)
Make sure your hosting platform supports SPA routing:
- **Netlify:** Add `_redirects` file with `/* /index.html 200`
- **Vercel:** Add `vercel.json` with rewrites
- **Apache:** Use `.htaccess` with RewriteRule
- **Nginx:** Use `try_files $uri /index.html`

### 4. API Errors
```javascript
// Add error handling
const generateRoast = async () => {
  try {
    const response = await aiService.generateRoast(request);
    // Handle success
  } catch (error) {
    console.error('API Error:', error);
    // Show user-friendly error message
  }
};
```

---

## 📈 Monitoring & Analytics

### 1. Performance Monitoring
```javascript
// Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### 2. Error Tracking
```bash
# Install Sentry for error tracking
npm install @sentry/react @sentry/tracing

# Configure in main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

### 3. Custom Analytics
```javascript
// Track user actions
const trackRoastGeneration = (style, premium) => {
  if (window.gtag) {
    gtag('event', 'roast_generated', {
      'roast_style': style,
      'user_type': premium ? 'premium' : 'free',
      'value': premium ? 0 : 1
    });
  }
};
```

---

## 🎯 Final Checklist

### Pre-Deployment
- [ ] All environment variables configured
- [ ] Firebase project set up with authentication
- [ ] OpenAI API key added and tested
- [ ] Security rules configured
- [ ] Build passes without errors
- [ ] All features tested locally

### Post-Deployment
- [ ] Website loads correctly
- [ ] Authentication works (OTP login)
- [ ] Roast generation functional
- [ ] Admin panel accessible
- [ ] User dashboard working
- [ ] Analytics tracking active
- [ ] Error monitoring set up
- [ ] Performance monitoring active
- [ ] SSL certificate installed
- [ ] Custom domain configured (if applicable)

### Ongoing Maintenance
- [ ] Monitor API usage and costs
- [ ] Regular security updates
- [ ] Performance optimization
- [ ] User feedback collection
- [ ] Feature improvements
- [ ] Marketing and user acquisition

---

**🚀 Your AI Profile Roaster is now live and ready to go viral!**

For support, create an issue on GitHub or contact support@your-domain.com
