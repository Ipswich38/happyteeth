import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { name, cellphone, service, date } = await request.json();

    if (!name || !cellphone || !service || !date) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Store the submission in Supabase if available
    if (supabase) {
      const submission = {
        id: Date.now().toString(),
        type: 'appointment' as const,
        name,
        cellphone,
        service,
        date,
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
    } else {
      console.warn('Supabase not configured - skipping database storage');
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