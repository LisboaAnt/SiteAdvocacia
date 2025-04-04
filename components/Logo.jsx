'use client'

//Logo do site

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <div className='flex items-center justify-content-center'>
        <Image
        src="/logo.png"
        width={70}
        height={70}
        priority alt=""
        />
      
      <h1 className='pl-5 text-xl'>ELAINE MEROLA </h1>
      </div>

    </Link>
  )
}

export default Logo