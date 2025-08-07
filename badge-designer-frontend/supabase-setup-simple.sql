-- Simple Supabase Setup for Badge Designer
-- Run this in Supabase SQL Editor

-- Create indexes for performance (if tables already exist)
CREATE INDEX IF NOT EXISTS idx_badge_designs_shop_id ON badge_designs(shop_id);
CREATE INDEX IF NOT EXISTS idx_badge_designs_user_id ON badge_designs(user_id);
CREATE INDEX IF NOT EXISTS idx_badge_designs_design_id ON badge_designs(design_id);
CREATE INDEX IF NOT EXISTS idx_badge_designs_status ON badge_designs(status);
CREATE INDEX IF NOT EXISTS idx_badge_designs_created_at ON badge_designs(created_at);

-- Create indexes for order_designs
CREATE INDEX IF NOT EXISTS idx_order_designs_order_id ON order_designs(order_id);
CREATE INDEX IF NOT EXISTS idx_order_designs_customer_id ON order_designs(customer_id);
CREATE INDEX IF NOT EXISTS idx_order_designs_design_id ON order_designs(design_id);

-- Enable Row Level Security
ALTER TABLE badge_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_designs ENABLE ROW LEVEL SECURITY;

-- Create policies for badge_designs
DROP POLICY IF EXISTS "Users can view their own designs" ON badge_designs;
CREATE POLICY "Users can view their own designs" ON badge_designs
  FOR SELECT USING (auth.uid()::text = user_id);

DROP POLICY IF EXISTS "Users can insert their own designs" ON badge_designs;
CREATE POLICY "Users can insert their own designs" ON badge_designs
  FOR INSERT WITH CHECK (auth.uid()::text = user_id);

DROP POLICY IF EXISTS "Users can update their own designs" ON badge_designs;
CREATE POLICY "Users can update their own designs" ON badge_designs
  FOR UPDATE USING (auth.uid()::text = user_id);

-- Create policies for order_designs
DROP POLICY IF EXISTS "Users can view their own orders" ON order_designs;
CREATE POLICY "Users can view their own orders" ON order_designs
  FOR SELECT USING (auth.uid()::text = customer_id);

DROP POLICY IF EXISTS "Users can insert their own orders" ON order_designs;
CREATE POLICY "Users can insert their own orders" ON order_designs
  FOR INSERT WITH CHECK (auth.uid()::text = customer_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_badge_designs_updated_at ON badge_designs;
CREATE TRIGGER update_badge_designs_updated_at 
    BEFORE UPDATE ON badge_designs 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create storage bucket for badge images (if it doesn't exist)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('badge-images', 'badge-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies
DROP POLICY IF EXISTS "Public read access" ON storage.objects;
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'badge-images');

DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'badge-images' 
    AND auth.role() = 'authenticated'
  );

DROP POLICY IF EXISTS "Users can update their own files" ON storage.objects;
CREATE POLICY "Users can update their own files" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'badge-images' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  ); 