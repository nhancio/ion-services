import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6px6kds',   // Updated Service ID
      'template_2pw93ck',  // Updated Template ID
      form.current, 
      'g8fa6biq7qZOoIimu'  // Updated Public Key
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error('Email sending failed:', error.text);
        alert('Failed to send message.');
      }
    );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <input type="text" name="firstName" placeholder="First Name" required />
      <input type="text" name="lastName" placeholder="Last Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="phone" placeholder="Phone" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;