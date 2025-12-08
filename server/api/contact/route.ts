// server/api/contact/route.ts
import { Router } from 'express';
import nodemailer from 'nodemailer';

export const contactRouter = Router();

// Enable CORS for all routes
contactRouter.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  next();
});

contactRouter.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log('Received contact form submission:', { 
      name, 
      email,
      hasEmailUser: !!process.env.EMAIL_USER,
      hasEmailPass: !!process.env.EMAIL_PASS
    });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials');
      return res.status(500).json({ 
        success: false, 
        error: 'Email service not configured'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,
      logger: true
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'bhavid2002@gmail.com',
      subject: `New Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to send email',
      details: error.message || 'An unknown error occurred'
    });
  }
});