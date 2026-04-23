# Moob Consulting LLC - Professional IT Consultancy Website

A modern, professional website built with React and Tailwind CSS for Moob Consulting LLC, an international IT consultancy firm.

## Overview

This website showcases Moob Consulting's comprehensive IT services including:
- Website Design & Development
- Custom Application Development
- IT Support & Infrastructure
- Professional Coding Classes

## Features

### 🌐 Pages
- **Home**: Hero section with services overview and company highlights
- **About**: Company mission, vision, values, and global presence
- **Services**: Detailed service offerings with features and benefits
- **Coding Classes**: Educational programs with course listings and pricing
- **Portfolio**: Showcase of completed projects and case studies
- **Contact**: Contact form, location info, and FAQ section

### 🎨 Design Elements
- **Color Scheme**: Premium brown and mustard palette with cream backgrounds
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Professional UI**: Clean, intentional design with proper spacing and hierarchy
- **Icons**: Lucide React icons throughout for visual clarity

### ⚙️ Technical Stack
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Development**: Hot Module Replacement (HMR) for instant updates

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Sticky header with mobile menu
│   └── Footer.tsx        # Footer with contact info and links
├── pages/
│   ├── Home.tsx          # Landing page
│   ├── About.tsx         # About & company info
│   ├── Services.tsx      # Service offerings
│   ├── CodingClasses.tsx # Educational programs
│   ├── Portfolio.tsx     # Project showcase
│   └── Contact.tsx       # Contact form & information
├── App.tsx               # Main app with routing
├── main.tsx              # React entry point
└── index.css             # Global styles with Tailwind
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. Navigate to project directory:
```bash
cd "IT consultant website"
```

2. Install dependencies:
```bash
npm install
```

3. Required packages included:
- react-router-dom (navigation)
- lucide-react (icons)
- tailwindcss (styling)
- postcss & autoprefixer

## Running the Development Server

Start the development server:
```bash
npm run dev
```

The website will be available at:
```
http://localhost:5174/
```

Port may vary if already in use. Check terminal output for the actual URL.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization Guide

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  'brown-primary': '#6B4423',
  'brown-dark': '#4A2C1A',
  'mustard': '#D4A574',
  'cream': '#F5F1E8',
}
```

### Content Updates
- **Company Info**: Update in Footer.tsx and About.tsx
- **Services**: Modify in Services.tsx and Home.tsx
- **Contact Details**: Update in Footer.tsx and Contact.tsx
- **Courses**: Edit CodingClasses.tsx
- **Portfolio**: Update Portfolio.tsx

### Global Styles
Edit `src/index.css` to modify:
- Button styles (.btn-primary, .btn-secondary, .btn-outline)
- Section containers and spacing
- Typography styles

## Key Features

### Navigation
- Sticky header with responsive design
- Mobile hamburger menu
- Quick links to all pages
- CTA button

### Footer
- Company information
- Quick navigation links
- Service summary
- Contact details
- Copyright

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly navigation
- Optimized for performance

## Contact Information

**Company**: Moob Consulting LLC
- **Phone**: +2348135523948 | +19032709809
- **Email**: hello@moobconsulting.com
- **Location**: Theodak Plaza, CBD, Abuja, Nigeria
- **International**: United States

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development Tips

1. Use Tailwind classes for all styling
2. Import icons from lucide-react
3. Use React Router `<Link>` for navigation
4. Responsive prefixes: `md:`, `lg:`, `xl:`
5. Custom colors from configuration

## Deployment

- **Vercel**: Zero-config deployment
- **Netlify**: Auto-deploy from GitHub
- **AWS**: S3 + CloudFront
- **Traditional**: Upload `dist/` folder

---

**Built with React, Tailwind CSS, and Vite for professional excellence.**
