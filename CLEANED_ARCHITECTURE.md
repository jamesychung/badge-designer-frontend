# Badge Designer - Cleaned Architecture

## Overview
After cleanup, the badge designer now has a clean, modern architecture with proper separation of concerns.

## Current Architecture

### 🎯 **Frontend (Vercel)**
**Location**: `badge-designer-frontend/`
**URL**: `https://badge-designer-frontend.vercel.app`
**Purpose**: Main badge design interface that customers interact with

**Key Files**:
- `app/components/BadgeDesigner.tsx` - Main design interface
- `app/routes/` - Remix routes for the application
- `vercel.json` - Vercel configuration with iframe headers
- `package.json` - Frontend dependencies

### 🔧 **Backend (Gadget.dev)**
**Location**: `badge-designer/`
**Purpose**: Shopify integration, database, and API endpoints

**Key Files**:
- `api/models/badgeDesign/` - Database models for badge designs
- `extensions/badge-designer/` - Shopify extension
- `extensions/badge-designer/assets/badge-designer-modal-v2.js` - Modal that embeds the frontend
- `extensions/badge-designer/blocks/badge_designer.liquid` - Shopify block for product pages

## Data Flow

1. **Customer visits Shopify product page**
2. **`badge_designer.liquid` block loads** `badge-designer-modal-v2.js`
3. **Modal opens iframe** pointing to `https://badge-designer-frontend.vercel.app`
4. **Customer designs badge** in the Vercel-hosted interface
5. **Design data sent back** to Shopify via postMessage
6. **Badge added to cart** with design properties
7. **Design data stored** in Gadget database via API calls

## Removed Files (Legacy)

### ❌ **Old Frontend Attempts**
- `badge-designer/app/` - Attempted to host frontend on Gadget
- `badge-designer/web/` - Minimal wrapper around old Gadget frontend
- `web/` - Root-level wrapper

### ❌ **Legacy Modal Versions**
- `badge-designer-modal.js` (v1) - Old modal version
- `badge_designer_app.liquid` - Old Shopify block

## Benefits of Clean Architecture

✅ **Clear Separation**: Frontend (Vercel) vs Backend (Gadget)
✅ **No Confusion**: Single source of truth for each component
✅ **Modern Stack**: Vercel for fast frontend, Gadget for Shopify integration
✅ **Scalable**: Easy to maintain and extend
✅ **Reliable**: Each service handles what it does best

## Development Workflow

### Frontend Development
```bash
cd badge-designer-frontend
npm run dev
```

### Backend Development
```bash
cd badge-designer
yarn shopify:dev
```

### Deployment
- **Frontend**: Automatic deployment to Vercel on push
- **Backend**: `yarn shopify:deploy:development` or `yarn shopify:deploy:production`

## Environment Variables

### Vercel (Frontend)
- `GADGET_API_URL` - Points to Gadget backend
- `NODE_ENV=production`

### Gadget (Backend)
- Shopify app credentials
- Database configuration

## Next Steps

1. ✅ **Cleanup Complete** - Removed all unused files
2. 🔄 **Test Integration** - Verify iframe communication works
3. 🚀 **Deploy Updates** - Push cleaned code to production
4. 📝 **Update Documentation** - Keep this architecture guide current

---

**Status**: ✅ Cleaned and ready for development 