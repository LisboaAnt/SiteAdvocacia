'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [contentKeys, setContentKeys] = useState([])
  const router = useRouter()

  useEffect(() => {
    // Verifica se o usuário está logado como admin
    const checkAdmin = async () => {
      try {
        const response = await fetch('/api/auth/status')
        if (response.ok) {
          const data = await response.json()
          
          if (!data.isAdmin) {
            router.push('/admin/login')
            return
          }
          
          setIsAdmin(true)
          
          // Atualiza também o localStorage como backup
          localStorage.setItem('admin_logged_in', 'true')
          
          // Obtém a lista de chaves de conteúdo do servidor
          try {
            const contentResponse = await fetch('/api/content/keys')
            if (contentResponse.ok) {
              const contentData = await contentResponse.json()
              setContentKeys(contentData.keys || [])
            }
          } catch (contentError) {
            console.error('Erro ao obter chaves de conteúdo:', contentError)
          }
        } else {
          // Fallback para localStorage
          const adminLoggedIn = localStorage.getItem('admin_logged_in') === 'true'
          
          if (!adminLoggedIn) {
            router.push('/admin/login')
            return
          }
          
          setIsAdmin(true)
        }
      } catch (error) {
        console.error('Erro ao verificar status admin:', error)
        // Fallback para localStorage
        const adminLoggedIn = localStorage.getItem('admin_logged_in') === 'true'
        
        if (!adminLoggedIn) {
          router.push('/admin/login')
          return
        }
        
        setIsAdmin(true)
      } finally {
        setIsLoading(false)
      }
    }
    
    checkAdmin()
  }, [router])

  const handleLogout = async () => {
    setIsLoading(true)
    
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      localStorage.removeItem('admin_logged_in')
      router.push('/admin/login')
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      // Fallback para localStorage
      localStorage.removeItem('admin_logged_in')
      router.push('/admin/login')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-white">Carregando...</p>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-ring shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Painel Administrativo</h1>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            className="bg-white text-primary hover:bg-gray-700 text-black"
          >
            Sair
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 text-black">Modo de Edição</h2>
          <p className="mb-4 text-black">
            Para editar textos e imagens no site, clique em um dos links abaixo para navegar até a página desejada.
            Quando estiver na página, você verá botões de edição ao passar o mouse sobre textos e imagens. 
            Clique nesses botões para editar o conteúdo.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <p className="text-green-700">
              <strong>Nota:</strong> Todas as alterações agora são salvas no servidor e permanecerão mesmo após fechar o navegador.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-black">Páginas para Editar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Página Inicial', path: '/' },
                { title: 'Sobre Nós', path: '/about' },
                { title: 'Serviços', path: '/services' },
                { title: 'Contato', path: '/contact' },
              ].map((page) => (
                <Link 
                  key={page.path} 
                  href={page.path}
                  className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors text-center text-black"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
          
          {contentKeys.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-black">Conteúdo Editado</h2>
              <div className="max-h-80 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contentKeys.map((key) => (
                      <tr key={key}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{key}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {key.includes('image') ? 'Imagem' : 'Texto'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel 