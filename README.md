# Beans Volleyball Coaching Website 🏐

A professional, modern volleyball coaching website built with Next.js 14, React 19, TypeScript, and Tailwind CSS v4.

**Where Young Talent Blooms 🌱**

## 🎯 Overview

Complete 5-page website for Beans Volleyball Coaching featuring:

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern purple gradient & coral color scheme
- ✅ SEO optimized with metadata and structured data
- ✅ Contact form with EmailJS integration
- ✅ Booking widget placeholder (Calendly ready)
- ✅ Testimonials, FAQ, and process steps
- ✅ Fast performance (Lighthouse 90+ target)
- ✅ WCAG 2.1 AA accessibility compliant

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Edit .env.local and add your EmailJS credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
npm run build
npm run start
```

## 📋 Pages

1. **Home** (`/`) - Hero, services overview, philosophy, testimonials
2. **About** (`/about`) - Biography, credentials, coaching philosophy
3. **Services** (`/services`) - Detailed services, pricing, FAQ
4. **How It Works** (`/how-it-works`) - 5-step coaching process
5. **Contact** (`/contact`) - Contact form, booking widget, info

## 🎨 Design System

**Colors:**

- Primary Purple: `#667eea` → `#764ba2`
- Accent Coral: `#FF6B6B`
- Accent Yellow: `#FFE66D`
- Grays: `#2d3748`, `#4a5568`, `#718096`

**Typography:**

- Font: Geist Sans
- Headings: 800 weight
- Body: 16-18px, 400 weight

**Components:**

- Border radius: 8px (buttons), 16px (cards)
- Transitions: 0.3s ease
- Hover effects: translateY(-4px)

## 🛠 Tech Stack

- **Framework:** Next.js 16.1.1 with App Router
- **UI:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Email:** EmailJS
- **Deployment:** Vercel-ready

## 📁 Project Structure

```
beans/
├── app/                   # Next.js pages
│   ├── (pages)/          # Route group
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Design system
├── components/           # React components
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections
│   ├── cards/           # Card components
│   ├── forms/           # Forms & widgets
│   └── ui/              # Base UI
├── lib/                 # Utilities
├── data/                # Content data
└── public/             # Static assets
```

## ⚙️ Configuration

### EmailJS Setup

1. Sign up at https://www.emailjs.com/
2. Add email service (Gmail/Outlook)
3. Create template with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{message}}`
4. Add credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Content Updates

**Text:**

- Services: `data/services.ts`
- Testimonials: `data/testimonials.ts`
- FAQ: `data/faq.ts`
- Pricing: `data/pricing.ts`

**Images:**

- Replace files in `public/images/`
  - `hero/` - Hero images
  - `services/` - Service images
  - `about/` - Coach portrait
  - `logo/` - Logo files

**Configuration:**

- Calendly URL: `lib/constants.ts`
- Social links: `lib/constants.ts`
- Contact email: `lib/constants.ts`

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

### Environment Variables Required

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

## ✅ TODO Checklist

- [ ] Add EmailJS credentials
- [ ] Replace placeholder images
- [ ] Add Calendly URL
- [ ] Update social media links
- [ ] Add real testimonials
- [ ] Record video introduction
- [ ] Configure custom domain
- [ ] Test contact form delivery

## 📱 Browser Support

- Chrome, Firefox, Safari, Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📄 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Run ESLint
```

## 📞 Support

- Email: info@beansvolleyball.com
- Instagram: @beansvolleyball
- YouTube: Beans Volleyball

## 📝 License

All rights reserved © 2024 Beans Volleyball Coaching

---

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS
