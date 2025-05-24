import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Caminho para o arquivo JSON de conteúdo
const contentFilePath = path.join(process.cwd(), 'data', 'content.json')

// Função para garantir que o arquivo e diretório existam
const ensureFileExists = () => {
  try {
    const dir = path.dirname(contentFilePath)
    
    // Cria o diretório se não existir
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    // Cria o arquivo se não existir
    if (!fs.existsSync(contentFilePath)) {
      fs.writeFileSync(contentFilePath, JSON.stringify({}, null, 2), 'utf-8')
    }
    
    return true
  } catch (error) {
    console.error("Erro ao garantir existência do arquivo:", error)
    return false
  }
}

// Função para ler o conteúdo do arquivo
const readContentFile = () => {
  try {
    ensureFileExists()
    
    const fileContent = fs.readFileSync(contentFilePath, 'utf-8')
    
    try {
      const parsed = JSON.parse(fileContent)
      console.log("Conteúdo lido com sucesso, chaves:", Object.keys(parsed).length)
      return parsed
    } catch (parseError) {
      console.error("Erro ao parsear arquivo JSON:", parseError)
      return {}
    }
  } catch (error) {
    console.error('Erro ao ler arquivo de conteúdo:', error)
    return {}
  }
}

// Função para escrever no arquivo de conteúdo
const writeContentFile = (content) => {
  try {
    ensureFileExists()
    fs.writeFileSync(contentFilePath, JSON.stringify(content, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Erro ao escrever arquivo de conteúdo:', error)
    return false
  }
}

// Rota GET para buscar conteúdo
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    
    
    if (!key) {
      console.log("API GET - Erro: Chave não fornecida")
      return NextResponse.json(
        { error: 'Parâmetro key é obrigatório' },
        { status: 400 }
      )
    }
    
    const content = readContentFile()
    const value = content[key]
    
    return NextResponse.json({
      key,
      value: value !== undefined ? value : null
    })
  } catch (error) {
    console.error("API GET - Erro não tratado:", error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Rota POST para salvar conteúdo
export async function POST(request) {
  try {
    const { key, value } = await request.json()
    
    
    if (!key) {
      console.log("API POST - Erro: Chave não fornecida")
      return NextResponse.json(
        { error: 'Parâmetro key é obrigatório' },
        { status: 400 }
      )
    }
    
    const content = readContentFile()
    content[key] = value
    
    const success = writeContentFile(content)
    
    if (success) {
      return NextResponse.json({ success: true, key, value })
    } else {
      console.log(`API POST - Erro ao salvar conteúdo para chave ${key}`)
      return NextResponse.json(
        { error: 'Erro ao salvar conteúdo' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API POST - Erro não tratado:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
} 