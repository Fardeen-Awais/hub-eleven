'use client'

import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import React from 'react'
import animateData from '../../../../../../public/services/Digital_marketing.json'

const DigitalMarketing_Hero = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col items-center gap-5'>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold p-3`}>Digital<span className='bg-gradient-to-r from-cyan-400 to-cyan-600 text-transparent bg-clip-text'> Marketing</span></h2>
                <p className='text-black max-w-xl px-3 md:text-lg text-base text-center'>Elevate your online presence with potent SEO campaigns, ensuring sustained visibility, increased traffic, and revenue growth. We specialize in expanding your web apps reach to a broader audience.</p>
            <Lottie animationData={animateData} loop={true} className='w-96 h-96' />
            </div>
            <div>
                <TalkNowBtn />
            </div>
        </div>
    )
}

export default DigitalMarketing_Hero