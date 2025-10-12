import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD || 'your-app-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Store the submission in Supabase
    const submission = {
      id: Date.now().toString(),
      type: 'contact' as const,
      name,
      email,
      phone: phone || null,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };

    const { error: dbError } = await supabase
      .from('submissions')
      .insert([submission]);

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue with email even if database fails
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'drcanaresprice@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">📧 New Contact Form Submission</h2>
          </div>

          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #333; margin-bottom: 20px;">Contact Details:</h3>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border: 1px solid #dee2e6;">${phone || 'Not provided'}</td>
              </tr>
            </table>

            <h3 style="color: #333; margin: 20px 0 10px 0;">Message:</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>

            <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 5px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                📞 Contact them back at: <strong>${email}</strong> ${phone ? `or <strong>${phone}</strong>` : ''}
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}