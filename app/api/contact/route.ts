import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if Web3Forms API key is configured
    const apiKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!apiKey) {
      console.error('Web3Forms API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at nic@shingletech.com or call (636) 221-7284.' },
        { status: 500 }
      );
    }

    // Send email using Web3Forms
    const formData = new FormData();
    formData.append('access_key', apiKey);
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('subject', `New Contact Form Submission - ${service}`);
    formData.append('message', `
Service Needed: ${service}

${message}

---
Contact Information:
Name: ${name}
Phone: ${phone}
Email: ${email}
    `);
    formData.append('from_name', 'ShingleTech Website');
    formData.append('redirect', 'false');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, data: result });
    } else {
      console.error('Web3Forms error:', result);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
