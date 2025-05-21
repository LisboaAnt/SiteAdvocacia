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
        <section className="pt-12 max-h-max flex min-h-screen flex-col justify-center items-center">
            <div
                className="fixed left-0 w-full flex flex-col items-center z-50 bg-transparent pointer-events-none"
                style={{ top: '72vh' }}
            >
                <h1 className="lg:text-4xl text-white/60 serlio-font tracking-wider pointer-events-auto text-center px-2">MEROLA DE CARVALHO ADVOCACIA</h1>
                <div className="w-[300px] h-1 bg-white/60 mt-6 rounded-full pointer-events-auto lg:w-[700px] lg:mt-14" />
            </div>
        </section>
    );
};

export default Hero;
