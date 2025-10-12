import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Check credentials against environment variables
    const validUsername = process.env.DASHBOARD_USERNAME || 'happyteeth';
    const validPassword = process.env.DASHBOARD_PASSWORD || '272829';

    if (username === validUsername && password === validPassword) {
      // Create a simple session token (in production, use proper JWT)
      const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64');

      const response = NextResponse.json({ success: true });

      // Set HTTP-only cookie for security
      response.cookies.set('dashboard-session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/'
      });

      return response;
    } else {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  // Logout - clear the session cookie
  const response = NextResponse.json({ success: true });
  response.cookies.delete('dashboard-session');
  return response;
}