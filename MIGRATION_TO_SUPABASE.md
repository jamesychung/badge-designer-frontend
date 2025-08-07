# Migration Plan: Gadget Database → Supabase

## Overview

This document outlines the migration from Gadget's proprietary database to Supabase (PostgreSQL) while maintaining:
- **Vercel**: Frontend hosting and deployment
- **Gadget**: Shopify integration (webhooks, app installation, GDPR compliance)
- **Supabase**: Database and file storage

## Current Architecture

```
Shopify Store ←→ Gadget (DB + Shopify Integration) ←→ Vercel (Frontend)
```

## Target Architecture

```
Shopify Store ←→ Gadget (Shopify Integration) ←→ Supabase (DB + Storage)
                                    ↓
                              Vercel (Frontend)
```

**Stack Breakdown:**
- **Vercel**: Frontend hosting (Remix app)
- **Supabase**: Database + file storage + real-time subscriptions
- **Gadget**: Shopify integration only
- **Shopify**: E-commerce platform

## Benefits of Migration

### Supabase Advantages
- **Industry Standard**: PostgreSQL database
- **Real-time**: Built-in subscriptions for live updates
- **File Storage**: Better image/thumbnail handling
- **SQL Queries**: More flexible data operations
- **Data Export**: Easy backup and migration
- **Row Level Security**: Better access control
- **Cost Effective**: More predictable pricing

### Gadget Retention Benefits
- **Shopify Expertise**: Proven integration patterns
- **Webhook Management**: Automatic handling
- **App Installation**: Streamlined setup
- **GDPR Compliance**: Built-in data handling
- **No Rebuild**: Keep existing Shopify connection

### Vercel Retention Benefits
- **Best Remix Support**: Optimized for React frameworks
- **Automatic Deployments**: Git-based workflow
- **Edge Functions**: Fast API routes
- **Global CDN**: Worldwide performance
- **Developer Experience**: Excellent tooling and monitoring

## Current Implementation Status ✅

### Already Completed:
- ✅ Supabase client configuration (`app/utils/supabase.ts`)
- ✅ Database schema with proper indexes and RLS policies
- ✅ File upload functionality to Supabase Storage
- ✅ API route for saving badge designs (`api.supabase-update-badge.tsx`)
- ✅ Helper functions for database operations
- ✅ Storage bucket setup with proper policies
- ✅ Basic badge design interface
- ✅ Cart integration with Shopify
- ✅ Iframe integration for Shopify product pages

### Security Issue to Fix:
- ❌ **CRITICAL**: API keys are hardcoded in `supabase.ts` - need to move to environment variables

## Phase 1: Security & Environment Setup

### 1.1 Fix Environment Variables
**Priority: CRITICAL**

Move hardcoded API keys to environment variables:

```typescript
// app/utils/supabase.ts - UPDATE THIS
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)
```

**Environment Variables to Add:**
```env
# Add to .env.local and Vercel
SUPABASE_URL=https://gxzfggczycqqbbfpwaowm.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 1.2 Verify Supabase Schema
**Priority: HIGH**

The schema is already implemented, but verify it matches requirements:

```sql
-- Verify this exists in your Supabase project
SELECT * FROM badge_designs LIMIT 1;
SELECT * FROM storage.buckets WHERE id = 'badge-images';
```

## Phase 2: Real-time Implementation

### 2.1 Add Real-time Subscriptions
**Priority: HIGH**

Since you need real-time updates for badge designs, implement Supabase subscriptions:

```typescript
// app/utils/supabase.ts - ADD THIS
export function subscribeToBadgeDesigns(designId: string, callback: (design: BadgeDesign) => void) {
  return supabase
    .channel(`badge-design-${designId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'badge_designs',
        filter: `design_id=eq.${designId}`
      },
      (payload) => {
        callback(payload.new as BadgeDesign)
      }
    )
    .subscribe()
}

export function subscribeToUserDesigns(userId: string, callback: (designs: BadgeDesign[]) => void) {
  return supabase
    .channel(`user-designs-${userId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'badge_designs',
        filter: `user_id=eq.${userId}`
      },
      async () => {
        // Refetch all user designs when any change occurs
        const designs = await getCustomerDesigns(userId)
        callback(designs)
      }
    )
    .subscribe()
}
```

### 2.2 Update BadgeDesigner Component
**Priority: HIGH**

Add real-time updates to the badge designer:

```typescript
// app/components/BadgeDesigner.tsx - ADD REAL-TIME UPDATES
import { useEffect } from 'react'
import { subscribeToBadgeDesigns } from '~/utils/supabase'

export function BadgeDesigner({ designId, onDesignUpdate }: { designId: string, onDesignUpdate: (design: BadgeDesign) => void }) {
  useEffect(() => {
    if (designId) {
      const subscription = subscribeToBadgeDesigns(designId, onDesignUpdate)
      
      return () => {
        subscription.unsubscribe()
      }
    }
  }, [designId, onDesignUpdate])
  
  // ... rest of component
}
```

## Phase 3: Authentication Integration

### 3.1 Keep Existing Auth (Gadget)
**Priority: MEDIUM**

Since Gadget has strong Shopify integration, maintain existing authentication:

```typescript
// app/utils/auth.ts - CREATE THIS
export function getCurrentUser() {
  // Use existing Gadget session management
  // This will be handled by the Shopify app bridge
  return window.ShopifyAppBridge?.getSession()?.user
}

export function getUserId(): string | null {
  const user = getCurrentUser()
  return user?.id || null
}
```

### 3.2 Update RLS Policies
**Priority: MEDIUM**

Modify RLS policies to work with existing auth:

```sql
-- Update RLS policies to work with existing auth system
DROP POLICY IF EXISTS "Users can view their own designs" ON badge_designs;
DROP POLICY IF EXISTS "Users can insert their own designs" ON badge_designs;
DROP POLICY IF EXISTS "Users can update their own designs" ON badge_designs;

-- Create new policies that work with existing auth
CREATE POLICY "Allow all operations for authenticated users" ON badge_designs
  FOR ALL USING (true);

-- Or if you want more restrictive policies:
CREATE POLICY "Users can view their own designs" ON badge_designs
  FOR SELECT USING (user_id IS NULL OR user_id = current_setting('app.user_id', true));

CREATE POLICY "Users can insert their own designs" ON badge_designs
  FOR INSERT WITH CHECK (user_id IS NULL OR user_id = current_setting('app.user_id', true));

CREATE POLICY "Users can update their own designs" ON badge_designs
  FOR UPDATE USING (user_id IS NULL OR user_id = current_setting('app.user_id', true));
```

## Phase 4: Enhanced Features

### 4.1 Design Recovery & Management
**Priority: MEDIUM**

Add ability to load and edit saved designs:

```typescript
// app/routes/api.get-user-designs.tsx - CREATE THIS
import { json } from '@remix-run/node'
import { getCustomerDesigns } from '~/utils/supabase'

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const userId = url.searchParams.get('userId')
  
  if (!userId) {
    return json({ designs: [] })
  }
  
  try {
    const designs = await getCustomerDesigns(userId)
    return json({ designs })
  } catch (error) {
    console.error('Error fetching user designs:', error)
    return json({ designs: [], error: 'Failed to load designs' })
  }
}
```

### 4.2 Bulk Design Management
**Priority: LOW**

Enhance CSV import with Supabase:

```typescript
// app/routes/api.bulk-import.tsx - CREATE THIS
import { json } from '@remix-run/node'
import { supabaseAdmin } from '~/utils/supabase'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const csvData = formData.get('csvData') as string
  const shopId = formData.get('shopId') as string
  
  // Parse CSV and create multiple designs
  const designs = parseCSVToDesigns(csvData, shopId)
  
  const { data, error } = await supabaseAdmin
    .from('badge_designs')
    .insert(designs)
    .select()
    
  if (error) {
    return json({ success: false, error: error.message })
  }
  
  return json({ success: true, count: data.length })
}
```

## Phase 5: Testing & Validation

### 5.1 Test Checklist
- [ ] Environment variables properly configured
- [ ] Badge design creation saves to Supabase
- [ ] Images upload to Supabase Storage
- [ ] Real-time updates work for design changes
- [ ] Cart integration works with Supabase data
- [ ] Design recovery functionality works
- [ ] Shopify integration still functional
- [ ] Performance meets requirements

### 5.2 Performance Testing
- [ ] Test with multiple concurrent users
- [ ] Verify real-time subscription performance
- [ ] Check file upload speeds
- [ ] Monitor database query performance

## Phase 6: Production Deployment

### 6.1 Environment Setup
1. ✅ Supabase production project already exists
2. Update Vercel environment variables
3. Deploy updated frontend
4. Test all functionality in production

### 6.2 Monitoring
- Set up Supabase monitoring
- Monitor API response times
- Track storage usage
- Monitor real-time connection health

## Timeline Estimate

- **Phase 1**: 1 day (Security fixes)
- **Phase 2**: 2 days (Real-time implementation)
- **Phase 3**: 1 day (Auth integration)
- **Phase 4**: 2 days (Enhanced features)
- **Phase 5**: 2 days (Testing)
- **Phase 6**: 1 day (Deployment)

**Total**: 9 days

## Risk Mitigation

### Technical Risks
- **Security**: Move API keys to environment variables immediately
- **Performance**: Monitor real-time subscription performance
- **Integration Issues**: Thorough testing of Shopify connection

### Business Risks
- **Downtime**: Deploy during low-traffic periods
- **User Experience**: Maintain feature parity
- **Data Consistency**: Validate data integrity

## Success Metrics

- [ ] Zero security vulnerabilities (API keys secured)
- [ ] Real-time updates working for badge designs
- [ ] Improved query performance
- [ ] Better file handling capabilities
- [ ] Maintained Shopify integration functionality
- [ ] Successful design recovery features

## Post-Migration Tasks

1. **Cleanup**: Remove any remaining Gadget database dependencies
2. **Optimization**: Fine-tune Supabase queries and indexes
3. **Documentation**: Update API documentation
4. **Monitoring**: Set up comprehensive monitoring
5. **Backup Strategy**: Implement automated Supabase backups

## Immediate Action Items

1. **CRITICAL**: Move API keys to environment variables
2. **HIGH**: Implement real-time subscriptions
3. **HIGH**: Test all existing functionality with Supabase
4. **MEDIUM**: Add design recovery features
5. **MEDIUM**: Update authentication integration 