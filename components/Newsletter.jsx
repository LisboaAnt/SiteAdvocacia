'use client'

import { Fade } from "react-awesome-reveal"
import React from 'react'

//Ui
import { Input } from './ui/input'
import { Button } from './ui/button'
import { RiMenFill } from 'react-icons/ri'
import { CalendarDaysIcon, HandRaisedIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

const Newsletter = () => {
    return (
    <section className="py-14 sm:pb-20 lg:pb-32">
        <div className="relative bg-tertiary overflow-hidden py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <Fade direction="left" delay={200} cascade damping={0.2} triggerOnce={true}>
                            <h2 className="text-3xl font-blod tracking-tighter section-title sm:text-4xl">Need a <br className="sm:hidden" /> Photographer?</h2>
                            <p className="mt-4 text-lg leading-8 subtitle">
                            Looking for a professional photographer to capture your special moments or elevate your brand? Get in touch with us today! Simply subscribe to our mailing list, and we'll reach out to discuss your photography needs. Whether it's a portrait session, event coverage, or product photography, we're here to turn your vision into stunning images. Subscribe now, and let’s start creating together!
                            </p>
                            <div>
                                <label className="sr-only">
                                    Email Address
                                </label>

                                <div className="mt-6 flex max-w-md gap-x-4">
                                    <Input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="Enter your email"
                                    />
                                    <Link href="/contact">
                                        <Button>
                                            Subscribe <RiMenFill size={18}/>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <Fade direction="right" delay={200} cascade damping={0.2} triggerOnce={true}>
                            <div className="flex flex-col items-start">
                                <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                                    <CalendarDaysIcon className="h-6 w-6 text-white"/>
                                </div>

                                <dt className="mt-4 font-semibold text-muted-foreground">Weekly articles</dt>
                                <dd className="mt-2 leading-7">
                                    Discover weekly articles filled with photography tips, insights, and inspiration to enhance your skills and creativity.
                                </dd>
                            </div>

                            <div className="flex flex-col items-start">
                                <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                                    <HandRaisedIcon className="h-6 w-6 text-white"/>
                                </div>

                                <dt className="mt-4 font-semibold text-muted-foreground">Full Security</dt>
                                <dd className="mt-2 leading-7">
                                    Enjoy peace of mind with our comprehensive security services, tailored to protect you and your assets.
                                </dd>
                            </div>
                        </Fade>
                    </dl>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Newsletter
