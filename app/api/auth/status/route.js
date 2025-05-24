import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const adminCookie = cookieStore.get('admin_logged_in')
  
  return NextResponse.json({
    isAdmin: adminCookie?.value === 'true'
  })
} 