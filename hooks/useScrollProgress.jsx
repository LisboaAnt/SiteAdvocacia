import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [ completion, setCompletetion ] = useState(0);

    useEffect(() => {
        const updateScrollCompletetion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight){
                setCompletetion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            }
        };

        window.addEventListener('scroll', updateScrollCompletetion);
        return () => window.removeEventListener('scroll', updateScrollCompletetion);
    }, [])

  return completion
}

export default useScrollProgress