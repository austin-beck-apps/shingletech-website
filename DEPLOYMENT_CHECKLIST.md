# ShingleTech Website - Deployment Checklist

## Pre-Launch Checklist

### 1. Email Setup
- [ ] Create Resend account at https://resend.com
- [ ] Get API key from Resend dashboard
- [ ] Add API key to `.env.local` file
- [ ] Test contact form locally
- [ ] Verify emails arrive at nic@shingletech.com

### 2. Content Review
- [ ] Verify all phone numbers: (636) 221-7284
- [ ] Verify email address: nic@shingletech.com
- [ ] Check all service descriptions are accurate
- [ ] Review "About Us" content
- [ ] Confirm service area cities are correct

### 3. Visual Check
- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Check all buttons work
- [ ] Verify all links work
- [ ] Test contact form submission

## GitHub Setup

- [ ] Create GitHub account (if needed)
- [ ] Create new repository: shingletech-website
- [ ] Push code to GitHub:
  ```bash
  cd shingletech-website
  git remote add origin https://github.com/YOUR_USERNAME/shingletech-website.git
  git branch -M main
  git push -u origin main
  ```

## Vercel Deployment

### First-Time Setup
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub account
- [ ] Click "Import Project"
- [ ] Select shingletech-website repository
- [ ] Add environment variable:
  - Name: `RESEND_API_KEY`
  - Value: [Your Resend API key]
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

### Domain Connection
- [ ] In Vercel dashboard, go to Settings → Domains
- [ ] Add domain: shingletech.com
- [ ] Add domain: www.shingletech.com
- [ ] Note the DNS records provided

## Domain DNS Configuration

Contact your domain registrar (where you bought shingletech.com) and update:

### Required DNS Records

**For Apex Domain (shingletech.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `3600` (or default)

**For WWW Subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `3600` (or default)

**Note**: DNS changes can take 24-48 hours to propagate globally (usually faster)

## Post-Deployment Testing

- [ ] Visit https://shingletech.com (wait for DNS)
- [ ] Visit https://www.shingletech.com
- [ ] Test contact form on live site
- [ ] Verify email arrives at nic@shingletech.com
- [ ] Test on mobile device
- [ ] Check all pages load (Home, Services, About)
- [ ] Verify SSL certificate is active (look for padlock)

## SEO Setup

### Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Add property: shingletech.com
- [ ] Verify ownership via DNS or HTML file
- [ ] Submit sitemap (if created)

### Google My Business
- [ ] Update website URL to https://shingletech.com
- [ ] Ensure NAP (Name, Address, Phone) matches website
- [ ] Add photos if needed

### Google Analytics (Optional but Recommended)
- [ ] Create Google Analytics account
- [ ] Get tracking ID (G-XXXXXXXXXX)
- [ ] Add to website (see SETUP_GUIDE.md)
- [ ] Deploy updated code
- [ ] Verify tracking is working

## Old Wix Site Transition

### Before Switching
- [ ] Backup any important data from Wix
- [ ] Save any images/content not yet on new site
- [ ] Note any Wix-specific features to replicate

### After New Site is Live
- [ ] Cancel Wix subscription
- [ ] Remove old Wix DNS records
- [ ] Set up 301 redirects if needed (Vercel handles most)

## Monitoring Setup

### Email Notifications
- [ ] Test that form emails arrive promptly
- [ ] Add backup email recipient if desired
- [ ] Set up email filters to organize submissions

### Website Monitoring
- [ ] Bookmark Vercel dashboard for deployment status
- [ ] Check analytics weekly (once set up)
- [ ] Monitor form submissions

## Marketing Relaunch

### Update All Online Listings
- [ ] Google My Business
- [ ] Facebook page
- [ ] Instagram bio
- [ ] Yelp
- [ ] BBB listing
- [ ] Owens Corning contractor profile
- [ ] Any other directories

### Announce the New Site
- [ ] Social media posts
- [ ] Email to existing customers
- [ ] Update email signature
- [ ] Update business cards (if printing new)

## Troubleshooting

### If Contact Form Doesn't Work
1. Check Vercel environment variables are set
2. Verify Resend API key is valid
3. Check Vercel deployment logs for errors
4. Test locally first

### If Domain Doesn't Connect
1. Verify DNS records are correct
2. Wait 24-48 hours for propagation
3. Check DNS with: https://dnschecker.org
4. Contact domain registrar if issues persist

### If Site Looks Wrong
1. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
2. Clear browser cache
3. Try different browser
4. Check Vercel deployment succeeded

## Support Contacts

- **Vercel Support**: vercel.com/support
- **Resend Support**: support@resend.com
- **Domain Registrar**: [Your registrar's support]
- **Developer**: [Keep contact info]

## Success Metrics to Track

After 30 days, review:
- [ ] Number of contact form submissions
- [ ] Website traffic (via Google Analytics)
- [ ] Google search rankings for key terms
- [ ] Customer feedback on new site
- [ ] Conversion rate (visitors → contacts)

---

## Timeline Estimate

- **Same Day**: Set up email, test locally
- **Day 1**: Deploy to Vercel
- **Day 1-2**: DNS propagation
- **Day 2**: Post-deployment testing
- **Week 1**: SEO setup, update listings
- **Week 2-4**: Monitor and optimize

**Target Go-Live Date**: _____________

**Actual Go-Live Date**: _____________

---

**Notes**:
