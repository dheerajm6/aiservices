# 🚀 Netlify Deployment Guide for Valcom AI Services

## 🔧 Quick Fix for 404 Error

### **Step 1: Verify Repository Connection**
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click on your site: `valcom-ai-services`
3. Go to **Site settings** → **Build & deploy** → **Repository**
4. Ensure it's connected to: `https://github.com/dheerajm6/aiservices`

### **Step 2: Check Build Settings**
Ensure these settings are configured:

**Build Settings:**
- **Base directory**: `valcom-ai` (if monorepo) or leave empty
- **Build command**: `npm ci && npm run build`
- **Publish directory**: `dist`
- **Production branch**: `main`

### **Step 3: Manual Configuration (If Auto-detect Failed)**
If Netlify didn't pick up the `netlify.toml`, manually set:

1. **Site settings** → **Build & deploy** → **Build settings**
2. **Build command**: `npm ci && npm run build`
3. **Publish directory**: `dist`
4. **Environment variables**:
   - `NODE_VERSION`: `18`

### **Step 4: Clear Cache & Redeploy**
1. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**
2. Wait for build to complete
3. Check build logs for any errors

## 🐛 Common Issues & Solutions

### **Issue 1: Build Command Not Found**
**Error**: `npm: command not found`
**Solution**: Ensure Node.js 18 is specified in environment

### **Issue 2: Module Resolution Error**
**Error**: `Failed to resolve import`
**Solution**: Use `npm ci` instead of `npm install` for clean installs

### **Issue 3: 404 on Page Refresh**
**Error**: Direct URLs return 404
**Solution**: Ensure `_redirects` file is in `public` folder (✅ Already added)

### **Issue 4: MIME Type Errors**
**Error**: `application/octet-stream` instead of JavaScript
**Solution**: Headers configured in `netlify.toml` (✅ Already added)

## 📁 Current File Structure

```
valcom-ai/
├── netlify.toml          # ✅ Netlify configuration
├── .nvmrc               # ✅ Node version specification
├── public/
│   ├── _redirects       # ✅ SPA routing support
│   ├── manifest.json    # ✅ PWA manifest
│   ├── robots.txt       # ✅ SEO configuration
│   └── sitemap.xml      # ✅ Site structure
├── dist/                # ✅ Built files (auto-generated)
└── src/                 # ✅ Source code
```

## 🔍 Debugging Steps

### **1. Check Build Logs**
1. Go to **Deploys** tab
2. Click on the latest deploy
3. View **Deploy log**
4. Look for errors during:
   - Node.js installation
   - npm install/ci
   - npm run build
   - File publishing

### **2. Verify Build Output**
The successful build should show:
```
✓ 2036 modules transformed.
dist/index.html          4.97 kB
dist/assets/             (JS, CSS, images)
dist/manifest.json       
dist/robots.txt
dist/sitemap.xml
dist/favicon-*
```

### **3. Test Local Build**
Run locally to ensure build works:
```bash
npm ci
npm run build
cd dist
python -m http.server 8000  # Test locally
```

## 🔄 Alternative Deployment Method

If Git deployment fails, try **manual upload**:

1. **Build locally**: `npm run build`
2. **Zip the `dist` folder contents** (not the folder itself)
3. **Drag & drop to Netlify** deploy area
4. **Files should include**:
   - `index.html`
   - `assets/` folder
   - `manifest.json`
   - `robots.txt`
   - `sitemap.xml`
   - `favicon.*`
   - `_redirects`

## 📞 Support

If issues persist:
1. **Check Netlify Status**: [status.netlify.com](https://status.netlify.com)
2. **Review Build Logs**: Look for specific error messages
3. **Contact Netlify Support**: Share build logs and error details

## ✅ Expected Result

Once deployed successfully:
- **Homepage**: https://valcom-ai-services.netlify.app/
- **All routes work**: No 404 errors on refresh
- **Fast loading**: Optimized assets
- **PWA ready**: Manifest and service worker support
- **SEO optimized**: Meta tags and structured data

---

*Last updated: December 2024*