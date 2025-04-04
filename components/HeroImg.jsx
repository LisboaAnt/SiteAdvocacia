import Image from 'next/image'
import React from 'react'

//Carregamento de Imgs da Home

const HeroImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
      src={imgSrc} fill priority
      alt=''
      />
    </div>
  )
}

export default HeroImg
