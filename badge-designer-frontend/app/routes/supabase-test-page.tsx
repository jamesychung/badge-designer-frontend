import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { supabaseAdmin } from '~/utils/supabase'

export async function loader({ request }: LoaderFunctionArgs) {
  try {
    // Test database connection
    const { data: designs, error: designsError } = await supabaseAdmin
      .from('badge_designs')
      .select('count')
      .limit(1)
    
    // Test storage connection
    const { data: buckets, error: bucketsError } = await supabaseAdmin.storage
      .listBuckets()
    
    const badgeImagesBucket = buckets?.find(bucket => bucket.name === 'badge-images')
    
    return json({
      success: true,
      database: {
        connected: !designsError,
        error: designsError?.message,
        tableExists: !designsError,
        count: designs?.length || 0
      },
      storage: {
        connected: !bucketsError,
        error: bucketsError?.message,
        buckets: buckets?.map(b => b.name) || [],
        badgeImagesBucket: !!badgeImagesBucket
      }
    })
  } catch (error) {
    return json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

export default function SupabaseTestPage() {
  const data = useLoaderData<typeof loader>()
  
  // Type guard to check if data has database and storage properties
  const hasFullData = data.success && 'database' in data && 'storage' in data
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Supabase Integration Test</h1>
      
      {/* Connection Status */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium">Database</h3>
            <p className="text-sm">
              Status: {hasFullData && data.database?.connected ? '✅ Connected' : '❌ Failed'}
            </p>
            {hasFullData && data.database?.error && (
              <p className="text-sm text-red-600">Error: {data.database.error}</p>
            )}
          </div>
          <div>
            <h3 className="font-medium">Storage</h3>
            <p className="text-sm">
              Status: {hasFullData && data.storage?.connected ? '✅ Connected' : '❌ Failed'}
            </p>
            {hasFullData && data.storage?.error && (
              <p className="text-sm text-red-600">Error: {data.storage.error}</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Test Form */}
      <div className="mb-8 p-6 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Test Badge Design Save</h2>
        <Form method="post" action="/api/supabase-update-badge" encType="multipart/form-data">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Design ID</label>
              <input 
                type="text" 
                name="designId" 
                defaultValue="test-design-123"
                className="w-full p-2 border rounded"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Design Data (JSON)</label>
              <textarea 
                name="designData" 
                rows={4}
                className="w-full p-2 border rounded"
                defaultValue={JSON.stringify({
                  productId: "test-product-123",
                  shopId: "test-shop-123",
                  userId: "test-user-123",
                  backgroundColor: "#ff0000",
                  backingPrice: 2.99,
                  backingType: "magnetic",
                  basePrice: 9.99,
                  totalPrice: 12.98,
                  textLines: [
                    { text: "Test Badge", x: 100, y: 100, fontSize: 24 }
                  ]
                }, null, 2)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Test Thumbnail</label>
              <input 
                type="file" 
                name="thumbnail" 
                accept="image/*"
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Test Full Image</label>
              <input 
                type="file" 
                name="fullImage" 
                accept="image/*"
                className="w-full p-2 border rounded"
              />
            </div>
            
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Test Save to Supabase
            </button>
          </div>
        </Form>
      </div>
      
      {/* Raw Data */}
      <div className="p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Raw Test Data</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  )
} 