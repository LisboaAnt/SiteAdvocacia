'use client'

//Fade
import { Fade } from "react-awesome-reveal"

import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/button'

//Tpast Message
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import Link from "next/link"

const areasJuridicas = [
  {
    titulo: 'Direito Previdenciário',
    descricao: 'Planejamos e acompanhamos toda a sua jornada previdenciária',
    servicos: [
      'Cálculo e planejamento da aposentadoria',
      'Revisão de benefícios',
      'Processos administrativos e judiciais junto ao INSS',
      'Aposentadorias especiais'
    ]
  },
  {
    titulo: 'Direito Civil',
    descricao: 'Oferecemos suporte jurídico nas suas relações civis e patrimoniais',
    servicos: [
      'Elaboração e análise de contratos',
      'Assessoria em responsabilidade civil',
      'Planejamento e resolução de questões sucessórias',
      'Análise de contratos e documentos'
    ]
  },
  {
    titulo: 'Direito do Trabalho',
    descricao: 'Atuamos em favor de empregadores e empregados, com foco em soluções assertivas',
    servicos: [
      'Reclamações e defesas trabalhistas',
      'Rescisões e cálculos rescisórios',
      'Análise de contratos de trabalho',
      'Negociações extrajudiciais'
    ]
  },
  {
    titulo: 'Direito Penal',
    descricao: 'Garantimos a sua ampla defesa em todas as fases do processo criminal',
    servicos: [
      'Acompanhamento de inquéritos policiais',
      'Defesa em processos criminais',
      'Crimes contra a honra e patrimônio',
      'Pedido de liberdade e habeas corpus'
    ]
  },
  {
    titulo: 'Direito de Família',
    descricao: 'Cuidamos de questões familiares com sensibilidade e empatia',
    servicos: [
      'Divórcios consensuais e litigiosos',
      'Guarda de filhos e visitas',
      'Pensão alimentícia',
      'Mediação de conflitos familiares'
    ]
  }
]

const services = () => {
  const {toast} = useToast()
  return (
    <section className="min-h-screen pt-12 pb-10 ">
      <div className="container mx-auto px-4">
      
      <div className="flex justify-center text-center">
        <h2 className="section-title text-white mb-8 xl:mb-16 break-words whitespace-normal max-w-xl text-balance">
          Nossos Serviços Jurídicos
        </h2>
      </div>


        <div className="mx-auto max-w-3xl mb-16 text-center">
          <Fade direction="up" delay={0} cascade damping={0.1} triggerOnce={true}>
            <p className="text-lg leading-8 text-gray-100">
              Na busca por justiça e segurança jurídica, oferecemos uma atuação completa, 
              eficiente e personalizada, sempre focada nas suas necessidades. Nossa equipe 
              está pronta para orientá-lo com clareza e comprometimento.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasJuridicas.map((area, index) => (
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-foreground mb-4">{area.titulo}</h3>
                  <p className="text-gray-600 mb-6">{area.descricao}</p>
                  <ul className="space-y-3">
                    {area.servicos.map((servico) => (
                      <li key={servico} className="flex items-start gap-x-3">
                        <CheckIcon className="h-5 w-5 flex-none text-primary mt-1" />
                        <span className="text-gray-600">{servico}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Agendar Consulta
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default services
