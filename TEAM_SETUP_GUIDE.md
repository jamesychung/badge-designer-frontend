# Badge Designer - Team Setup Guide (Frontend Only)

## 🚀 Quick Start

Welcome to the Badge Designer project! This guide will help you set up the **frontend development environment** for the Vercel-hosted Remix application.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Git**
- **VS Code** (recommended)

## 🏗️ Project Architecture

The Badge Designer consists of **3 separate repositories**, but you'll only be working on the **frontend**:

```
📁 Badge Designer Project
├── 📁 Main Repository (this repo) - Documentation & Overview
├── 📁 badge-designer-frontend/ - Remix Frontend (Vercel) ← YOU WORK HERE
└── 📁 badge-designer/ - Gadget Backend (Shopify Integration) ← NOT NEEDED
```

## 📥 Step 1: Clone Required Repositories

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

**Note**: You only need these two repositories. The backend repository is handled by the team lead.

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

# Development
NODE_ENV=development
```

**Note**: You'll receive the actual API keys from the team lead.

### 2.3 Start Development Server
```bash
npm run dev
```

**Frontend will be available at**: `http://localhost:3000`

## 🔑 Step 3: API Keys & Access

### 3.1 Supabase Access
You'll need access to the Supabase project:
- **Project URL**: `https://gxzfggczycqqbbfpwaowm.supabase.co`
- **Database**: PostgreSQL with badge_designs table
- **Storage**: Badge images and thumbnails

**Contact the team lead for:**
- Supabase API keys
- Database access credentials
- Storage bucket permissions

## 🧪 Step 4: Testing Setup

### 4.1 Frontend Testing
```bash
cd badge-designer-frontend-app
npm run test
```

### 4.2 Manual Testing
1. Start the development server
2. Visit `http://localhost:3000`
3. Test badge design functionality
4. Verify Supabase data storage
5. Test the design interface

## 📚 Step 5: Documentation Review

Read these key documents in the main repository:

1. **`overview.md`** - Complete project overview
2. **`CLEANED_ARCHITECTURE.md`** - Current architecture
3. **`MIGRATION_TO_SUPABASE.md`** - Database migration status
4. **`TEAM_SETUP_GUIDE.md`** - This guide

## 🔄 Step 6: Development Workflow

### 6.1 Frontend Development
```bash
cd badge-designer-frontend-app
npm run dev
# Make changes to Remix app
# Test in browser
# Commit and push changes
```

### 6.2 Key Frontend Files
- `app/components/BadgeDesigner.tsx` - Main design interface
- `app/routes/` - Remix routes for the application
- `app/utils/supabase.ts` - Supabase client configuration
- `app/types/badge.ts` - TypeScript types for badge designs

### 6.3 Database Changes
For Supabase schema changes:
1. Contact team lead for schema updates
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

### Issue: Supabase connection errors
**Solution**: Check environment variables
```bash
# Verify .env.local has correct Supabase keys
cat .env.local
```

### Issue: Missing API keys
**Solution**: Contact team lead for access
- Email: jamesychung@gmail.com
- Request: Supabase API keys and access

### Issue: Iframe integration not working
**Solution**: Check CORS settings and iframe headers
- Verify Vercel configuration
- Test in incognito mode
- Check browser console for errors

## 📞 Getting Help

### Team Resources
- **Project Lead**: James Chung (jamesychung@gmail.com)
- **GitHub Repository**: https://github.com/jamesychung/badge-designer-frontend
- **Documentation**: All in main repository

### External Resources
- **Remix Documentation**: https://remix.run/docs
- **Supabase Documentation**: https://supabase.com/docs
- **React Documentation**: https://react.dev
- **TypeScript Documentation**: https://www.typescriptlang.org/docs

## ✅ Setup Checklist

- [ ] Main repository cloned
- [ ] Frontend repository cloned
- [ ] Frontend dependencies installed
- [ ] Environment variables configured
- [ ] Frontend development server running
- [ ] Supabase connection tested
- [ ] Documentation reviewed
- [ ] Test badge design created

## 🎯 Next Steps

1. **Familiarize yourself** with the Remix codebase
2. **Review the migration status** in `MIGRATION_TO_SUPABASE.md`
3. **Set up your development environment** following this guide
4. **Create a test badge design** to verify everything works
5. **Join team discussions** about current development priorities

## 🚫 What You DON'T Need to Set Up

- ❌ **Backend repository** - Handled by team lead
- ❌ **Shopify CLI** - Not needed for frontend work
- ❌ **Gadget development** - Backend team handles this
- ❌ **Shopify app configuration** - Backend team manages this

---

**Welcome to the frontend team! 🎉**

If you encounter any issues during setup, please reach out to the team lead or create an issue in the repository.
