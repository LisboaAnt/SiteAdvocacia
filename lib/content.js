'use client'

import { useState, useEffect } from 'react'

// Função para obter conteúdo da API
export const getContent = async (key, defaultValue) => {
  try {
    console.log(`Buscando conteúdo para a chave: ${key}`)
    const response = await fetch(`/api/content?key=${key}`)
    
    if (!response.ok) {
      throw new Error(`Erro ao buscar conteúdo: ${response.status}`)
    }
    
    const data = await response.json()
    console.log(`Conteúdo recebido para ${key}:`, data.value)
    
    if (data.value !== undefined && data.value !== null) {
      return data.value
    } else {
      console.log(`Usando valor padrão para ${key}:`, defaultValue)
      return defaultValue
    }
  } catch (error) {
    console.error(`Erro ao buscar conteúdo para ${key}:`, error)
    
    // Fallback para localStorage se a API falhar
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(`content_${key}`)
      if (storedValue !== null) {
        try {
          const parsedValue = JSON.parse(storedValue)
          console.log(`Usando localStorage para ${key}:`, parsedValue)
          return parsedValue
        } catch (e) {
          console.error(`Erro ao parsear localStorage para ${key}:`, e)
        }
      }
    }
    
    console.log(`Usando valor padrão para ${key} após erro:`, defaultValue)
    return defaultValue
  }
}

// Função para salvar conteúdo via API
export const setContent = async (key, value) => {
  try {
    console.log(`Salvando conteúdo para a chave: ${key}`, value)
    const response = await fetch('/api/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, value }),
    })
    
    if (!response.ok) {
      throw new Error(`Erro ao salvar conteúdo: ${response.status}`)
    }
    
    const data = await response.json()
    console.log(`Conteúdo salvo com sucesso para ${key}:`, data)
    
    // Também salva no localStorage como backup
    if (typeof window !== 'undefined') {
      localStorage.setItem(`content_${key}`, JSON.stringify(value))
    }
    
    return true
  } catch (error) {
    console.error(`Erro ao salvar conteúdo para ${key}:`, error)
    
    // Fallback para localStorage se a API falhar
    if (typeof window !== 'undefined') {
      localStorage.setItem(`content_${key}`, JSON.stringify(value))
    }
    
    return false
  }
}

// Hook para conteúdo editável
export const useEditableContent = (key, defaultValue) => {
  const [content, setContentState] = useState(defaultValue)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true)
      try {
        const savedContent = await getContent(key, defaultValue)
        console.log(`Hook: Conteúdo carregado para ${key}:`, savedContent)
        setContentState(savedContent)
      } catch (error) {
        console.error(`Hook: Erro ao carregar conteúdo para ${key}:`, error)
        setContentState(defaultValue)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchContent()
  }, [key, defaultValue])

  const updateContent = async (newContent) => {
    try {
      setIsLoading(true)
      setContentState(newContent)
      const success = await setContent(key, newContent)
      if (!success) {
        console.warn(`Falha ao atualizar conteúdo para ${key}, apenas localStorage foi atualizado`)
      }
      setIsEditing(false)
      return success
    } catch (error) {
      console.error(`Erro ao atualizar conteúdo para ${key}:`, error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return {
    content,
    isEditing,
    isLoading,
    setIsEditing,
    updateContent
  }
}

// Hook para verificar se está no modo admin
export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        console.log("Verificando status de administrador...")
        const response = await fetch('/api/auth/status')
        if (response.ok) {
          const data = await response.json()
          console.log("Status de administrador:", data.isAdmin)
          setIsAdmin(data.isAdmin)
        } else {
          console.log("Erro ao verificar status de administrador, usando localStorage")
          // Fallback para localStorage
          const adminStatus = localStorage.getItem('admin_logged_in') === 'true'
          setIsAdmin(adminStatus)
        }
      } catch (error) {
        console.error('Erro ao verificar status de admin:', error)
        // Fallback para localStorage
        const adminStatus = localStorage.getItem('admin_logged_in') === 'true'
        setIsAdmin(adminStatus)
      }
      setIsLoading(false)
    }
    
    checkAdmin()
  }, [])

  return { isAdmin, isLoading }
} 