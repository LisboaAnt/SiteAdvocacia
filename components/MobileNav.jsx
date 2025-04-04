"use client"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Nav from './Nav';
import Logo from './Logo';
import Socials from './Socials';
import { AlignJustify } from 'lucide-react';

import { useEffect } from 'react';
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { SheetClose } from '@/components/ui/sheet';
//Nav Mobile

// Nav Mobile
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-1xl'
              closeSheet={()=> ( document.querySelector('div[role="dialog"]').style.display = 'none', document.querySelector('div[data-state="open"]').style.display = 'none')} // Passando a função closeSheet como prop
            />
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
