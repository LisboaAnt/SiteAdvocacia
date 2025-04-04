'use client';

import { Fade } from 'react-awesome-reveal'

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'


const Faq = () => {
    return (
    <section>
        <div className="container mx-auto backdrop-blur-sm">
            <div className="w-full pt-12 mb-6 xl:mb-24">
                <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
                    <h2 className="section-title mb-12 text-center mx-auto">
                        Our Studio
                    </h2>
                </Fade>

                <div>
                    {/* Accordion */}
                    <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
                        <Accordion>
                            <AccordionItem value="item-1 ">
                                <AccordionTrigger>
                                    <div className="ms-3 ">
                                        01. What types of photography services do you offer?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                We specialize in various types of photography, including portrait, landscape, event, and product photography. Whether you're looking for a personal photo shoot, capturing special events, or showcasing products, we tailor our services to meet your unique needs.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                        02. How can I book a photography session with you?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                Booking a session is simple! Just visit the "Contact" section of our website and fill out the form with your details. You can also email or call us directly to discuss your requirements, and we'll work with you to schedule a date that suits you.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <div className="ms-3">
                                        03. Do you offer photo editing and retouching services?
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                Yes, all of our photography packages include professional photo editing and retouching to ensure your images look their best. We use advanced editing techniques to enhance colors, lighting, and composition while maintaining a natural and authentic look.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Fade>
                </div>
            </div>    
        </div>
    </section>
    )
}

export default Faq
