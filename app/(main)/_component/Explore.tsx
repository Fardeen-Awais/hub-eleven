import { Button } from '@/components/ui/button'
import React from 'react'
import styles from "./_subcomponents/bg-image.module.css"
import TalkNowBtn from './_subcomponents/TalkNowBtn'
import Image from 'next/image'

const Explore = () => {
    return (
        <div className={`flex flex-col justify-center items-center min-h-screen gap-5`}>
            <div style={{ position: 'absolute', height: '100%', width: '100%', }}>
                <Image
                    src={'/assets/Background-02.webp'}
                    alt="Hero Background"
                    fill
                    quality={100}
                    sizes='100vw'
                    style={{ objectFit: 'cover' }}
                    priority={true}
                />
            </div>
            <div className='flex flex-col max-w-60 sm:max-w-72 gap-5 relative left-10 sm:left-48 z-0'>
                <h3 className='text-2xl font-semibold text-white'>
                    Explore Your Next Opportunity
                </h3>
                <p className=' max-w-sm text-sm text-gray-300'>We provide our clients with the digital tools to seize opportunities and thrive in their marketplace. <br /><br /> Using a 360, integrated approach, each of our solutions is tailored to your business with future-proofed functionality built in.
                </p>
            </div>
        </div>
    )
}

export default Explore