# Badge Designer - Team Setup Guide

## 🚀 Quick Start

Welcome to the Badge Designer project! This guide will help you set up the complete development environment.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Yarn** (v1.22 or higher)
- **Git**
- **VS Code** (recommended)
- **Shopify CLI** (for backend development)

## 🏗️ Project Architecture

The Badge Designer consists of **3 separate repositories**:

```
📁 Badge Designer Project
├── 📁 Main Repository (this repo) - Documentation & Overview
├── 📁 badge-designer-frontend/ - Remix Frontend (Vercel)
└── 📁 badge-designer/ - Gadget Backend (Shopify Integration)
```

## 📥 Step 1: Clone All Repositories

### 1.1 Main Repository (Documentation)
```bash
git clone https://github.com/jamesychung/badge-designer-frontend.git
cd badge-designer-frontend
```

### 1.2 Frontend Repository
```bash
# Clone the frontend repository (separate repo)
git clone <frontend-repo-url> badge-designer-frontend-app
cd badge-designer-frontend-app
```

### 1.3 Backend Repository
```bash
# Clone the backend repository (separate repo)
git clone <backend-repo-url> badge-designer-backend
cd badge-designer-backend
```

## 🔧 Step 2: Frontend Setup (Vercel)

### 2.1 Install Dependencies
```bash
cd badge-designer-frontend-app
npm install
```

### 2.2 Environment Variables
Create `.env.local` file:
```env
# Supabase Configuration
SUPABASE_URL=https://gxzfggczycqqbbfpwaowm.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Gadget Configuration
GADGET_API_URL=your_gadget_api_url_here

# Development
NODE_ENV=development
```

### 2.3 Start Development Server
```bash
npm run dev
```

**Frontend will be available at**: `http://localhost:3000`

## 🔧 Step 3: Backend Setup (Gadget)

### 3.1 Install Dependencies
```bash
cd badge-designer-backend
yarn install
```

### 3.2 Shopify CLI Setup
```bash
# Install Shopify CLI if not already installed
npm install -g @shopify/cli @shopify/theme

# Login to Shopify
shopify auth login
```

### 3.3 Environment Configuration
The backend uses Shopify app configuration files:
- `shopify.app.development.toml` - Development environment
- `shopify.app.toml` - Production environment

### 3.4 Start Development Server
```bash
yarn shopify:dev
```

## 🔑 Step 4: API Keys & Access

### 4.1 Supabase Access
You'll need access to the Supabase project:
- **Project URL**: `https://gxzfggczycqqbbfpwaowm.supabase.co`
- **Database**: PostgreSQL with badge_designs table
- **Storage**: Badge images and thumbnails

### 4.2 Gadget Access
You'll need access to the Gadget project:
- **Project URL**: Provided by team lead
- **API Keys**: For Shopify integration

### 4.3 Shopify App Access
You'll need access to the Shopify app:
- **App ID**: Provided by team lead
- **API Keys**: For development store access

## 🧪 Step 5: Testing Setup

### 5.1 Frontend Testing
```bash
cd badge-designer-frontend-app
npm run test
```

### 5.2 Backend Testing
```bash
cd badge-designer-backend
yarn test
```

### 5.3 Integration Testing
1. Start both frontend and backend servers
2. Visit the frontend URL
3. Test badge design functionality
4. Verify Supabase data storage
5. Test Shopify cart integration

## 📚 Step 6: Documentation Review

Read these key documents in the main repository:

1. **`overview.md`** - Complete project overview
2. **`CLEANED_ARCHITECTURE.md`** - Current architecture
3. **`MIGRATION_TO_SUPABASE.md`** - Database migration status
4. **`SHOPIFY_SETUP_GUIDE.md`** - Shopify integration details
5. **`SHOPIFY_CART_INTEGRATION_GUIDE.md`** - Cart integration

## 🔄 Step 7: Development Workflow

### 7.1 Frontend Development
```bash
cd badge-designer-frontend-app
npm run dev
# Make changes to Remix app
# Test in browser
# Commit and push changes
```

### 7.2 Backend Development
```bash
cd badge-designer-backend
yarn shopify:dev
# Make changes to Gadget models/actions
# Test Shopify integration
# Deploy with: yarn shopify:deploy:development
```

### 7.3 Database Changes
For Supabase schema changes:
1. Update schema in Supabase dashboard
2. Update TypeScript types in frontend
3. Test data operations
4. Update documentation

## 🚨 Common Issues & Solutions

### Issue: Frontend won't start
**Solution**: Check Node.js version and dependencies
```bash
node --version  # Should be v18+
npm install     # Reinstall dependencies
```

### Issue: Backend Shopify connection fails
**Solution**: Verify Shopify CLI authentication
```bash
shopify auth login
shopify app info
```

### Issue: Supabase connection errors
**Solution**: Check environment variables
```bash
# Verify .env.local has correct Supabase keys
cat .env.local
```

### Issue: Iframe integration not working
**Solution**: Check CORS settings and iframe headers
- Verify Vercel configuration
- Check Shopify app settings
- Test in incognito mode

## 📞 Getting Help

### Team Resources
- **Project Lead**: James Chung (jamesychung@gmail.com)
- **GitHub Repository**: https://github.com/jamesychung/badge-designer-frontend
- **Documentation**: All in main repository

### External Resources
- **Remix Documentation**: https://remix.run/docs
- **Supabase Documentation**: https://supabase.com/docs
- **Gadget Documentation**: https://gadget.dev/docs
- **Shopify App Development**: https://shopify.dev/apps

## ✅ Setup Checklist

- [ ] All repositories cloned
- [ ] Frontend dependencies installed
- [ ] Backend dependencies installed
- [ ] Environment variables configured
- [ ] Frontend development server running
- [ ] Backend development server running
- [ ] Supabase connection tested
- [ ] Shopify integration tested
- [ ] Documentation reviewed
- [ ] Test badge design created

## 🎯 Next Steps

1. **Familiarize yourself** with the codebase
2. **Review the migration status** in `MIGRATION_TO_SUPABASE.md`
3. **Set up your development environment** following this guide
4. **Create a test badge design** to verify everything works
5. **Join team discussions** about current development priorities

---

**Welcome to the team! 🎉**

If you encounter any issues during setup, please reach out to the team lead or create an issue in the repository.
