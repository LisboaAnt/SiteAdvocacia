'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useEditableContent } from '@/lib/content'
import { useAdmin } from '@/lib/content'
import { Button } from '@/components/ui/button'

const EditableImage = ({ 
  id, 
  defaultSrc, 
  alt = '', 
  width = 0,
  height = 0,
  className = '',
  containerClassName = '',
  ...props 
}) => {
  const { content: src, isEditing, isLoading, setIsEditing, updateContent } = useEditableContent(id, defaultSrc)
  const { isAdmin } = useAdmin()
  const [preview, setPreview] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [initializedContent, setInitializedContent] = useState(false)
  const fileInputRef = useRef(null)
  
  // Atualiza a pré-visualização quando o src muda
  useEffect(() => {
    console.log(`EditableImage[${id}] - Conteúdo de imagem atualizado:`, src)
    if (src) {
      setPreview(src)
      setInitializedContent(true)
    }
  }, [src, id])

  const handleEdit = () => {
    console.log(`EditableImage[${id}] - Iniciando edição`)
    setIsEditing(true)
    setError('')
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      console.log(`EditableImage[${id}] - Arquivo selecionado:`, file.name, `(${file.size} bytes)`)
      
      // Verifica o tamanho do arquivo (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        console.log(`EditableImage[${id}] - Arquivo muito grande:`, file.size)
        setError('Arquivo muito grande. Tamanho máximo: 5MB')
        return
      }
      
      const reader = new FileReader()
      
      reader.onloadend = () => {
        console.log(`EditableImage[${id}] - Arquivo carregado na prévia`)
        setPreview(reader.result)
        setError('')
      }
      
      reader.onerror = () => {
        console.error(`EditableImage[${id}] - Erro ao ler o arquivo`)
        setError('Erro ao ler o arquivo')
      }
      
      reader.readAsDataURL(file)
    }
  }

  const handleSave = async () => {
    console.log(`EditableImage[${id}] - Salvando imagem`)
    setIsSaving(true)
    setError('')
    
    try {
      await updateContent(preview)
      console.log(`EditableImage[${id}] - Imagem salva com sucesso`)
    } catch (error) {
      console.error(`EditableImage[${id}] - Erro ao salvar imagem:`, error)
      setError('Erro ao salvar. Tente novamente.')
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    console.log(`EditableImage[${id}] - Cancelando edição`)
    setIsEditing(false)
    setPreview(src)
    setError('')
  }
  
  // Mostra um estado de carregamento enquanto o conteúdo está sendo inicializado
  if (isLoading || !initializedContent) {
    return (
      <div className={`animate-pulse bg-gray-200 rounded ${containerClassName}`} style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}></div>
    )
  }

  if (isEditing && isAdmin) {
    return (
      <div className="relative border border-gray-300 rounded-md p-4 bg-white/90">
        {error && (
          <div className="mb-4 text-red-500 text-sm">{error}</div>
        )}
        
        <div className="flex flex-col items-center">
          {preview && (
            <div className="mb-4">
              <Image
                src={preview}
                alt={alt}
                width={width || 200}
                height={height || 200}
                className="object-contain"
              />
            </div>
          )}
          
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="mb-4"
            disabled={isSaving}
          />
          
          <div className="flex justify-center gap-2">
            <Button 
              onClick={handleSave} 
              className="bg-green-600 hover:bg-green-700 px-3 py-1 text-white"
              disabled={isSaving}
            >
              {isSaving ? 'Salvando...' : 'Salvar'}
            </Button>
            <Button 
              onClick={handleCancel} 
              className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white"
              disabled={isSaving}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`group relative ${containerClassName}`}>
      <Image 
        src={src} 
        alt={alt} 
        width={width}
        height={height}
        className={className}
        {...props}
      />
      {isAdmin && (
        <button
          onClick={handleEdit}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-full transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Z" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default EditableImage 