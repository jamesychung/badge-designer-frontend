overview

## **Overall Project Understanding**

### **Project: Badge Designer App**
A Shopify-integrated badge designer application that allows customers to create custom name badges with real-time design capabilities.

### **Core Architecture**
```
Shopify Store ←→ Gadget (Shopify Integration) ←→ Supabase (DB + Storage)
                                    ↓
                              Vercel (Frontend)
```

### **Key Components**

#### **1. Frontend (Vercel)**
- **Location**: `badge-designer-frontend/`
- **URL**: `https://badge-designer-frontend.vercel.app`
- **Technology**: Remix + TypeScript + Tailwind CSS
- **Purpose**: Main badge design interface that customers interact with

#### **2. Backend (Gadget.dev)**
- **Location**: `badge-designer/`
- **Purpose**: Shopify integration, webhooks, app installation, GDPR compliance
- **Key Features**: 
  - Shopify app bridge integration
  - Webhook management
  - App installation/uninstallation
  - GDPR compliance handling

#### **3. Shopify Integration**
- **Modal System**: `badge-designer-modal-v2.js` embeds the frontend in iframe
- **Product Blocks**: `badge_designer.liquid` block for product pages
- **Cart Integration**: Direct Shopify cart API integration with design properties

### **Core Features**

#### **Badge Design Capabilities**
- **Text Customization**: Up to 4 lines of text with individual formatting
- **Typography Controls**: Font family, size, color, bold, italic, underline
- **Text Alignment**: Left, center, right alignment per line
- **Background Colors**: Multiple color options
- **Badge Backing Options**: Pin, Magnetic, Adhesive with different pricing
- **Real-time Preview**: Live preview of badge designs

#### **Advanced Features**
- **CSV Import**: Bulk badge creation from CSV files
- **PDF Export**: Generate printable PDFs using pdf-lib
- **Design Persistence**: Save and recover badge designs
- **Cart Integration**: Add custom badges to Shopify cart with design data
- **Thumbnail Generation**: Custom thumbnails for cart display

### **Product Structure**
- **Single Product**: "Custom Name Badge"
- **Variants**: Only backing options (Pin $9.99, Magnetic $11.99, Adhesive $10.99)
- **Customization**: Handled as line item properties, not variants

### **Data Flow**
1. Customer visits Shopify product page
2. `badge_designer.liquid` block loads `badge-designer-modal-v2.js`
3. Modal opens iframe pointing to Vercel-hosted frontend
4. Customer designs badge in the interface
5. Design data sent back to Shopify via postMessage
6. Badge added to cart with design properties
7. Design data stored in database (currently migrating to Supabase)

### **Current Status**
- ✅ Iframe integration working
- ✅ Design interface functional
- ✅ Save design capability
- ✅ Add to cart integration
- ✅ PostMessage API communication
- ✅ Vercel deployment active
- ✅ Basic Supabase integration implemented
- ❌ Security issue: API keys hardcoded
- ❌ Real-time features not implemented
- ❌ Design recovery features incomplete

### **Business Model**
- **Product**: Custom name badges
- **Pricing**: Base price + backing type premium
- **Target Market**: Businesses needing custom badges
- **Integration**: Seamless Shopify store integration

### **Technical Stack**
- **Frontend**: Remix, TypeScript, Tailwind CSS, React
- **Backend**: Gadget.dev (Shopify integration)
- **Database**: Migrating from Gadget to Supabase
- **Storage**: Supabase Storage for images
- **Hosting**: Vercel (frontend)
- **E-commerce**: Shopify
- **PDF Generation**: pdf-lib
- **Icons**: Heroicons

### **Development Workflow**
- **Frontend**: `npm run dev` in `badge-designer-frontend/`
- **Backend**: `yarn shopify:dev` in `badge-designer/`
- **Deployment**: Automatic Vercel deployment, manual Gadget deployment

The project is essentially a **Shopify app that provides a custom badge designer** with the goal of creating a seamless experience where customers can design custom badges directly within their Shopify store and have those designs properly integrated into the cart and order system.

The Supabase migration is just one part of the overall architecture optimization, moving from Gadget's proprietary database to a more flexible PostgreSQL solution while maintaining the strong Shopify integration that Gadget provides.