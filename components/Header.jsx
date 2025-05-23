'use client'

//Header WebPage

import React, { useState, useEffect} from "react"
import ThemeToggler from "./ThemeToggler"

//Import Components
import Logo from "./Logo"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { usePathname } from "next/navigation"

export const Header = () => {

  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener('scroll', scrollYPos);
  }

  )
  return (
    <header
    className={`py-6 bg-transparent sticky top-0 z-30 transition-all backdrop-blur-sm`}
    >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <Logo/>

          <div className="flex items-center gap-6">
            {/*Nav Section*/}
            <Nav
            containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all text-white'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            {/*Mobile Navigation*/}
            <div className="xl:hidden">
              <MobileNav/>
            </div>
          </div>
        </div>  
        
      </div>
    </header>
  )
}
