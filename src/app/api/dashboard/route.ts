import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'submissions.json');

    // Return empty array if no submissions exist yet
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ submissions: [] });
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const submissions = JSON.parse(fileContent);

    return NextResponse.json({ submissions });
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

    if (action === 'markAsRead') {
      const dataDir = path.join(process.cwd(), 'data');
      const filePath = path.join(dataDir, 'submissions.json');

      if (!fs.existsSync(filePath)) {
        return NextResponse.json(
          { error: 'No submissions found' },
          { status: 404 }
        );
      }

      const fileContent = fs.readFileSync(filePath, 'utf8');
      const submissions = JSON.parse(fileContent);

      // Find and update the submission
      const submissionIndex = submissions.findIndex((sub: { id: string }) => sub.id === submissionId);
      if (submissionIndex !== -1) {
        submissions[submissionIndex].read = true;
        fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { error: 'Submission not found' },
          { status: 404 }
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