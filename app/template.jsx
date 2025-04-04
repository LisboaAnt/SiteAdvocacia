'use client'

//Framer motion
import { motion } from "framer-motion"

//Hooks
import useScrollProgress from "@/hooks/useScrollProgress"

//Variants
const variants = {
    hidden: { opacity: 0},
    enter: { opacity: 1},
}

const Template = ({children}) => {
    const completion = useScrollProgress();
    return (
        <>
            {/* Content layer */}
            <motion.div
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'linear', delay: 0.2, duration: 0.4}}
                className="relative z-0"
            >
                {children}
            </motion.div>

            {/* Progress bar */}
            <span
                style={{transform: `translateY(${completion - 100}%)` }}
                className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700">
            </span>
        </>
    )
}

export default Template
