# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Your Boutique**
   - Open `src/config.js`
   - Update `whatsappPhone` with your WhatsApp number (include country code, no + or spaces)
   - Update `address`, `phone`, and `instagram` with your details

3. **Add Your Images**
   - Place category images in `public/images/categories/`
   - Place design images in `public/images/designs/`
   - Update image paths in `src/data/designs.json` to match your files

4. **Update Designs**
   - Edit `src/data/designs.json` to add/update your designs and categories
   - Follow the existing JSON structure

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Build for Production**
   ```bash
   npm run build
   ```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live!

## Image Requirements

- **Category Images**: Recommended size 800x800px, JPG or PNG
- **Design Images**: Recommended size 1200x1200px, JPG or PNG
- Optimize images before uploading for faster load times

## WhatsApp Configuration

The WhatsApp phone number should be in international format without + or spaces:
- India: `919876543210` (91 = country code)
- US: `1234567890` (1 = country code)

## Notes

- All cart data is stored locally in the browser (localStorage)
- No backend or database required
- To update designs, edit `designs.json` and redeploy

