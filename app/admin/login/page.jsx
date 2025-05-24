'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  // Função para disparar evento customizado após login
  const triggerAdminBarUpdate = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('admin-login-status'))
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        // Armazena o estado de login também no localStorage como backup
        localStorage.setItem('admin_logged_in', 'true')
        triggerAdminBarUpdate()
        // Redireciona para o painel
        router.push('/admin/panel')
      } else {
        setError(data.error || 'Erro durante o login')
      }
    } catch (error) {
      console.error('Erro durante o login:', error)
      setError('Erro ao conectar ao servidor')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  from-primary to-primary-foreground p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Painel Administrativo</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-gray-100"
              required
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary bg-gray-100"
              required
              disabled={isLoading}
            />
          </div>
          
          <div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage 