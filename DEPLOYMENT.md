# DeepTek AI - Production Deployment Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## 📦 Build Configuration

### Development
- Hot Module Replacement (HMR) enabled
- Tailwind CSS watching for changes
- Source maps enabled for debugging

### Production
- Code splitting with lazy loading
- Minified CSS and JS
- Console logs removed
- Optimized chunk sizes
- Tree shaking enabled

## 🏗️ Architecture

### Directory Structure
```
src/
├── components/          # Reusable components
│   ├── public/          # Public-facing components (Navbar, Footer)
│   └── ...              # Dashboard components
├── pages/               # Route pages
├── assets/              # Static assets
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
├── index.css            # Custom CSS
├── tailwind-input.css   # Tailwind directives
└── tailwind.css         # Generated Tailwind output
```

### Key Features
- ⚡ **Lazy Loading**: All routes are code-split for faster initial load
- 🛡️ **Error Boundary**: Graceful error handling with user-friendly messages
- 🔍 **SEO Optimized**: Dynamic meta tags per route
- ♿ **Accessible**: Skip links, ARIA labels, keyboard navigation
- 📱 **Responsive**: Mobile-first design with smooth animations
- 🎨 **Design System**: Custom Tailwind components and utilities

## 🔧 Environment Setup

### Requirements
- Node.js 18+
- npm 9+

### Environment Variables (for production)
Create a `.env.production` file:
```env
VITE_API_URL=https://api.deeptek.ai
VITE_GA_ID=GA-XXXXXXXXX
```

## 📊 Performance Optimization

### Chunk Strategy
- `react-vendor`: React core libraries (~150KB)
- `charts`: Recharts library (~200KB)
- `icons`: Lucide icons (~50KB)
- Route-based chunks: ~20-50KB each

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🚢 Deployment

### Static Hosting (Vercel, Netlify, etc.)
1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

### Docker
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name deeptek.ai;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔒 Security Checklist

- [x] HTTPS enforced
- [x] Content Security Policy headers
- [x] XSS protection
- [x] CORS configured
- [x] Rate limiting on API
- [x] Input sanitization

## 📝 License

Copyright © 2024 DeepTek AI. All rights reserved.
