import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import React from 'react'

const Web_Hero = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-white via-pink-100  to-white w-screen min-h-screen py-20'>
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold p-3`}>Web application</h2>
                <p className='text-black max-w-xl px-3 md:text-lg text-base text-center'>I will help you to build modern web application with any desire technology. Make customizable website and design with any budget.</p>
                <TalkNowBtn/>
            </div>
        </div>
    )
}

export default Web_Hero