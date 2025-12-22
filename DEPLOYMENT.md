git# Deployment Guide

## Step 1: Initialize Git Repository

If you haven't already initialized Git, run these commands in your project directory:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Boutique website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name your repository (e.g., `boutique-website`)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 3: Connect Local Repository to GitHub

After creating the GitHub repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add GitHub as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main


# Push to GitHub
git push -u origin main
```

**Note:** If you're using SSH instead of HTTPS:
```bash
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git
```

## Step 4: Deploy to Vercel

### Option A: Using Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login (you can use your GitHub account)

2. Click **"Add New Project"** or **"Import Project"**

3. Select your GitHub repository (the one you just created)

4. Vercel will auto-detect your project settings:
   - **Framework Preset:** Vite (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (should auto-fill)
   - **Output Directory:** `dist` (should auto-fill)
   - **Install Command:** `npm install` (should auto-fill)

5. Click **"Deploy"**

6. Wait 1-2 minutes for deployment to complete

7. **Your website is now live!** Vercel will give you a URL like:
   - `https://your-project-name.vercel.app`

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No (first time)
# - Project name? (press enter for default)
# - Directory? (press enter for ./)
# - Override settings? No
```

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

---

## 🔄 How Updates Work

### Making Changes and Updating the Live Site

**It's super simple!** Just follow these steps:

1. **Make your changes locally:**
   - Edit `src/data/designs.json` to add/update designs
   - Edit `src/config.js` to update contact info
   - Edit any component/page files
   - Add new images to `public/images/`

2. **Test locally (optional but recommended):**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173` to see your changes

3. **Commit and push to GitHub:**
   ```bash
   # Add your changes
   git add .

   # Commit with a descriptive message
   git commit -m "Add new designs"  # or whatever describes your changes

   # Push to GitHub
   git push
   ```

4. **Vercel automatically deploys!**
   - Vercel detects the push to GitHub
   - Automatically runs `npm install` and `npm run build`
   - Deploys the new version
   - Usually takes 1-2 minutes
   - Your site is updated automatically!

### Viewing Deployment Status

- Go to your Vercel dashboard
- Click on your project
- You'll see all deployments with status:
  - ✅ **Ready** = Live and working
  - ⏳ **Building** = Currently deploying
  - ❌ **Error** = Something went wrong (check logs)

### Preview Deployments

- Every push creates a new deployment
- Vercel gives you a preview URL for each deployment
- You can test before it goes live
- Production URL updates automatically when deployment succeeds

---

## 📝 Common Update Scenarios

### Adding New Designs

1. Add images to `public/images/designs/`
2. Edit `src/data/designs.json`:
   ```json
   {
     "id": "new-design-001",
     "category": "designer-blouses",
     "name": "New Design Name",
     "price": "2000",
     "priceRange": "₹2,000 - ₹3,000",
     "description": "Description here",
     "fabric": "Silk",
     "work": "Embroidery",
     "images": ["/images/designs/new-design.png"]
   }
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new design: New Design Name"
   git push
   ```

### Updating Contact Information

1. Edit `src/config.js`
2. Update phone, address, Instagram, etc.
3. Commit and push:
   ```bash
   git add src/config.js
   git commit -m "Update contact information"
   git push
   ```

### Adding New Categories

1. Add category image to `public/images/categories/`
2. Edit `src/data/designs.json` - add to `categories` array
3. Commit and push

---

## 🐛 Troubleshooting

### Build Fails on Vercel

1. Check Vercel deployment logs
2. Common issues:
   - Missing dependencies → Check `package.json`
   - Build errors → Test locally with `npm run build`
   - Image paths wrong → Check paths in `designs.json`

### Changes Not Showing

1. Wait 1-2 minutes (deployment takes time)
2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check Vercel dashboard for deployment status
4. Check browser console for errors

### Git Push Issues

If you get authentication errors:
```bash
# Use personal access token instead of password
# Or set up SSH keys
```

---

## ✅ Quick Reference

**Initial Setup:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

**Regular Updates:**
```bash
git add .
git commit -m "Description of changes"
git push
```

**That's it!** Vercel handles the rest automatically. 🚀

