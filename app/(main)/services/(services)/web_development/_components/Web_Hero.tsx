import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Image from 'next/image'
import React from 'react'

const Web_Hero = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-start gap-5 bg-gradient-to-b max-h-screen py-20'>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold p-3`}>Web application</h1>
                <p className='text-black max-w-xl px-3 md:text-lg text-base text-center'>I will help you to build modern web application with any desire technology. Make customizable website and design with any budget.</p>
                <TalkNowBtn/>
            </div>
            <Image className='relative flex items-center mx-auto  -bottom-0 sm:-bottom-0' src='/assets/Dashboard.webp' alt='web_development' width={1200} height={1200} />
        </div>
    )
}

export default Web_Hero