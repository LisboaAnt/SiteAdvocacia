"use client"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Nav from './Nav';
import Logo from './Logo';
import { AlignJustify } from 'lucide-react';
import { useRef } from 'react';

const MobileNav = () => {
  const closeButtonRef = useRef(null);

  const closeSheet = () => {
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <SheetClose ref={closeButtonRef} className="hidden" />
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-1xl'
              closeSheet={closeSheet}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
