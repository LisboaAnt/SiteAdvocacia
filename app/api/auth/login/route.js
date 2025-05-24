import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
  try {
    const { username, password } = await request.json()
    
    // Autenticação simples - na vida real, isso deveria ser mais seguro
    if (username === 'elaine' && password === 'elaine') {
      const cookieStore = cookies()
      
      // Define o cookie de autenticação
      cookieStore.set('admin_logged_in', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/'
      })
      
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Usuário ou senha incorretos' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Erro na requisição de login:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 