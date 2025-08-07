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
└── 📁 badge-designer/ - Backend (Handled by team lead) ← NOT NEEDED
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

## 🔧 Step 2: Frontend Setup (Local Development)

### 2.1 Install Dependencies
```bash
cd badge-designer-frontend-app
npm install
```

### 2.2 Environment Variables
Create `.env.local` file:
```env
# Development
NODE_ENV=development
```

### 2.3 Start Development Server
```bash
npm run dev
```

**Frontend will be available at**: `http://localhost:3000`

## 🧪 Step 3: Testing Setup

### 3.1 Frontend Testing
```bash
cd badge-designer-frontend-app
npm run test
```

### 3.2 Manual Testing
1. Start the development server
2. Visit `http://localhost:3000`
3. Test badge design functionality
4. Test the design interface
5. Verify all components work correctly

## 📚 Step 4: Documentation Review

Read these key documents in the main repository:

1. **`overview.md`** - Complete project overview
2. **`CLEANED_ARCHITECTURE.md`** - Current architecture
3. **`MIGRATION_TO_SUPABASE.md`** - Database migration status
4. **`TEAM_SETUP_GUIDE.md`** - This guide

## 🔄 Step 5: Development Workflow

### 5.1 Local Development
```bash
cd badge-designer-frontend-app
npm run dev
# Make changes to Remix app
# Test in browser
# Ensure everything works locally
```

### 5.2 Key Frontend Files
- `app/components/BadgeDesigner.tsx` - Main design interface
- `app/routes/` - Remix routes for the application
- `app/types/badge.ts` - TypeScript types for badge designs
- `app/utils/` - Utility functions

### 5.3 Git Workflow
```bash
# After testing locally and getting approval
git add .
git commit -m "Description of changes"
git push origin main
# Vercel will automatically deploy from Git push
```

## 🚨 Common Issues & Solutions

### Issue: Frontend won't start
**Solution**: Check Node.js version and dependencies
```bash
node --version  # Should be v18+
npm install     # Reinstall dependencies
```

### Issue: Build errors
**Solution**: Check for TypeScript errors
```bash
npm run build   # Check for build issues
npm run typecheck # Check TypeScript types
```

### Issue: Local testing issues
**Solution**: Clear cache and restart
```bash
npm run dev -- --clear
# Or restart the development server
```

### Issue: Git push fails
**Solution**: Check repository permissions and branch
```bash
git status
git remote -v
# Ensure you have push access to the repository
```

## 📞 Getting Help

### Team Resources
- **Project Lead**: James Chung (jamesychung@gmail.com)
- **GitHub Repository**: https://github.com/jamesychung/badge-designer-frontend
- **Documentation**: All in main repository

### External Resources
- **Remix Documentation**: https://remix.run/docs
- **React Documentation**: https://react.dev
- **TypeScript Documentation**: https://www.typescriptlang.org/docs
- **Vercel Documentation**: https://vercel.com/docs

## ✅ Setup Checklist

- [ ] Main repository cloned
- [ ] Frontend repository cloned
- [ ] Frontend dependencies installed
- [ ] Environment variables configured
- [ ] Frontend development server running
- [ ] Local testing completed
- [ ] Documentation reviewed
- [ ] Test badge design created

## 🎯 Next Steps

1. **Familiarize yourself** with the Remix codebase
2. **Review the project structure** and key components
3. **Set up your development environment** following this guide
4. **Create a test badge design** to verify everything works
5. **Get approval** for changes before pushing to Git
6. **Push to Git** for automatic Vercel deployment

## 🚫 What You DON'T Need to Set Up

- ❌ **Backend repository** - Handled by team lead
- ❌ **Database configuration** - Backend team handles this
- ❌ **API keys** - Not needed for local development
- ❌ **Production deployment** - Vercel handles this automatically

## 🚀 Deployment Workflow

1. **Develop locally** - Make changes and test thoroughly
2. **Get approval** - Ensure changes are approved by team lead
3. **Commit changes** - Use descriptive commit messages
4. **Push to Git** - Push to main branch
5. **Vercel auto-deploys** - Changes go live automatically
6. **Verify deployment** - Check Vercel dashboard for success

---

**Welcome to the frontend team! 🎉**

If you encounter any issues during setup, please reach out to the team lead or create an issue in the repository.
