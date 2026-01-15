'use client'

//Fade
import { Fade } from "react-awesome-reveal"

import HeroImg from '@/components/HeroImg'
import React from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <section className="pb-12 min-h-screen  xl:py-14 text-white">
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
                  Conto com mais de 30 anos de experiência na área jurídica e trabalho no meu próprio escritório desde 2013. Desde o início da minha jornada acadêmica, sempre soube que essa seria mais do que uma carreira; seria uma forma de contribuir para a justiça e o bem-estar da sociedade.
                </p>

                <p className="max-w-xl mx-auto xl:mx-0 text-justify">
                  Durante minha formação, explorei diversas áreas do Direito, o que me permitiu desenvolver uma compreensão abrangente dos desafios e nuances da profissão. Hoje, mais do que nunca, percebo a necessidade da sociedade de resolver seus conflitos de forma amigável e pacífica. Para atender a essa demanda, estou cursando pós-graduação nessa área de resolução de conflitos.
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
