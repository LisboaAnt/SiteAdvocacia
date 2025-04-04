'use client'

//Section 2 Home
//Faz a animacao dos numeros 

import CountUp from "react-countup"

const Badge = ({
    containerStyles,
    icon,
    endCountNum,
    endCountText,
    badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
        <div className="text-3xl text-white">{icon}</div>
        <div className="flex items-center gap-x-2">
            <div className="text-4xl leading-none font-bold text-white">
                <CountUp end={endCountNum} delay={1} duration={4}/>
                {endCountText}
            </div>
            <div className="max-w-[70px] text-[15px] leading-none font-medium text-black">{badgeText}</div>
        </div>
      
    </div>
  )
}

export default Badge
