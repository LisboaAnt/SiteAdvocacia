'use client'

//Fade
import { Fade } from "react-awesome-reveal"

import HeroImg from '@/components/HeroImg'
import React from 'react'
import EditableText from '@/components/EditableText'
import EditableImage from '@/components/EditableImage'


const About = () => {
  return (
    <section className="pb-12 min-h-screen  xl:py-14 text-white">
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          
            <div className="flex flex-1 xl:flex text-center justify-center p-3 sm:p-0 overflow-hidden ">
                <EditableImage
                  id="about-hero-image"
                  defaultSrc='/Advogada.jpg'
                  alt="Foto da advogada"
                  containerStyles='w-[clamp(150px,30vw,30em)] aspect-square overflow-hidden rounded-sm relative'
                  width={480}
                  height={480}
                  className="object-cover rounded-md"
                />
            </div>
          
          <div className="flex-1">
            <Fade direction="up" delay={400} cascade damping={0.2} triggerOnce={true}>
              <EditableText
                id="about-title"
                defaultValue="Minha Trajetória"
                as="h2"
                className="section-title mb-2 xl:mb-8 mt-4 xl:mt-0 text-center"
              />
            </Fade>
            {/* Content */}
            <div className="text-lg mt-0 xl:mt-3">
              <div className="text-center xl:text-left"> 

                <EditableText
                  id="about-paragraph-1"
                  defaultValue="Conto com mais de <strong>30 anos de experiência</strong> na área jurídica e trabalho no meu próprio escritório desde <strong>2013</strong>.  
                  Desde o início da minha jornada acadêmica, sempre soube que essa seria mais do que uma carreira; seria uma forma de <strong>contribuir para a justiça e o bem-estar da sociedade</strong>."
                  as="p"
                  className="max-w-xl mx-auto xl:mx-0 text-justify"
                  multiline={true}
                  rows={6}
                />

                <EditableText
                  id="about-paragraph-2"
                  defaultValue="Durante minha formação, explorei diversas áreas do Direito, o que me permitiu desenvolver uma <strong>compreensão abrangente</strong> dos desafios e nuances da profissão.  
                  Hoje, mais do que nunca, percebo a necessidade da sociedade de <strong>resolver seus conflitos de forma amigável e pacífica</strong>.  
                  Para atender a essa demanda, estou cursando <strong>pós-graduação</strong> nessa área de resolução de conflitos e, em breve, ofereceremos as <strong>Constelações Familiares Sistêmicas</strong>, que podem ser aplicadas a qualquer processo, situação e conflito."
                  as="p"
                  className="max-w-xl mx-auto xl:mx-0 text-justify"
                  multiline={true}
                  rows={10}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
