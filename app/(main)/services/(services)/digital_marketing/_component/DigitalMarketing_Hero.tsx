'use client'

import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import React from 'react'
import animateData from '../../../../../../public/services/Digital_marketing.json'

const DigitalMarketing_Hero = ({title, description, image}:any) => {
    return (
        <div className='flex flex-col items-center justify-between gap-5'>
            <div className='flex flex-col items-center gap-10 p-5'>
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold `}><span className='bg-gradient-to-r from-black via-cyan-400 to-cyan-600 text-transparent bg-clip-text'>{title}</span></h1>
                <p className='text-black max-w-4xl md:text-xl text-center'>{description}</p>
                <TalkNowBtn />
            </div>
            <div className='w-full h-[500px]'>
            <Lottie animationData={animateData} loop={true} className='w-full h-full py-10
            -z-10' />
            </div>
        </div>
    )
}

export default DigitalMarketing_Hero