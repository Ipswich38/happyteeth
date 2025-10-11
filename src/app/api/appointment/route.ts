import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD || 'your-app-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, cellphone, service, date } = await request.json();

    if (!name || !cellphone || !service || !date) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Store the submission
    const submission = {
      id: Date.now().toString(),
      type: 'appointment',
      name,
      cellphone,
      service,
      date,
      timestamp: new Date().toISOString(),
      read: false
    };

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');

    // Create data directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing submissions or create empty array
    let submissions = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      submissions = JSON.parse(fileContent);
    }

    // Add new submission
    submissions.unshift(submission); // Add to beginning of array
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'drcanaresprice@gmail.com',
      subject: `🦷 New Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">🦷 New Appointment Request</h2>
            <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">Happy Teeth Dental Clinic</p>
          </div>

          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h3 style="color: #333; margin-bottom: 20px;">Patient Information:</h3>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold; width: 35%;">👤 Patient Name:</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">📱 Cellphone:</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${cellphone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">🦷 Service:</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 12px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">📅 Preferred Date:</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${formattedDate}</td>
              </tr>
            </table>

            <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); border-radius: 10px; text-align: center;">
              <h3 style="margin: 0 0 10px 0; color: #333;">📞 Next Steps</h3>
              <p style="margin: 0; color: #555; font-size: 14px; line-height: 1.6;">
                Please contact <strong>${name}</strong> at <strong>${cellphone}</strong> to confirm the appointment and discuss available time slots for <strong>${formattedDate}</strong>.
              </p>
            </div>

            <div style="margin-top: 15px; padding: 15px; background: #e8f5e8; border-radius: 5px; text-align: center; border-left: 4px solid #28a745;">
              <p style="margin: 0; color: #155724; font-size: 14px;">
                ⏰ <strong>Remember:</strong> Confirm appointment details and clinic hours (9:00 AM - 5:00 PM, Daily)
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Appointment request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending appointment email:', error);
    return NextResponse.json(
      { error: 'Failed to send appointment request. Please try again.' },
      { status: 500 }
    );
  }
}