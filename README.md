# LuxAura - Premium Window Treatments Website

A modern, elegant website for LuxAura - custom blinds, curtains, and window treatments.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
luxaura/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation & SEO
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Auto-generated sitemap
│   ├── blinds/            # Blinds product page
│   ├── curtains-sheers/   # Curtains & Sheers page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── quote/             # Quote request page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation bar
│   ├── Hero.tsx           # Homepage hero section
│   ├── ProductShowcase.tsx # Product grid display
│   ├── ServiceProcess.tsx # 3-step process section
│   ├── TrustIndicators.tsx # Trust badges section
│   ├── ContactSection.tsx # Contact form component
│   └── Footer.tsx         # Website footer
└── public/                # Static assets (add images here)
    └── robots.txt         # SEO robots file
```

## ✅ Completed Features

- ✅ Responsive design optimized for all devices (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ SEO optimized with metadata and structured data (JSON-LD)
- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Image placeholders with unique IDs for easy replacement
- ✅ Mobile-first navigation with hamburger menu
- ✅ Contact form with validation
- ✅ Quote request form
- ✅ Product pages (Blinds, Curtains & Sheers)
- ✅ About page
- ✅ Performance optimizations (compression, caching)
- ✅ Cross-device compatibility
- ✅ Open Graph & Twitter Card metadata
- ✅ Google-friendly robots.txt

## 🎨 Design Features

- **Clean & Minimal**: Inspired by Nebula Living's aesthetic
- **Comprehensive Info**: Structured like Interiaura
- **Responsive**: Mobile-first design with breakpoints for all devices
- **Custom Colors**: Gold (#C9A961) and Copper (#B8956A) accents
- **Modern Fonts**: Inter for body, Playfair Display for headings
- **Touch-optimized**: Buttons and links sized for mobile interaction

## 📄 Pages Included

- **Home**: Hero, product showcase, process, trust indicators, contact form
- **Blinds**: 6 detailed blind types with features
- **Curtains & Sheers**: 4 curtain styles and premium fabric options
- **About**: Company story, values, and why choose us
- **Contact**: Contact form, business information, and map placeholder
- **Quote**: Comprehensive quote request form with project details

## 🎯 Image Replacement Guide

All image placeholders are labeled with unique IDs for easy identification:

### Homepage

- **IMG-HERO** - Hero background image (full screen)
- **IMG-A** - Blinds product card (264x256px)
- **IMG-B** - Curtains product card (264x256px)
- **IMG-C** - Sheers product card (264x256px)
- **IMG-D** - Cushions product card (264x256px)

### Curtains & Sheers Page

- **IMG-E** - S-Fold Curtains (256x256px)
- **IMG-F** - Pinch Pleat Curtains (256x256px)
- **IMG-G** - Eyelet Curtains (256x256px)
- **IMG-H** - Sheer Curtains (256x256px)

### Blinds Page

- **IMG-I** - Roller Blinds (192x192px)
- **IMG-J** - Roman Blinds (192x192px)
- **IMG-K** - Venetian Blinds (192x192px)
- **IMG-L** - Panel Glide Blinds (192x192px)
- **IMG-M** - Vertical Blinds (192x192px)
- **IMG-N** - Cellular/Honeycomb Blinds (192x192px)

### Contact Page

- **IMG-MAP** - Google Maps location (full width, 384px height)

**Total: 15 image positions**

To replace an image, search for the image ID (e.g., `IMG-A`) in the codebase and add your image.

## 🔧 Customization

### Adding Images

Replace placeholder sections in components with your images:

```tsx
// Replace the placeholder div with Next.js Image component:
import Image from 'next/image';

<Image src="/images/your-image.jpg" alt="Description" width={500} height={500} className="..." />;
```

### Updating Contact Info

Edit the contact details in:

- `components/ContactSection.tsx` - Contact form section
- `components/Footer.tsx` - Footer contact info
- `app/layout.tsx` - Structured data (JSON-LD)

### Changing Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#C9A961",  // Your brand color
    dark: "#B8956A"      // Darker variant
  },
}
```

### SEO Optimization

Update metadata in:

- `app/layout.tsx` - Global metadata and structured data
- `app/sitemap.ts` - Update URLs and priorities
- Individual page files for page-specific metadata

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# OR deploy to Vercel (recommended)
vercel deploy
```

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations (ready to use)
- **React 18**: Latest React features

## 🚀 Performance Features

- **Automatic Code Splitting**: Only load what's needed
- **Image Optimization**: WebP & AVIF format support
- **Compression**: Gzip compression enabled
- **Caching**: Optimized for static content
- **Lazy Loading**: Images load on demand
- **Mobile Optimized**: 16px minimum font size to prevent zoom

## 📝 TODO / Future Enhancements

### High Priority

- [ ] Add real product images (15 locations marked with IMG-\*)
- [ ] Integrate form submission service (EmailJS, SendGrid, or custom API)
- [ ] Add Google Maps iframe to contact page
- [ ] Update contact information (phone, email, address)

### Medium Priority

- [ ] Create Cushions product page
- [ ] Create Motorisation product page
- [ ] Implement Trade Registration page
- [ ] Add image galleries for products
- [ ] Add customer testimonials section
- [ ] Create FAQ page

### Nice to Have

- [ ] Set up Google Analytics / Plausible
- [ ] Add live chat integration
- [ ] Implement blog/resources section
- [ ] Add before/after project galleries
- [ ] Set up newsletter subscription (integrate with email service)
- [ ] Add social media feed integration
- [ ] Implement product filtering and search

## 🔒 SEO Checklist

- ✅ Semantic HTML structure
- ✅ Meta descriptions for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Structured data (JSON-LD) for local business
- ✅ Automatic sitemap generation
- ✅ robots.txt file configured
- ✅ Mobile-friendly viewport settings
- ✅ Fast page load times
- [ ] Add alt text to all images when added
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business listing

## 📞 Support

For questions or issues, refer to:

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- TypeScript Documentation: https://www.typescriptlang.org/docs

## 📄 License

**Copyright © 2025 LuxAura. All Rights Reserved.**

This is proprietary commercial software. See the [LICENSE](./LICENSE) file for full terms.

### ⚠️ Important Restrictions

- ❌ **No Commercial Use** - Cannot be used for business purposes
- ❌ **No Modification** - Cannot be changed or adapted
- ❌ **No Distribution** - Cannot be copied or shared
- ❌ **No Competing Business** - Cannot be used to create competing window treatment businesses
- ✅ **View Only** - Code is visible for educational and reference purposes only

### 📧 Licensing Inquiries

For permission requests or licensing questions:

- **Email**: service@luxaura.com.au
- **Website**: https://luxaura.com.au

---

Built with ❤️ for LuxAura | **This code is NOT open source**

*Last updated: October 2025*
