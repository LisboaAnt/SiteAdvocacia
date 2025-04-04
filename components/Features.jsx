'use client'

import { Fade } from "react-awesome-reveal"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from "@heroicons/react/24/outline"

const features = [
  {
    name: 'PHOTOGRAPHY',
    description: 'Studio comes with elements made specifically for photographers, including the client list, password protected pages, and the proofing gallery',
    icon: CloudArrowUpIcon,
    side: 'left',
  },
  {
    name: 'PORTFOLIO LISTS',
    description: 'Use our portfolio lists to create amazing galleries of your work. It`s easy, intuitive, and most important of all, your work is sure to command attention',
    icon: LockClosedIcon,
    side: 'right',
  },
  {
    name: 'FULLY CUSTOMIZABLE',
    description: 'It is a fully flexible theme. All elements, pages and every other aspect of your website can be effortlessly adapted to fit your especific needs',
    icon: ArrowPathIcon,
    side: 'left',
  },
  {
    name: 'FREE PLUGINS',
    description: 'Two amazing plugins are included for free with Azalea: the revolution Slider plugin & the intuitive drag-and-drop Visual Composer page builder',
    icon: FingerPrintIcon,
    side: 'right',
  }
]

const Features = () => {
  return (
    <section className="pb-12 xl:pb-24 ">
      <div className=" container mx-auto">
        <Fade direction="up" delay={100} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="section-title mb-2 xl:mb-3 text-center mx-auto">Key Features</h2>
        </Fade>

        <Fade direction="up" delay={200} cascade damping={1e-1} triggerOnce={true}>
          <div className="flex flex-col">
            <div className="mx-auto max-w-7xl text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white">Everything you need to deliver faster</p>
              <p className="mt-6 text-lg leading-8 text-black dark:text-white">
                It`s wide array of extremely useful & user-friendly elements and features turn website creation into a cakewalk.
                Get started now & see just how easy it is to make the website you always wanted.
              </p>
            </div>
          </div>
        </Fade>

        {/* Features Lists */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 lg:gap-x-48">
            {
              features.map((feature) =>(
                <div key={feature.name}>
                  <Fade direction={feature.side} delay={100} cascade damping={1e-1} triggerOnce={true}>
                    <div className="relative hover:scale-110 transition-all">
                      <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                        <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                          <feature.icon
                          className='h-[36px] w-[36px] text-white' aria-hidden="true"
                          />
                        </div>
                        <div className="text-black dark:text-white">
                          {feature.name}
                        </div>
                      </dt>

                      <dd className="mt-2 text-base leading-7">
                        {feature.description}
                      </dd>
                    </div>
                  </Fade>
                </div>
              ))
            }
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Features
