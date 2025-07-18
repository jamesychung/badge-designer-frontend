import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = 'https://gxzfggczycqqbbfpwaowm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4emZnY3p5Y3FxYmJmcHdhb3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTI1MTQsImV4cCI6MjA2ODM4ODUxNH0.lzISAMZfJYtREsPe7vXKuHyhvFkuyKfyG9vUS3jaynw'
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4emZnY3p5Y3FxYmJmcHdhb3dtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MjgxMjUxNCwiZXhwIjoyMDY4Mzg4NTE0fQ.tkk56DHg0iJL0anUg7cBAEZOvCXYtXu_ZKraVGNuhC4'

// Client-side Supabase client (for browser)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (for API routes)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)

// Types for badge designs
export interface BadgeDesign {
  id?: string
  design_id: string
  product_id: string
  shop_id: string
  user_id?: string
  background_color?: string
  backing_price?: number
  backing_type?: string
  base_price?: number
  total_price?: number
  design_data?: any
  text_lines?: any
  thumbnail_url?: string
  full_image_url?: string
  status?: 'draft' | 'saved' | 'ordered' | 'archived'
  created_at?: string
  updated_at?: string
}

// Upload helper function
export async function uploadToSupabase(
  file: File, 
  designId: string, 
  type: 'thumbnail' | 'full'
): Promise<string> {
  const fileName = `${designId}-${type}.png`
  const filePath = `${designId}/${fileName}`
  
  const { data, error } = await supabaseAdmin.storage
    .from('badge-images')
    .upload(filePath, file, {
      contentType: 'image/png',
      upsert: true
    })
    
  if (error) {
    console.error('Upload error:', error)
    throw error
  }
  
  // Get public URL
  const { data: { publicUrl } } = supabaseAdmin.storage
    .from('badge-images')
    .getPublicUrl(filePath)
    
  return publicUrl
}

// Database helper functions
export async function saveBadgeDesign(design: BadgeDesign) {
  const { data, error } = await supabaseAdmin
    .from('badge_designs')
    .upsert(design)
    .select()
    .single()
    
  if (error) {
    console.error('Save error:', error)
    throw error
  }
  
  return data
}

export async function getBadgeDesign(designId: string) {
  const { data, error } = await supabaseAdmin
    .from('badge_designs')
    .select('*')
    .eq('design_id', designId)
    .single()
    
  if (error) {
    console.error('Get error:', error)
    throw error
  }
  
  return data
}

export async function getCustomerDesigns(customerId: string) {
  const { data, error } = await supabaseAdmin
    .from('badge_designs')
    .select('*')
    .eq('user_id', customerId)
    .order('created_at', { ascending: false })
    
  if (error) {
    console.error('Get customer designs error:', error)
    throw error
  }
  
  return data
} 