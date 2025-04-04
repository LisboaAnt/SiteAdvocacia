'use client';

import { Fade } from 'react-awesome-reveal'
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

// Import Swiper styles
import 'swiper/css'; 
import 'swiper/css/pagination';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Jenifer',
        job: 'Chief',
        review: 'Our client sought a photo collection that reflected their personality. Through collaboration, we captured authentic images that beautifully told their story.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Lopez Chris',
        job: 'CEO',
        review: 'Our client sought a photo collection that reflected their personality. Through collaboration, we captured authentic images that beautifully told their story.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Hamilton',
        job: 'COO',
        review: 'Our client sought a photo collection that reflected their personality. Through collaboration, we captured authentic images that beautifully told their story.'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Jesus',
        job: 'APP Developer',
        review: 'Our client sought a photo collection that reflected their personality. Through collaboration, we captured authentic images that beautifully told their story.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Mark Steve',
        job: 'Chief',
        review: 'Our client sought a photo collection that reflected their personality. Through collaboration, we captured authentic images that beautifully told their story.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Stork Gem',
        job: 'Chief',
        review: 'Our client sought a photo collection that reflected their personality. Through collaboration, we captured authentic images that beautifully told their story.'
    },
]

const  Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto ">
                <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="section-title mb-12 text-center mx-auto text-2xl ">
                    The say <br className="sm:hidden" /> about our work
                    </h2>

                </Fade>
                {/* Slider */}
                <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{ // Corrigindo a chave para "breakpoints"
                            640: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        className="h-[350px] "
                        >
                        {reviewsData.map((person, index) => (
                            <SwiperSlide key={index}>
                            <Card className="p-8 min-h-[300px] hover:bg-tertiary  hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-700">
                                <CardHeader className="p-0 mb-3">
                                <div className="flex flex-col items-start gap-x-4">
                                    {/* Avatar */}
                                    <Image
                                    src={person.avatar}
                                    width={70}
                                    height={70}
                                    alt=""
                                    priority
                                    />
                                    {/* Name */}
                                    <div className="flex flex-col">
                                    <CardTitle>{person.name}</CardTitle>
                                    <p>{person.job}</p>
                                    </div>
                                </div>
                                </CardHeader>
                                <CardDescription className="text-lg text-muted-foreground">
                                {person.review}
                                </CardDescription>
                            </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Fade>
            </div>
        </section>
    )
}

export default Reviews
