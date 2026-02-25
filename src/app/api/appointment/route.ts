import { NextRequest, NextResponse } from 'next/server';
import { appointmentsSupabase } from '@/lib/appointmentsSupabase';

export async function POST(request: NextRequest) {
  try {
    const { name, cellphone, service, date, time, customTime, finalTime, appointmentDateTime } = await request.json();

    if (!name || !cellphone || !service || !date) {
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

    // Email functionality disabled for now - data is saved to database

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