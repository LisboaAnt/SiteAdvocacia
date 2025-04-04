'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

// React Awesome Reveal Animation
import { Fade } from 'react-awesome-reveal';

// React Icons
import { RiScales3Fill, RiUserHeartFill, RiTeamFill, RiFileList3Fill } from 'react-icons/ri';

// Import Components
import Socials from './Socials';
import HeroImg from './HeroImg';
import Badge from './Badge';

// Intersection Observer
import { useInView } from 'react-intersection-observer';

const Hero = () => {

    const { ref: badgeSectionRef, inView: badgeSectionInView } = useInView({
    triggerOnce: true, // Carrega apenas uma vez quando entra na tela
    threshold: 0.5,    // Carrega quando 50% da seção estiver visível
    });

    return (
    <section className="pt-12 max-h-max  flex min-h-screen flex-col">
        <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8 items-center">
            {/* Left side */}
            <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Escritório de Advocacia
                </div>
            </Fade>

            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                <h1 className="h1 text-4xl md:text-5xl xl:text-6xl font-bold mb-4">Elaine Merola de Carvalho</h1>
            </Fade>

            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
                <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0 text-lg text-gray-600">
                Advocacia especializada em Direito Previdenciário, Civil, Trabalhista, Penal e Família. 
                Atendimento humanizado e personalizado para garantir seus direitos com excelência e dedicação.
                </p>
            </Fade>

            <Fade direction="up" delay={1000} cascade damping={1e-1} triggerOnce={true}>
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 mx-auto xl:mx-0 mb-12 mt-6">
                    <Link href="/contact">
                        <Button className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-white">
                            Agende uma Consulta
                        </Button>
                    </Link>
                    <Link href="/pricing">
                        <Button variant="outline" className="w-full sm:w-auto">
                            Nossos Serviços
                        </Button>
                    </Link>
                </div>
            </Fade>
            </div>
        </div>
        </div>
    </section>
    );
};

export default Hero;
