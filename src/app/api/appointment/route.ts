import { NextRequest, NextResponse } from 'next/server';
import { appointmentsSupabase } from '@/lib/appointmentsSupabase';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, cellphone, service, date, time, customTime, finalTime, appointmentDateTime } = await request.json();

    if (!name || !email || !cellphone || !service || !date) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Store the submission in Appointments Supabase database
    if (appointmentsSupabase) {
      const submission = {
        id: Date.now().toString(),
        type: 'appointment' as const,
        name,
        email,
        cellphone,
        service,
        date,
        time: finalTime || time || '',
        customTime: customTime || '',
        isCustomTime: time === 'custom',
        appointmentDateTime: appointmentDateTime || `${date} ${finalTime || time}`,
        timestamp: new Date().toISOString(),
        read: false
      };

      const { error: dbError } = await appointmentsSupabase
        .from('submissions')
        .insert([submission]);

      if (dbError) {
        console.error('Appointments database error:', dbError);
        return NextResponse.json(
          { error: 'Failed to save appointment request. Please try again.' },
          { status: 500 }
        );
      }

      console.log('Appointment saved successfully:', submission.id);
    } else {
      console.error('Appointments Supabase not configured');
      return NextResponse.json(
        { error: 'Appointment system not available. Please try again later.' },
        { status: 503 }
      );
    }

    // Send email notification to clinic
    await sendAppointmentNotification({
      name,
      email,
      cellphone,
      service,
      date,
      time: finalTime || time || '',
      customTime: customTime || '',
      isCustomTime: time === 'custom',
      appointmentDateTime: appointmentDateTime || `${date} ${finalTime || time}`
    });

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

async function sendAppointmentNotification(appointmentData: {
  name: string;
  email: string;
  cellphone: string;
  service: string;
  date: string;
  time: string;
  customTime: string;
  isCustomTime: boolean;
  appointmentDateTime: string;
}) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailAppPassword = process.env.EMAIL_APP_PASSWORD;

    if (!emailUser || !emailAppPassword) {
      console.warn('Email credentials not configured - skipping email notification');
      return;
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailAppPassword
      }
    });

    const displayTime = appointmentData.isCustomTime && appointmentData.customTime
      ? appointmentData.customTime
      : appointmentData.time;

    const appointmentDate = new Date(appointmentData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #e91e63; margin: 0; font-size: 28px;">🦷 Happy Teeth</h1>
            <p style="color: #666; margin: 5px 0 0 0;">New Appointment Request</p>
          </div>

          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0 0 15px 0; font-size: 20px;">Patient Information</h2>
            <table style="width: 100%; border-spacing: 0;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Mobile:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.cellphone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentData.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 8px 0; color: #333;">${appointmentDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold;">Preferred Time:</td>
                <td style="padding: 8px 0; color: #333;">
                  ${displayTime}${appointmentData.isCustomTime ? ' (Custom Time)' : ''}
                </td>
              </tr>
            </table>
          </div>

          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #2196f3;">
            <h3 style="color: #1976d2; margin: 0 0 10px 0; font-size: 16px;">📞 Next Steps</h3>
            <p style="color: #333; margin: 0; line-height: 1.6;">
              Please call <strong>${appointmentData.cellphone}</strong> or email <strong>${appointmentData.email}</strong>
              to confirm the appointment availability and finalize the booking.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              📧 This notification was sent automatically from the Happy Teeth appointment system.<br>
              Check your dashboard at <a href="https://happyteeth.vercel.app/dashboard" style="color: #e91e63;">happyteeth.vercel.app/dashboard</a>
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: emailUser,
      to: 'drcanaresprice@gmail.com',
      subject: `🦷 New Appointment Request - ${appointmentData.name} (${appointmentDate})`,
      html: emailHtml
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment notification email sent successfully');
  } catch (error) {
    console.error('Error sending appointment notification email:', error);
    // Don't throw error to avoid disrupting the appointment saving process
  }
}