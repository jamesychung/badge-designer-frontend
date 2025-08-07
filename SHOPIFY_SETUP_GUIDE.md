# Shopify Product Setup Guide

## Product Structure

### ✅ **Correct Setup:**
- **Product**: "Custom Name Badge" (single product)
- **Variants**: Only the backing options
  - Pin (included) - $9.99
  - Magnetic (+$2.00) - $11.99  
  - Adhesive (+$1.00) - $10.99

### ❌ **What NOT to do:**
- Don't create variants for different text, colors, or fonts
- These customization options are handled as **line item properties**

## Step-by-Step Shopify Setup

### 1. Create the Product

1. **Go to Shopify Admin** → Products → Add product
2. **Product Title**: "Custom Name Badge"
3. **Product Type**: "Badge" (or "Custom Badge")
4. **Tags**: Add "badge-designer" tag
5. **Description**: Add your product description

### 2. Create Variants (Backing Options Only)

1. **In the product page**, scroll to "Variants" section
2. **Click "Add variant"** to create 3 variants:

#### Variant 1: Pin (Default)
- **Option 1**: Backing Type = "Pin"
- **Price**: $9.99
- **SKU**: `BADGE-PIN-001` (or your preferred SKU)
- **Inventory**: Set your desired inventory level

#### Variant 2: Magnetic
- **Option 1**: Backing Type = "Magnetic" 
- **Price**: $11.99
- **SKU**: `BADGE-MAG-001`
- **Inventory**: Set your desired inventory level

#### Variant 3: Adhesive
- **Option 1**: Backing Type = "Adhesive"
- **Price**: $10.99
- **SKU**: `BADGE-ADH-001`
- **Inventory**: Set your desired inventory level

### 3. Get the Variant IDs

After creating the variants, you need to get their IDs:

#### Method 1: From Shopify Admin
1. **Go to the product page**
2. **Click on each variant** to edit
3. **Look at the URL** - it will contain the variant ID
   - Example: `https://your-store.myshopify.com/admin/products/123456789/variants/987654321`
   - The last number (`987654321`) is the variant ID

#### Method 2: Using Shopify API
```javascript
// You can also get variant IDs programmatically
fetch('/admin/api/2024-01/products/PRODUCT_ID/variants.json')
  .then(response => response.json())
  .then(data => {
    data.variants.forEach(variant => {
      console.log(`Backing: ${variant.option1}, ID: ${variant.id}`);
    });
  });
```

### 4. Update the Code with Real Variant IDs

Once you have the variant IDs, update these files:

#### Update BadgeDesigner Component
```typescript
// In badge-designer/app/components/BadgeDesigner.tsx
// Replace the placeholder IDs with your actual variant IDs

const getVariantId = (backingType: string) => {
  switch (backingType) {
    case 'pin':
      return '987654321'; // Replace with actual Pin variant ID
    case 'magnetic':
      return '987654322'; // Replace with actual Magnetic variant ID
    case 'adhesive':
      return '987654323'; // Replace with actual Adhesive variant ID
    default:
      return '987654321'; // Default to Pin
  }
};
```

#### Update Frontend BadgeDesigner
```typescript
// In badge-designer-frontend/app/components/BadgeDesigner.tsx
// Same update as above
```

### 5. Test the Integration

1. **Add the badge designer block** to your product template
2. **Test the flow**:
   - Design a badge with custom text
   - Select different backing options
   - Click "Add to Cart"
   - Verify the correct variant is added with design properties

## Cart Properties Structure

When a badge is added to cart, it will have these properties:

```json
{
  "id": "987654321", // Variant ID (Pin/Magnetic/Adhesive)
  "quantity": 1,
  "properties": {
    "Badge Text Line 1": "John Doe",
    "Badge Text Line 2": "Manager",
    "Badge Text Line 3": "",
    "Badge Text Line 4": "",
    "Background Color": "#FFFFFF",
    "Font Family": "Arial",
    "Backing Type": "pin",
    "Design ID": "design_1234567890",
    "Design Data": "{\"lines\":[...],\"backgroundColor\":\"#FFFFFF\",\"backing\":\"pin\"}"
  }
}
```

## Troubleshooting

### Common Issues:

1. **Wrong variant added to cart:**
   - Check that variant IDs match your Shopify variants
   - Verify the backing type mapping is correct

2. **Price doesn't match:**
   - Ensure variant prices are set correctly in Shopify
   - Check that the backing type selection matches the variant

3. **Design properties not showing:**
   - Verify the cart properties are being set correctly
   - Check that the modal JavaScript is handling the add-to-cart action

### Verification Steps:

1. **Check variant IDs** in Shopify admin
2. **Test each backing option** to ensure correct variant is added
3. **Verify cart properties** show design information
4. **Check order confirmation** displays design details

## Example Variant Setup

Here's what your variants should look like in Shopify:

| Backing Type | Price | SKU | Variant ID |
|--------------|-------|-----|------------|
| Pin | $9.99 | BADGE-PIN-001 | 987654321 |
| Magnetic | $11.99 | BADGE-MAG-001 | 987654322 |
| Adhesive | $10.99 | BADGE-ADH-001 | 987654323 |

## Next Steps After Setup

1. **Update the code** with your actual variant IDs
2. **Test the complete flow** from design to cart
3. **Deploy to production** when ready
4. **Monitor orders** to ensure design data is captured correctly

---

**Need help?** If you encounter issues, check the browser console for errors and verify that the variant IDs match your Shopify setup. 