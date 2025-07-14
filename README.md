# Badge Designer Frontend

A standalone React/Remix application for designing custom badges, hosted on Vercel and embedded in Shopify product pages.

## Architecture

- **Frontend**: React/Remix app hosted on Vercel
- **Backend**: Gadget.dev API for data persistence
- **Integration**: Embedded in Shopify via iframe

## Development

```bash
npm install
npm run dev
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will auto-deploy on push

## Environment Variables

Set these in your Vercel dashboard:

- `NODE_ENV=production`
- `GADGET_API_URL=https://allqualitybadges-development.gadget.app/api`

## Shopify Integration

Update your Shopify extension to use the Vercel URL:

```javascript
// In badge-designer-modal.js
const badgeDesignerUrl = `https://your-vercel-domain.vercel.app/?product=${productId}`;
```

## Features

- ✅ Badge design interface
- ✅ Real-time preview
- ✅ Shopify cart integration
- ✅ Iframe-friendly headers
- ✅ API integration with Gadget backend

## API Integration

The app communicates with your Gadget backend via:

- `POST /api/badge-designs` - Save designs
- `GET /api/badge-designs/:id` - Load designs
- `GET /api/products/:id` - Get product info

## Next Steps

1. Deploy to Vercel
2. Update Shopify extension URL
3. Test embedding in Shopify
4. Add more advanced features as needed
