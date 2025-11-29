# Live Chat Setup Guide - Tawk.to

Your website is now ready for live chat! This guide will walk you through setting up **Tawk.to** - a completely free live chat solution.

## Why Tawk.to?

- ✅ **100% FREE** forever (no hidden costs)
- ✅ Live chat with customers in real-time
- ✅ **Mobile apps** (iOS & Android) to chat on the go
- ✅ **Chatbot** for automated responses when offline
- ✅ **Unlimited agents** - your whole team can respond
- ✅ Chat history and visitor monitoring
- ✅ Customizable to match your red branding
- ✅ Pre-chat surveys to collect customer info
- ✅ Works on all devices

## Setup Instructions (5 Minutes)

### Step 1: Create Free Tawk.to Account

1. Go to https://tawk.to
2. Click "Sign Up Free"
3. Enter your details:
   - Name: Your name
   - Email: nic@shingletech.com (or your preferred email)
   - Password: (create a secure password)
4. Verify your email

### Step 2: Add Your Website

1. After logging in, you'll see "Add Property"
2. Enter:
   - Property Name: **ShingleTech**
   - Website URL: **shingletech.com**
3. Click "Add Property"

### Step 3: Get Your Widget Code

1. In the dashboard, click on your property name
2. Go to **Administration** → **Channels** → **Chat Widget**
3. You'll see a code snippet like:
   ```javascript
   https://embed.tawk.to/PROPERTY_ID/WIDGET_ID
   ```
4. Copy the two IDs from that URL:
   - `PROPERTY_ID` (looks like: 5f1234567890abcdef123456)
   - `WIDGET_ID` (looks like: default or 1abc2def3)

### Step 4: Add to Your Website

1. Open the file: `.env.local`
2. Add your IDs:
   ```
   NEXT_PUBLIC_TAWK_PROPERTY_ID=5f1234567890abcdef123456
   NEXT_PUBLIC_TAWK_WIDGET_ID=default
   ```
3. Save the file
4. Restart your dev server (stop and run `npm run dev` again)

### Step 5: Customize the Chat Widget

Back in Tawk.to dashboard:

1. Go to **Administration** → **Channels** → **Chat Widget**
2. Click **Appearance**
3. Customize to match ShingleTech:
   - **Widget Color**: #dc2626 (ShingleTech red)
   - **Widget Position**: Bottom right
   - **Welcome Message**: "Need a roofing quote? Chat with us!"
   - **Pre-Chat Survey**: Enable to collect name, email, phone
4. Click "Save Changes"

## Features to Enable

### 1. Offline Messages
When you're not available, customers can leave messages:
- Go to **Messaging** → **Offline**
- Enable "Allow visitors to leave messages"
- Messages will be emailed to you

### 2. Pre-Chat Form
Collect customer info before chat starts:
- Go to **Channels** → **Chat Widget** → **Pre-Chat Form**
- Enable and customize fields:
  - Name (required)
  - Email (required)
  - Phone Number (required for roofing quotes)
  - Message/Reason for contact

### 3. Quick Responses
Create saved responses for common questions:
- Go to **Shortcuts**
- Create shortcuts like:
  - `/hours` → "We're available 24/7 for emergency service!"
  - `/quote` → "I'd be happy to provide a free quote. Can you tell me about your roofing needs?"
  - `/emergency` → "We offer 24/7 emergency service. Call (636) 221-7284 now or tell me about your issue."

### 4. Mobile Apps
Download apps to respond on the go:
- **iOS**: Search "Tawk.to" in App Store
- **Android**: Search "Tawk.to" in Google Play Store
- Get notifications when customers chat

### 5. Chatbot (Optional)
Set up automated responses when offline:
- Go to **Automation** → **Triggers**
- Create triggers like:
  - After 5 seconds: "Hi! Need help with your roof? I'm here to help!"
  - If no agents online: "We're currently offline, but leave us a message and we'll get back to you ASAP!"

## Testing

1. Open your website: http://localhost:3000
2. Look for the red chat bubble in the bottom right corner
3. Click it and test sending a message
4. Check your Tawk.to dashboard to see the message

## Best Practices

### Quick Response Tips
- Respond within 1-2 minutes if possible
- Use quick responses for efficiency
- Always get contact info (phone/email) early in the conversation
- End with a call to action: schedule estimate, call for emergency, etc.

### Common Chat Scenarios

**Scenario 1: Quote Request**
```
Customer: "How much for a new roof?"
You: "Great question! Roof prices vary based on size and materials.
Can I get your address and phone number to provide an accurate quote?"
```

**Scenario 2: Emergency**
```
Customer: "My roof is leaking!"
You: "I'm sorry to hear that! We offer 24/7 emergency service.
For fastest response, please call (636) 221-7284 right now.
Or share your address and I'll have someone call you in 5 minutes."
```

**Scenario 3: General Question**
```
Customer: "Do you install metal roofs?"
You: "Yes! We specialize in metal roofing installation.
Metal roofs are durable and energy-efficient.
Would you like a free estimate?"
```

## Customization Options

### Widget Appearance
- **Bubble Text**: "Need a Quote?" or "Chat Now"
- **Welcome Message**: "Hi! Looking for roofing help?"
- **Color**: Already set to ShingleTech red (#dc2626)

### Business Hours
Set your typical hours, but keep 24/7 emergency messaging:
- Go to **Messaging** → **Hours**
- Set normal business hours
- Enable "Allow messages outside hours" for emergencies

## Integration with Your Workflow

### Route Chats to Email
- Go to **Notifications**
- Enable email notifications for:
  - New chats
  - Missed chats
  - Offline messages
- Add multiple email addresses if your team wants notifications

### Chat to Lead Conversion
When someone chats:
1. Get their contact info (name, phone, email)
2. Understand their need
3. Schedule an estimate call/visit
4. Follow up via phone/email after chat

## Monitoring & Analytics

View in Tawk.to dashboard:
- Number of chats per day
- Response times
- Most common questions
- Visitor location/device data
- Chat satisfaction ratings

## Troubleshooting

**Chat widget not showing?**
- Check that you added the IDs to `.env.local`
- Make sure you restarted the dev server
- Check browser console for errors

**Can't receive chats?**
- Make sure you're logged into Tawk.to dashboard
- Download mobile apps for notifications
- Check your status is "Available" (not "Away")

**Want to test?**
- Open website in incognito mode
- Start a chat with yourself
- Check if it appears in your dashboard

## Pricing

**Tawk.to is FREE forever** for:
- Unlimited chats
- Unlimited agents
- Mobile apps
- Chat history
- Basic chatbot
- All core features

**Optional Paid Add-ons** (not required):
- Remove Tawk.to branding: $19/month
- Video & voice calls: $29/month
- Hire Tawk.to agents: Starting at $1/hour

**Recommendation**: Start with free version. It has everything you need!

## Alternative Options

If you prefer other tools:

### 1. **Tidio** (Alternative)
- Free plan: 50 chats/month
- Similar features to Tawk.to
- $29/month for unlimited
- Website: tidio.com

### 2. **Facebook Messenger**
- Free
- Integrates with Facebook page
- Good if you're active on Facebook
- Add plugin: facebook.com/business/messenger-for-business

### 3. **Crisp** (Alternative)
- Free plan: 2 agents
- Modern interface
- $25/month for unlimited
- Website: crisp.chat

**But we recommend Tawk.to** - it's truly free with no limits and works great for roofing companies!

## Support

- **Tawk.to Help**: help.tawk.to
- **Live Support**: Chat with Tawk.to team on their website
- **Email**: support@tawk.to

---

## Quick Start Checklist

- [ ] Sign up at tawk.to
- [ ] Create property for shingletech.com
- [ ] Get Property ID and Widget ID
- [ ] Add to `.env.local` file
- [ ] Restart dev server
- [ ] Customize widget color to red (#dc2626)
- [ ] Set up pre-chat form
- [ ] Download mobile app
- [ ] Test chat on your website
- [ ] Set up email notifications
- [ ] Create quick response shortcuts

**Once set up, the chat widget will appear on all pages and give customers an easy way to reach you!**
