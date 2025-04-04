'use client'

//Fade
import { Fade } from "react-awesome-reveal"

import HeroImg from '@/components/HeroImg'
import React from 'react'
import { RiRidingFill, RiUserHeartFill, RiStarHalfSLine, RiVidiconFill, RiVipCrown2Fill, RiSendPlaneFill } from 'react-icons/ri'

const infoData =[
  {
    icon: <RiUserHeartFill size={20}/>,
    text: 'Mrs Smith',
  },
  {
    icon: <RiSendPlaneFill size={20}/>,
    text: '+55 69 992410109',
  },
  {
    icon: <RiVidiconFill size={20}/>,
    text: 'photography@gmail.com',
  },
  {
    icon: <RiStarHalfSLine size={20}/>,
    text: 'Born on 23 Jan, 2000',
  },
  {
    icon: <RiRidingFill size={20}/>,
    text: '22, Ella Statu, Texas, Us',
  },
]

const About = () => {
  return (
    <section className="pb-12 min-h-screen  xl:py-14">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          
            <div className="flex flex-1 xl:flex text-center justify-center min-w-max p-3 sm:p-0">
                <HeroImg
                containerStyles='w-[clamp(150px,30vw,30em)] aspect-[1280/1479] overflow-hidden rounded-md relative'
                imgSrc='/Advogada.jpg'
                />
            </div>
          
          <div className="flex-1">
            <Fade direction="up" delay={400} cascade damping={0.2} triggerOnce={true}>
              <h2 className="section-title mb-2 xl:mb-8 mt-4 xl:mt-0 text-center">Minha Trajetória</h2>
            </Fade>
            {/* Content */}
            <div className="text-lg mt-0 xl:mt-3">
              <div className="text-center xl:text-left"> 
                <p className="max-w-xl mx-auto xl:mx-0 text-justify">
                  Tudo começou quando tinha apenas <strong>19 anos</strong> e fui trabalhar em um escritório de advocacia. Lá, me apaixonei pelo Direito e descobri minha vocação.  
                  Após iniciar a faculdade, já comecei a atender clientes, escrever peças processuais e estagiar, inclusive assistindo audiências, fazendo acompanhamento processual e demais atribuições inerentes à área jurídica.  
                </p>

                <p className="max-w-xl mx-auto xl:mx-0 text-justify">
                  Hoje, conto com mais de <strong>30 anos de experiência</strong> na área jurídica e trabalho no meu próprio escritório desde <strong>2013</strong>.  
                  Desde o início da minha jornada acadêmica, sempre soube que essa seria mais do que uma carreira; seria uma forma de <strong>contribuir para a justiça e o bem-estar da sociedade</strong>.  
                </p>

                <p className="max-w-xl mx-auto xl:mx-0 text-justify">
                  Durante minha formação, explorei diversas áreas do Direito, o que me permitiu desenvolver uma <strong>compreensão abrangente</strong> dos desafios e nuances da profissão.  
                  Hoje, mais do que nunca, percebo a necessidade da sociedade de <strong>resolver seus conflitos de forma amigável e pacífica</strong>.  
                  Para atender a essa demanda, estou cursando <strong>pós-graduação</strong> nessa área de resolução de conflitos e, em breve, ofereceremos as <strong>Constelações Familiares Sistêmicas</strong>, que podem ser aplicadas a qualquer processo, situação e conflito.  
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
