'use client'

//Logo do site

import Image from 'next/image'
import Link from 'next/link'

const Logo = ({ className }) => {
  return (
    <Link href="/">
      <div className='flex items-center justify-content-center'>
        <Image
        src="/imgs/logo.png"
        width={200}
        height={200}
        priority alt=""
        className='w-[60px] h-[56px] rounded-sm'
        />
      
      <h1 className={`pl-5 text-xl ${className ?? 'text-white'}`}>Advocacia </h1>
      </div>

    </Link>
  )
}

export default Logo