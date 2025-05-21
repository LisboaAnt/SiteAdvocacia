'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AdminBar = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Função para checar status admin
    const checkAdmin = async () => {
      try {
        const response = await fetch('/api/auth/status')
        if (response.ok) {
          const data = await response.json()
          setIsAdmin(data.isAdmin)
          localStorage.setItem('admin_logged_in', data.isAdmin ? 'true' : 'false')
        } else {
          const adminStatus = localStorage.getItem('admin_logged_in') === 'true'
          setIsAdmin(adminStatus)
        }
      } catch (error) {
        const adminStatus = localStorage.getItem('admin_logged_in') === 'true'
        setIsAdmin(adminStatus)
      } finally {
        setIsLoading(false)
      }
    }

    checkAdmin()

    // Listener para mudanças no localStorage e evento customizado
    const handleStorageChange = (e) => {
      if (e.key === 'admin_logged_in') {
        setIsAdmin(e.newValue === 'true')
      }
    }
    const handleCustomEvent = () => {
      checkAdmin()
    }
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('admin-login-status', handleCustomEvent)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('admin-login-status', handleCustomEvent)
    }
  }, [])

  // Função para disparar evento customizado após login/logout
  const triggerAdminBarUpdate = () => {
    window.dispatchEvent(new Event('admin-login-status'))
  }

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      localStorage.removeItem('admin_logged_in')
      setIsAdmin(false)
      triggerAdminBarUpdate()
      router.push('/admin/login')
    } catch (error) {
      localStorage.removeItem('admin_logged_in')
      setIsAdmin(false)
      triggerAdminBarUpdate()
      router.push('/admin/login')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading || !isAdmin) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-medium">Modo de Edição Ativo</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/admin/panel">
            <Button variant="outline" size="sm" className="text-black border-white hover:bg-gray-700">
              Painel
            </Button>
          </Link>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            size="sm"
            className="text-black border-white hover:bg-gray-700"
            disabled={isLoading}
          >
            {isLoading ? 'Saindo...' : 'Sair'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AdminBar 