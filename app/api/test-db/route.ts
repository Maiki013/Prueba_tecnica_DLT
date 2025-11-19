import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows]: any = await pool.query('SELECT NOW() as now');
    return NextResponse.json({ 
      success: true, 
      time: rows[0].now 
    });
  } catch (error) {
    console.error('Error de BD:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Error conectando a la BD' 
    }, { status: 500 });
  }
}