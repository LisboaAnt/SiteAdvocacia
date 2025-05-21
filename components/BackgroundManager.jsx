'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Ordem das páginas no menu, para determinar direção da animação
const pageOrder = ['/', '/about', '/services', '/contact'];

const BackgroundManager = () => {
  const pathname = usePathname();
  const previousPathRef = useRef(pathname);
  const isFirstLoad = useRef(true);
  const [backgrounds, setBackgrounds] = useState({
    current: '/imgs/bg-texture.png',
    previous: null,
    direction: 1 // 1 para slide da direita, -1 para slide da esquerda
  });
  
  useEffect(() => {
    // Pequeno timeout para garantir que tudo esteja carregado
    const timer = setTimeout(() => {
      isFirstLoad.current = false;
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Se o pathname mudou
    if (pathname !== previousPathRef.current) {
      // Altera o fundo baseado na rota atual
      const newBg = pathname === '/services' ? '/imgs/servicos-fundo.jpg' : '/imgs/bg-texture.png';
      
      // Determina a direção do slide baseada na ordem do menu
      let direction = 1; // padrão: direita para esquerda
      
      const currentIndex = pageOrder.indexOf(pathname);
      const previousIndex = pageOrder.indexOf(previousPathRef.current);
      
      if (currentIndex !== -1 && previousIndex !== -1) {
        if (previousPathRef.current === '/services' && pathname === '/contact') {
          direction = 1; // Da esquerda para direita
        }
        else if (previousPathRef.current === '/contact' && pathname === '/services') {
          direction = -1; // Da direita para esquerda
        }
        else {
          direction = currentIndex > previousIndex ? 1 : -1;
        }
      }
      
      // Só atualiza se o fundo for diferente
      if (newBg !== backgrounds.current) {
        setBackgrounds(prev => ({
          current: newBg,
          previous: isFirstLoad.current ? null : prev.current, // Não guarda o anterior se for primeira carga
          direction: direction
        }));
      }
      
      // Atualiza a referência da rota anterior
      previousPathRef.current = pathname;
    }
  }, [pathname, backgrounds.current]);

  // CSS comum para os fundos
  const backgroundStyles = (imagePath) => ({
    backgroundImage: `
      linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      linear-gradient(to bottom, rgba(155, 055, 055, 0.1), rgba(200, 100, 100, 0.1)),  
      url("${imagePath}")
    `,  
    backgroundRepeat: 'no-repeat',                     
    backgroundSize: 'cover',                 
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    filter: 'blur(0px)',
    transform: 'scale(1.05)',
  });

  return (
    <>
      {/* Fundo atual */}
      {backgrounds.current && (
        <motion.div 
          key={`current-${backgrounds.current}`}
          className="fixed inset-0 -z-50"
          initial={isFirstLoad.current ? { x: 0 } : { x: backgrounds.direction * 100 + '%' }}
          animate={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
          style={backgroundStyles(backgrounds.current)}
        />
      )}
      
      {/* Fundo anterior (saindo) - só mostra se não for primeira carga */}
      {backgrounds.previous && !isFirstLoad.current && (
        <motion.div 
          key={`prev-${backgrounds.previous}`}
          className="fixed inset-0 -z-51"
          initial={{ x: 0 }}
          animate={{ x: -backgrounds.direction * 100 + '%' }}
          transition={{ type: 'tween', duration: 0.7, ease: 'easeInOut' }}
          onAnimationComplete={() => {
            // Limpa o fundo anterior após a animação
            setBackgrounds(prev => ({...prev, previous: null}));
          }}
          style={backgroundStyles(backgrounds.previous)}
        />
      )}
    </>
  );
};

export default BackgroundManager;