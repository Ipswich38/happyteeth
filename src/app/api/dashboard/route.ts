import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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
    if (!supabase) {
      return NextResponse.json({
        submissions: [],
        message: 'Database not configured'
      });
    }

    const { data: submissions, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to load submissions' },
        { status: 500 }
      );
    }

    return NextResponse.json({ submissions: submissions || [] });
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
    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    const { submissionId, action } = await request.json();

    if (action === 'markAsRead') {
      const { error } = await supabase
        .from('submissions')
        .update({ read: true })
        .eq('id', submissionId);

      if (error) {
        console.error('Supabase update error:', error);
        return NextResponse.json(
          { error: 'Failed to update submission' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
    }

    if (action === 'delete') {
      const { error } = await supabase
        .from('submissions')
        .delete()
        .eq('id', submissionId);

      if (error) {
        console.error('Supabase delete error:', error);
        return NextResponse.json(
          { error: 'Failed to delete submission' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true });
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