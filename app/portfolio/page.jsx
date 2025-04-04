'use client'

//Fade
import { Fade } from "react-awesome-reveal"

import { motion } from 'framer-motion';

import React, { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'

const projectData = [
  {
      image: '/work/3.png',
      category: 'Portraits',
      name: "Portrait: MacrofAlLian",
      description:  "Shoot Date: 08/01/2024",
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/9.png',
      category: 'Portraits',
      name: "Portrait: MacrofAlLian",
      description:  "Shoot Date: 11/01/2017",
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/2.png',
      category: 'Products',
      name: 'Product: Cosmetics',
      description: 'Shoot Date: 14/01/2018',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/1.png',
      category: 'Portraits',
      name: 'Portrait: Lucy Aln',
      description: 'Shoot Date: 16/07/2023',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/8.png',
      category: 'Fashion',
      name: 'Fashion: Edu',
      description: 'Shoot Date: 16/07/2021',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/9.png',
      category: 'Fashion',
      name: 'Fashion: Jony',
      description: 'Shoot Date: 06/05/2022',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/5.png',
      category: 'Portraits',
      name: 'Portrait: Elsa Liv',
      description: 'Shoot Date: 09/03/2024',
      link: '/',
      codepen: '/',
  },
  {
      image: '/work/11.png',
      category: 'Fashion',
      name: 'Fashion: Adam',
      description: 'Shoot Date: 13/02/2021',
      link: '/',
      codepen: '/',
  }
]

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
]

const portfolio = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
    ? project
    : project.category === category
  })

  return (
    <section className="min-h-screen pt-12 pb-1">
      <div className="container mx-auto">
        <Fade direction="up" delay={0} cascade damping={0.5} triggerOnce={true}>
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Portfolio
          </h2>
        </Fade>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-36">

        <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
          {categories.map((categor, index) => {
            const isActive = categor === category; // Supondo que você tenha `selectedCategory` para verificar o estado ativo
            return (
              <div key={index} className="relative capitalize w-[162px] md:w-auto">
                <TabsTrigger
                  value={categor}
                  onClick={() => setCategory(categor)}
                  className="capitalize w-full relative z-10" 
                >
                  {categor}
                </TabsTrigger>

                {isActive && (
                  <motion.span
                    initial={{ y: '-100%' }}  // Começa fora da visualização
                    animate={{ y: 0 }}        // Anima para sua posição final
                    transition={{ type: 'tween' }}
                    layoutId="underline-projects"
                    className="absolute left-0 right-0 bg-primary bottom-0 px-3 h-[48px] rounded-full z-0"
                  />
                )}
              </div>
            );
          })}
        </TabsList>

          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Fade direction="up" delay={0} cascade damping={0.1} triggerOnce={true}>
              {
                filteredProjects.map((project, index) => {
                  return(
                    <TabsContent value={category} key={index}>
                      <ProjectCard project={project}/>
                    </TabsContent>
                  )
                })
              }
            </Fade>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default portfolio
