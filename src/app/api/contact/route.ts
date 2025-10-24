import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Store the submission in Supabase if available
    if (supabase) {
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
    } else {
      console.warn('Supabase not configured - skipping database storage');
    }

    // Email functionality disabled for now - data is saved to database

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