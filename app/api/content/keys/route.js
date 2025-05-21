import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Caminho para o arquivo JSON de conteúdo
const contentFilePath = path.join(process.cwd(), 'data', 'content.json')

// Função para ler o conteúdo do arquivo
const readContentFile = () => {
  try {
    console.log("Verificando arquivo de conteúdo:", contentFilePath)
    
    if (fs.existsSync(contentFilePath)) {
      console.log("Lendo arquivo de conteúdo para listar chaves")
      const fileContent = fs.readFileSync(contentFilePath, 'utf-8')
      
      try {
        const parsed = JSON.parse(fileContent)
        console.log("Conteúdo lido com sucesso, total de chaves:", Object.keys(parsed).length)
        return parsed
      } catch (parseError) {
        console.error("Erro ao parsear arquivo JSON:", parseError)
        return {}
      }
    }
    
    console.log("Arquivo de conteúdo não encontrado")
    return {}
  } catch (error) {
    console.error('Erro ao ler arquivo de conteúdo:', error)
    return {}
  }
}

export async function GET() {
  try {
    console.log("API KEYS - Buscando todas as chaves de conteúdo")
    const content = readContentFile()
    const keys = Object.keys(content)
    
    console.log(`API KEYS - Total de ${keys.length} chaves encontradas`)
    
    return NextResponse.json({
      keys,
      count: keys.length
    })
  } catch (error) {
    console.error("API KEYS - Erro não tratado:", error)
    return NextResponse.json(
      { error: 'Erro interno do servidor', keys: [] },
      { status: 500 }
    )
  }
} 