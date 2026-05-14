import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Message from './models/Message.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,  // Gmail App Password (not your normal password)
  },
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email notification to yourself
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📬 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; padding: 32px; border-radius: 12px; border: 1px solid #1e293b;">
          <h2 style="color: #60a5fa; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #94a3b8; margin-bottom: 24px;">Someone reached out via your portfolio!</p>

          <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px 0;"><span style="color: #a78bfa; font-weight: bold;">Name:</span> ${name}</p>
            <p style="margin: 0 0 8px 0;"><span style="color: #a78bfa; font-weight: bold;">Email:</span> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
          </div>

          <div style="background: #1e293b; border-radius: 8px; padding: 20px;">
            <p style="color: #a78bfa; font-weight: bold; margin: 0 0 8px 0;">Message:</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #475569; font-size: 12px; margin-top: 24px; text-align: center;">
            Sent from your portfolio contact form • Reply directly to ${email}
          </p>
        </div>
      `,
      replyTo: email,  // Replying to the email will go directly to the sender
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent for message from ${name} (${email})`);

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
