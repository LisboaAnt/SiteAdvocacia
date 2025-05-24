import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = cookies()
  
  // Remove o cookie de autenticação
  cookieStore.delete('admin_logged_in')
  
  return NextResponse.json({ success: true })
} 