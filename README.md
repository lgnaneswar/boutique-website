# Boutique Website

A beautiful, mobile-first boutique website built with React + Vite, featuring WhatsApp integration for customer inquiries.

## Features

- Browse categories of clothing (Designer Blouses, Dresses, Lehengas, etc.)
- View detailed design information
- Add items to cart (local storage)
- WhatsApp integration for:
  - Sharing designs
  - Suggesting custom designs
  - Scheduling visits
  - Sending cart enquiries
- Fully responsive, mobile-first design
- No backend required - all data in JSON

## Tech Stack

- React 18
- Vite
- React Router
- TailwindCSS
- Vercel (hosting)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Updating Designs

Edit `src/data/designs.json` to add or update designs and categories. Then commit and push to trigger a new deployment.

## Configuration

Update the WhatsApp phone number in `src/config.js` before deploying.

