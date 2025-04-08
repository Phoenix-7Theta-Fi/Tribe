import { NextResponse } from 'next/server';
import { connectToDb } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const db = await connectToDb();
    
    // Find user
    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Login successful' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 });
  }
}
