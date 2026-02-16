# 🚀 Deploy Your Skorin Website

## Method 1: Vercel (Recommended - Free & Easy)

### Step 1: Go to Vercel.com
1. Visit https://vercel.com
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"

### Step 2: Import Your Project
1. Click "Add New..." → "Project"
2. Select your `skorin_website` repository from GitHub
3. Click "Import"

### Step 3: Configure Settings
1. **Framework Preset**: Next.js (should be auto-detected)
2. **Build Command**: `npm run build` (auto-filled)
3. **Output Directory**: `.next` (auto-filled)
4. **Install Command**: `npm install` (auto-filled)

### Step 4: Deploy
1. Click "Deploy"
2. Wait for deployment (2-3 minutes)
3. Your site will be live at: `https://skorin-website.vercel.app`

---

## Method 2: Netlify (Alternative)

### Step 1: Go to Netlify.com
1. Visit https://netlify.com
2. Click "Sign up" → "Continue with GitHub"

### Step 2: Import Site
1. Click "Add new site" → "Import an existing project"
2. Select your `skorin_website` repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Add environment variable: `NODE_VERSION=18`

### Step 3: Deploy
1. Click "Deploy site"
2. Your site will be live at a random `.netlify.app` URL

---

## Method 3: GitHub Pages (Free Static Hosting)

### Step 1: Update package.json
Add this script to your `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

### Step 2: Configure Next.js for Static Export
Add to `next.config.ts`:
```typescript
const config: Config = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

### Step 3: Deploy
```bash
npm run export
# Upload the 'out' folder to GitHub Pages
```

---

## 🎯 Recommended: Vercel

**Why Vercel is best for your project:**
- ✅ Built by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic deployments on git push
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Custom domains supported

---

## 🔧 Troubleshooting

### If Vercel CLI doesn't work (corporate network):
1. Use the web interface at vercel.com
2. Or try with VPN if available
3. Or use Netlify as alternative

### If deployment fails:
1. Check if all dependencies are in package.json
2. Ensure Next.js version is compatible
3. Check build logs for specific errors

---

## 📱 After Deployment

Once deployed, you'll get:
- 🌐 Live URL (e.g., `https://skorin-website.vercel.app`)
- 🔗 Automatic deployments on git push
- 📊 Analytics and performance metrics
- 🔒 Free SSL certificate
- 🌍 Global CDN distribution

---

## 🎉 Next Steps

1. Choose your deployment method (Vercel recommended)
2. Follow the steps above
3. Share your live website URL
4. Set up custom domain if needed

Your professional Skorin website will be live in minutes! 🚀
