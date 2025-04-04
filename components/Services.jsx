'use client'

import { Smile, Scan, Bird} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Fade } from "react-awesome-reveal"


const servicesData =[
    {
        icon: <Smile size={48} strokeWidth={1}/>,
        title: 'Portraiture',
        description: 'Portraiture is more than just capturing faces—its about telling a story, revealing personality, and preserving moments. Our portrait photography services focus on creating timeless, authentic images that reflect the true essence of each individual. Whether youre looking for professional headshots, family portraits, or creative personal shoots, we work closely with you to craft stunning visuals that are as unique as you are.'
    },
    {
        icon: <Scan size={48} strokeWidth={1}/>,
        title: 'Landscapes',
        description: 'Our landscape photography captures the beauty of nature and stunning scenery, from majestic mountains to serene seascapes. Each image is thoughtfully composed to showcase the world’s natural wonders, offering a unique perspective that brings the outdoors to life.'
    },
    {
        icon: <Bird size={48} strokeWidth={1}/>,
        title: 'Lifestyle',
        description: 'Our lifestyle photography captures candid moments that reflect real-life experiences and emotions. From everyday activities to special occasions, we create authentic images that tell your story in a natural and visually engaging way.'
    }
]

const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">Our Services</h2>

                {/* Category Items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    <Fade direction="up" delay={100} cascade damping={0.2} triggerOnce={true}>
                        {
                            servicesData.map((item, index) => {
                                return(
                                    <Card 
                                    className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer  hover:bg-tertiary hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-700"
                                    key={index}>
                                        <CardHeader
                                        className="text-primary"
                                        >
                                            <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6">
                                                {item.icon}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <CardTitle className="mb-4">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="text-lg">
                                                {item.description}
                                            </CardDescription>
                                        </CardContent>

                                    </Card>
                                )
                            })
                        }
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Services
