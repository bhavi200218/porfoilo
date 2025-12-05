const fetch = require('node-fetch');

async function testEmail() {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message from the contact form.'
      }),
    });

    const data = await response.json();
    console.log('Response:', data);
    
    if (!response.ok) {
      console.error('Error:', data.error || 'Failed to send email');
    } else {
      console.log('Email sent successfully!');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testEmail();
