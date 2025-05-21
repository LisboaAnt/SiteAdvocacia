'use client'

import { useState, useEffect } from 'react'
import { useEditableContent } from '@/lib/content'
import { useAdmin } from '@/lib/content'
import { Button } from '@/components/ui/button'

const EditableText = ({ 
  id, 
  defaultValue, 
  as: Component = 'p', 
  className = '', 
  multiline = false,
  rows = 3,
  ...props 
}) => {
  const { content, isEditing, isLoading, setIsEditing, updateContent } = useEditableContent(id, defaultValue)
  const { isAdmin } = useAdmin()
  const [editContent, setEditContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [initializedContent, setInitializedContent] = useState(false)

  // Atualiza o conteúdo de edição quando o conteúdo carregado muda
  useEffect(() => {
    console.log(`EditableText[${id}] - Conteúdo atualizado:`, content)
    if (content) {
      setEditContent(content)
      setInitializedContent(true)
    }
  }, [content, id])

  const handleEdit = () => {
    console.log(`EditableText[${id}] - Iniciando edição`)
    setIsEditing(true)
    setEditContent(content)
    setError('')
  }

  const handleSave = async () => {
    console.log(`EditableText[${id}] - Salvando conteúdo:`, editContent)
    setIsSaving(true)
    setError('')
    
    try {
      await updateContent(editContent)
      console.log(`EditableText[${id}] - Conteúdo salvo com sucesso`)
    } catch (error) {
      console.error(`EditableText[${id}] - Erro ao salvar conteúdo:`, error)
      setError('Erro ao salvar. Tente novamente.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    console.log(`EditableText[${id}] - Cancelando edição`)
    setIsEditing(false)
    setEditContent(content)
    setError('')
  }

  // Mostra um estado de carregamento enquanto o conteúdo está sendo inicializado
  if (isLoading || !initializedContent) {
    return (
      <div className="animate-pulse bg-gray-200 rounded h-6 w-full"></div>
    )
  }

  if (isEditing && isAdmin) {
    return (
      <div className="relative border border-gray-300 rounded-md p-2 bg-white/90">
        {error && (
          <div className="mb-2 text-red-500 text-sm">{error}</div>
        )}
        
        {multiline ? (
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 text-gray-800 bg-transparent outline-none resize-y"
            rows={rows}
            disabled={isSaving}
          />
        ) : (
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full p-2 text-gray-800 bg-transparent outline-none"
            disabled={isSaving}
          />
        )}
        <div className="flex justify-end gap-2 mt-2">
          <Button 
            onClick={handleSave} 
            className="bg-green-600 hover:bg-green-700 px-3 py-1 text-white text-sm"
            disabled={isSaving}
          >
            {isSaving ? 'Salvando...' : 'Salvar'}
          </Button>
          <Button 
            onClick={handleCancel} 
            className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white text-sm"
            disabled={isSaving}
          >
            Cancelar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative">
      <Component 
        className={className} 
        {...props}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isAdmin && (
        <button
          onClick={handleEdit}
          className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-full transition-opacity"
          style={{ transform: 'translate(50%, -50%)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Z" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default EditableText 