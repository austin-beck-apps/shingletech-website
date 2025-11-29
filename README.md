# ShingleTech Website

A modern, professional website for ShingleTech roofing company built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **Modern Design**: Clean, professional design optimized for conversions
- ✅ **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap for excellent search engine visibility
- ✅ **Contact Form**: Integrated email functionality using Resend API
- ✅ **Live Chat Widget**: Tawk.to integration for real-time customer communication
- ✅ **Fully Responsive**: Mobile-first design that works perfectly on all devices
- ✅ **Fast Performance**: Built with Next.js for optimal loading speeds
- ✅ **Service Pages**: Dedicated pages for services, about, and contact information
- ✅ **24/7 Emergency**: Prominent emergency contact information
- ✅ **Accessible**: WCAG compliant with semantic HTML

## Pages

- **Home** - Hero section, services overview, why choose us, contact form
- **Services** - Detailed information about all roofing services offered
- **About** - Company story, values, and service area

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Email**: Resend API
- **Live Chat**: Tawk.to (optional)
- **Hosting**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- A Resend account for email functionality (free tier available)

### Installation

1. Clone or navigate to the project directory:
```bash
cd shingletech-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Get your Resend API key from https://resend.com/api-keys
   - Add your API key to `.env.local`:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Email Setup

The contact form uses Resend to send emails. To set it up:

1. Sign up for a free account at https://resend.com
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. (Optional) Verify your own domain in Resend for branded emails

### Default Email Configuration

- **From**: Currently uses Resend's test domain (`onboarding@resend.dev`)
- **To**: nic@shingletech.com
- **Reply-To**: Customer's email address from the form

### Using Your Own Domain

To send emails from your own domain (e.g., contact@shingletech.com):

1. Add and verify your domain in Resend dashboard
2. Update `/app/api/contact/route.ts`:
```typescript
from: 'ShingleTech <contact@shingletech.com>'
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign up
3. Import your repository
4. Add your environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
5. Deploy!

Vercel will automatically:
- Build and deploy your site
- Provide a custom domain
- Enable HTTPS
- Provide automatic deployments on git push

### Other Hosting Options

The site can also be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting service

Build command: `npm run build`
Output directory: `.next`

## SEO Features

This website includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema for RoofingContractor
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Mobile Friendly**: Responsive design for all devices
- **Fast Loading**: Optimized images and code splitting
- **Sitemap**: Automatically generated (add sitemap.xml if needed)

## Customization

### Updating Contact Information

Update contact details in:
- `/app/page.tsx` (homepage)
- `/app/services/page.tsx` (services page footer)
- `/app/about/page.tsx` (about page footer)
- `/app/api/contact/route.ts` (email recipient)

### Changing Colors

The site uses Tailwind CSS. Main colors:
- Primary Blue: `blue-600` (change throughout)
- Dark Backgrounds: `slate-900`, `slate-800`
- Text: `slate-600`, `slate-700`, `slate-900`

Update in Tailwind config or find/replace color classes.

### Adding Live Chat

See **CHAT_SETUP.md** for detailed instructions on setting up Tawk.to live chat.

Quick setup:
1. Sign up at https://tawk.to (free)
2. Get your Property ID and Widget ID
3. Add to `.env.local`:
```
NEXT_PUBLIC_TAWK_PROPERTY_ID=your_property_id
NEXT_PUBLIC_TAWK_WIDGET_ID=your_widget_id
```
4. Restart server

### Adding Google Analytics

1. Get your Google Analytics tracking ID
2. Add it to `/app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Project Structure

```
shingletech-website/
├── app/
│   ├── api/
│   │   └── contact/         # Contact form API endpoint
│   ├── components/          # React components
│   │   └── ContactForm.tsx  # Contact form component
│   ├── services/            # Services page
│   ├── about/              # About page
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── .env.local             # Environment variables (not in git)
├── .env.example           # Environment variables template
└── README.md              # This file
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Support

For issues or questions about the website:
- Contact: nic@shingletech.com
- Phone: (636) 221-7284

## License

Copyright © 2025 ShingleTech. All rights reserved.
