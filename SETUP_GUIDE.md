# ShingleTech Website - Complete Setup Guide

## Overview

Your new ShingleTech website is now ready! This guide will walk you through everything you need to know to launch and manage your website.

## What's Been Built

### Pages
1. **Homepage** (/)
   - Hero section with background image
   - Services overview with 4 main service cards
   - "Why Choose Us" section with key benefits
   - Contact form integrated into the page
   - Footer with contact information and links

2. **Services Page** (/services)
   - Detailed descriptions of all services
   - Service features with checkmarks
   - Emergency service banner
   - Individual "Request Quote" buttons

3. **About Page** (/about)
   - Company story and history
   - Core values section
   - "Why Choose ShingleTech" details
   - Service area information

### Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Contact form with email functionality
- ✅ SEO optimized with structured data
- ✅ Fast loading with Next.js
- ✅ Professional, modern design
- ✅ Click-to-call phone numbers
- ✅ Email links
- ✅ 24/7 emergency service highlighted

## Quick Start (Local Development)

The website is currently running at: http://localhost:3000

To stop the server, use `Ctrl+C` in the terminal.

To start it again:
```bash
cd shingletech-website
npm run dev
```

## Setting Up Email Functionality

The contact form currently needs an API key to send emails. Here's how to set it up:

### Step 1: Get a Resend API Key (Free)

1. Go to https://resend.com
2. Sign up for a free account (no credit card required)
3. Verify your email
4. Go to API Keys section
5. Create a new API key
6. Copy the key (it starts with "re_")

### Step 2: Add the API Key

1. Open the file: `shingletech-website/.env.local`
2. Replace the empty line with your API key:
```
RESEND_API_KEY=re_your_actual_key_here
```
3. Save the file
4. Restart the development server

### Step 3: Test the Contact Form

1. Go to http://localhost:3000
2. Scroll down to the contact form
3. Fill it out and submit
4. Check the email at nic@shingletech.com

## Deploying to Production

### Option 1: Vercel (Recommended - FREE)

Vercel is made by the creators of Next.js and offers:
- Free hosting for this website
- Automatic HTTPS
- Custom domain support
- Automatic deployments from GitHub
- Global CDN for fast loading everywhere

**Steps:**

1. **Push to GitHub** (if not already done)
   ```bash
   cd shingletech-website
   git remote add origin https://github.com/austin-beck-apps/shingletech-website.git
   git branch -M main
   git add .
   git commit -m "Initial ShingleTech website"
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com/signup
   - Sign up with GitHub
   - Click "Import Project"
   - Select your shingletech-website repository
   - Add environment variable:
     - Name: `RESEND_API_KEY`
     - Value: Your Resend API key
   - Click "Deploy"

3. **Connect Your Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add: shingletech.com
   - Update your DNS records at your domain registrar:
     - Type: A Record
     - Name: @
     - Value: 76.76.21.21
     - Type: CNAME
     - Name: www
     - Value: cname.vercel-dns.com

### Option 2: Other Hosting Providers

The website can also be deployed to:
- **Netlify**: Similar to Vercel, free tier available
- **AWS Amplify**: Amazon's hosting platform
- **Digital Ocean App Platform**: $5-10/month
- **Traditional hosting**: Most Node.js hosting works

Build command: `npm run build`
Start command: `npm start`

## Email Configuration

### Using Your Own Domain for Emails

Currently emails come from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, add and verify shingletech.com
2. Add DNS records they provide
3. Update the file `app/api/contact/route.ts`:
   ```typescript
   from: 'ShingleTech <contact@shingletech.com>'
   ```

### Changing Email Recipient

To change where form submissions go:

Edit `app/api/contact/route.ts`:
```typescript
to: ['your-email@example.com']
```

You can also add multiple recipients:
```typescript
to: ['nic@shingletech.com', 'another@email.com']
```

## Customization

### Updating Contact Information

Contact info appears in multiple places. Update these files:

1. **Phone Number & Email**
   - `app/page.tsx` (homepage)
   - `app/services/page.tsx`
   - `app/about/page.tsx`
   - `app/api/contact/route.ts`

2. **Address**
   - All footer sections in the files above

### Changing Colors

The site uses a blue and slate gray color scheme. To change:

**Primary Blue (Call-to-action buttons):**
- Find: `bg-blue-600`
- Replace with: `bg-[your-color]-600`

**Dark Backgrounds:**
- Find: `bg-slate-900`
- Replace with your preferred color

Use Tailwind CSS color names: red, green, purple, indigo, etc.

### Adding Your Logo

1. Add logo file to `/public/logo.png`
2. Update the header in each page:
   ```tsx
   <div className="flex items-center gap-4">
     <Image src="/logo.png" alt="ShingleTech" width={60} height={60} />
     <h1>ShingleTech</h1>
   </div>
   ```

### Adding Photos

Replace the placeholder background image:

In `app/page.tsx`, find:
```tsx
bg-[url('https://images.unsplash.com/photo-...')]
```

Replace with your own image:
1. Add photo to `/public/hero-bg.jpg`
2. Change to: `bg-[url('/hero-bg.jpg')]`

## Adding Google Analytics

1. Get your Google Analytics tracking ID
2. Open `app/layout.tsx`
3. Add before the closing `</head>` tag:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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

## SEO Best Practices

Your site is already optimized with:
- ✅ Descriptive page titles
- ✅ Meta descriptions
- ✅ Structured data (JSON-LD)
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Semantic HTML

### Additional SEO Steps:

1. **Submit to Google Search Console**
   - Go to search.google.com/search-console
   - Add property: shingletech.com
   - Verify ownership
   - Submit sitemap

2. **Create a Sitemap**
   Create `app/sitemap.ts`:
   ```typescript
   export default function sitemap() {
     return [
       { url: 'https://shingletech.com', lastModified: new Date() },
       { url: 'https://shingletech.com/services', lastModified: new Date() },
       { url: 'https://shingletech.com/about', lastModified: new Date() },
     ]
   }
   ```

3. **Google My Business**
   - Claim/update your Google Business Profile
   - Use the same NAP (Name, Address, Phone) as on website
   - Add photos of your work

4. **Get Reviews**
   - Ask satisfied customers for Google reviews
   - Link to review page from website

## Maintenance

### Updating Content

All content is in these files:
- Homepage: `app/page.tsx`
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`

Edit the text directly in the files and deploy.

### Monitoring Form Submissions

Check email at nic@shingletech.com for all form submissions. They include:
- Customer name
- Phone number
- Email address
- Service requested
- Message

### Checking Website Analytics

Once Google Analytics is set up:
1. Go to analytics.google.com
2. View your property
3. Check:
   - Visitor numbers
   - Popular pages
   - Traffic sources
   - Mobile vs desktop usage

## Cost Breakdown

### Free Tier (Recommended to Start)
- **Hosting**: Vercel (Free)
- **Email Service**: Resend (Free - 100 emails/day)
- **Domain**: $12-15/year (existing)
- **SSL Certificate**: Included free
- **Total**: ~$12-15/year

### If You Outgrow Free Tier
- **Resend Pro**: $20/month (50,000 emails/month)
- **Vercel Pro**: $20/month (only if needed for high traffic)

## Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Resend: https://resend.com/docs

### Need Help?
- Developer contact: Include in your records
- Resend support: support@resend.com
- Vercel support: vercel.com/support

## Next Steps

1. ✅ Set up Resend API key
2. ✅ Test contact form locally
3. ✅ Create GitHub repository
4. ✅ Deploy to Vercel
5. ✅ Connect domain
6. ✅ Test live website
7. ✅ Set up Google Analytics
8. ✅ Submit to Google Search Console
9. ✅ Update Google My Business with new website
10. ✅ Start driving traffic!

## Backup & Version Control

Your code is in: `/Users/austinbeck/Desktop/ShingleTech/shingletech-website/`

**Important**: Push to GitHub regularly to:
- Keep backups
- Enable automatic deployments
- Track changes

```bash
git add .
git commit -m "Description of changes"
git push
```

---

**Congratulations!** Your new ShingleTech website is ready to replace your Wix site and start bringing in leads!
