# Badge Designer

A modern badge designer application built with Remix and TypeScript. Create and customize professional name badges with real-time preview, bulk CSV import, and PDF generation.

## Features

- **Interactive Badge Designer**: Real-time preview of badge designs
- **Text Customization**: Up to 4 lines of text with individual formatting
- **Typography Controls**: Font family, size, color, bold, italic, underline
- **Text Alignment**: Left, center, right alignment per line
- **Background Colors**: Multiple color options
- **Badge Backing Options**: Pin, Magnetic, Adhesive
- **CSV Import**: Upload CSV files for bulk badge creation
- **PDF Export**: Generate printable PDFs using pdf-lib

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Tech Stack

- **Framework**: Remix
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **PDF Generation**: pdf-lib
- **UI Components**: Custom React components

## Project Structure

```
badge-designer/
├── app/
│   ├── components/     # React components
│   ├── constants/      # Configuration constants
│   ├── routes/         # Remix routes
│   ├── types/          # TypeScript definitions
│   └── utils/          # Utility functions
├── public/             # Static assets
└── build/              # Build output
``` 