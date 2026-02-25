import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { appointmentsSupabaseAdmin } from '@/lib/appointmentsSupabase';

function verifyAuth(request: NextRequest): boolean {
  const sessionCookie = request.cookies.get('dashboard-session');
  if (!sessionCookie) return false;

  try {
    // Decode the session token (simple validation - in production use proper JWT)
    const decoded = Buffer.from(sessionCookie.value, 'base64').toString();
    const [username, timestamp] = decoded.split(':');

    // Check if session is valid (within 24 hours)
    const sessionTime = parseInt(timestamp);
    const currentTime = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    return username === (process.env.DASHBOARD_USERNAME || 'happyteeth') &&
           (currentTime - sessionTime) < twentyFourHours;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  // Check authentication
  if (!verifyAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const allSubmissions = [];

    // Fetch from original Supabase (contact submissions)
    if (supabase) {
      try {
        const { data: contactSubmissions, error: contactError } = await supabase
          .from('submissions')
          .select('*')
          .order('created_at', { ascending: false });

        if (contactError) {
          console.error('Original Supabase error:', contactError);
        } else {
          allSubmissions.push(...(contactSubmissions || []));
        }
      } catch (err) {
        console.error('Error fetching from original Supabase:', err);
      }
    }

    // Fetch from appointments Supabase (appointment submissions)
    if (appointmentsSupabaseAdmin) {
      try {
        const { data: appointmentSubmissions, error: appointmentError } = await appointmentsSupabaseAdmin
          .from('submissions')
          .select('*')
          .order('created_at', { ascending: false });

        if (appointmentError) {
          console.error('Appointments Supabase error:', appointmentError);
        } else {
          allSubmissions.push(...(appointmentSubmissions || []));
        }
      } catch (err) {
        console.error('Error fetching from appointments Supabase:', err);
      }
    }

    // Sort all submissions by timestamp/created_at
    allSubmissions.sort((a, b) => {
      const dateA = new Date(a.created_at || a.timestamp);
      const dateB = new Date(b.created_at || b.timestamp);
      return dateB.getTime() - dateA.getTime();
    });

    return NextResponse.json({ submissions: allSubmissions });
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json(
      { error: 'Failed to load submissions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Check authentication
  if (!verifyAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { submissionId, action } = await request.json();

    // Try to update/delete in both databases
    let originalSuccess = false;
    let appointmentsSuccess = false;

    if (action === 'markAsRead') {
      // Try original Supabase first
      if (supabase) {
        const { error: originalError } = await supabase
          .from('submissions')
          .update({ read: true })
          .eq('id', submissionId);

        if (!originalError) {
          originalSuccess = true;
        }
      }

      // Try appointments Supabase
      if (appointmentsSupabaseAdmin) {
        const { error: appointmentError } = await appointmentsSupabaseAdmin
          .from('submissions')
          .update({ read: true })
          .eq('id', submissionId);

        if (!appointmentError) {
          appointmentsSuccess = true;
        }
      }

      if (originalSuccess || appointmentsSuccess) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { error: 'Failed to update submission' },
          { status: 500 }
        );
      }
    }

    if (action === 'delete') {
      // Try original Supabase first
      if (supabase) {
        const { error: originalError } = await supabase
          .from('submissions')
          .delete()
          .eq('id', submissionId);

        if (!originalError) {
          originalSuccess = true;
        }
      }

      // Try appointments Supabase
      if (appointmentsSupabaseAdmin) {
        const { error: appointmentError } = await appointmentsSupabaseAdmin
          .from('submissions')
          .delete()
          .eq('id', submissionId);

        if (!appointmentError) {
          appointmentsSuccess = true;
        }
      }

      if (originalSuccess || appointmentsSuccess) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { error: 'Failed to delete submission' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: 'Failed to update submission' },
      { status: 500 }
    );
  }
}