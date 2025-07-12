# TechFlow - Netlify Deployment Guide

## 🚀 Quick Deployment Steps

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TechFlow website"
   git branch -M main
   git remote add origin https://github.com/yourusername/techflow-website.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Netlify will automatically detect the `netlify.toml` configuration
   - Click "Deploy site"

### Option 2: Drag & Drop Deployment

1. **Build the project locally:**
   ```bash
   node build-netlify.js
   ```

2. **Deploy the build folder:**
   - Go to [Netlify](https://app.netlify.com)
   - Drag and drop the `dist/public` folder to Netlify
   - For the contact form to work, you'll need to upload the serverless function separately

## 📋 Project Configuration

The project is configured with the following files for Netlify deployment:

### `netlify.toml`
```toml
[build]
  command = "node build-netlify.js"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "20"

# Redirect all requests to index.html for SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# API endpoint redirects to Netlify Functions
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
```

### Serverless Function
- Location: `netlify/functions/api.js`
- Handles: Contact form submissions
- Features: Form validation, CORS headers

## 🌐 Features Available After Deployment

✅ **Static Frontend Features:**
- Modern responsive design
- Smooth scrolling navigation
- Animated counters
- Interactive UI components
- Mobile-friendly layout

✅ **Dynamic Features:**
- Contact form with validation
- Serverless form processing
- Toast notifications
- Real-time form feedback

## 🔧 Environment Variables (Optional)

If you want to add email notifications or external integrations:

1. In Netlify dashboard, go to Site Settings > Environment Variables
2. Add any required API keys:
   - `EMAIL_SERVICE_API_KEY` (for email notifications)
   - `CRM_API_KEY` (for CRM integration)

## 📝 Customization After Deployment

### Update Company Information
Edit the following files to customize for your company:
- `client/src/components/navigation.tsx` - Company name
- `client/src/components/hero-section.tsx` - Hero content
- `client/src/components/contact-section.tsx` - Contact details

### Domain Setup
1. In Netlify dashboard, go to Domain Management
2. Add your custom domain
3. Configure DNS settings as instructed

## 🚀 Performance Optimizations

The deployed site includes:
- Optimized bundle splitting
- Compressed assets
- CDN delivery
- Fast loading times
- Mobile optimization

## 📞 Support

If you encounter any issues during deployment:
1. Check the Netlify build logs
2. Verify all files are committed to Git
3. Ensure Node.js version 20 is being used
4. Check that the contact form serverless function is properly deployed

Your TechFlow website will be live at: `https://your-site-name.netlify.app`