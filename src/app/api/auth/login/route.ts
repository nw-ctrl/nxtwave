import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Demo credentials validation
    if (email === 'demo@nextwave.au' && password === 'demo123') {
      return NextResponse.json({
        token: 'demo-token-' + Date.now(),
        name: 'Demo User',
        email: email,
      });
    }

    // Invalid credentials
    return NextResponse.json(
      { message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}
