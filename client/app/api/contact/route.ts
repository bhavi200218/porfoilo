import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Enable debug logging
console.log('Environment variables:');
console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    console.log('Creating transporter...');
    // Create a Nodemailer transporter using Gmail with debug enabled
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug output
      logger: true // Log information in console
    });
    
    console.log('Transporter created, sending email...');

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'bhavid2002@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7C3AED;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f3ff; border-left: 4px solid #7C3AED;">
            <p style="margin: 0; font-style: italic;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // Send email
    console.log('Sending email with options:', JSON.stringify(mailOptions, null, 2));
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent:', info.messageId);
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Full error details:', { errorMessage, errorStack });
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}
