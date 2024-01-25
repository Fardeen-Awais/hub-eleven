import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "._component/Hero.module.css"
import TalkNowBtn from './_subcomponents/TalkNowBtn'
const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row justify-start sm:justify-start items-center max-w-7xl mx-auto gap-10 min-h-screen z-10'>
            <div className='flex flex-col sm:flex-row items-center sm:gap-20 p-5'>
                <div className='w-44 h-44 sm:w-96 sm:h-96'>
                    <Image src={'/assets/Hero-image.webp'} alt='hero' width={350} height={350} quality={100} priority />
                </div>

                <div className='flex flex-col items-center px-5 sm:items-start gap-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className={`bg-gradient-to-r from-cyan-400 to-gray-600 text-transparent bg-clip-text font-bold p-3`}>Digital Marketing Agency</h1>
                        <p className='text-white max-w-xl px-3 md:text-lg text-base '>Our award-winning digital marketing team can bridge the gaps in your digital strategy to ensure each of your channels are working together to deliver growth.</p>
                    </div>
                    <div className='flex gap-5 p-2'>
                        <TalkNowBtn />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero