'use client'

import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import React from 'react'
import animateData from '../../../../../../public/services/DM/Digital_marketing.json'
import Image from 'next/image'
import mobileimg from "../../../../../../public/services/DM/Digital_marketing_mobile.png"
const DigitalMarketing_Hero = ({ title, description, image }: any) => {
    return (
        <div className='flex flex-col sm:flex-row items-start justify-center gap-0 mx-auto max-w-7xl px-5 pt-12'>
            <div className='flex flex-col items-center sm:items-start justify-start gap-5 '>
                <div className='flex flex-col items-center sm:items-start justify-center'>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-cyan-400 to-cyan-600 text-transparent bg-clip-text py-3`}>{title}</h1>
                    <p className='text-black max-w-2xl md:text-xl text-center sm:text-start px-1'>{description}</p>
                </div>
                <TalkNowBtn />
            </div>
            <div className='sm:max-w-lg sm:h-full sm:flex hidden'>
                <Lottie animationData={animateData} loop={true} className='w-full h-full py-0
            -z-10' />
            </div>
            <div className='sm:hidden flex'>
                <Image src={mobileimg} alt={title} className='w-full h-full object-cover' width={500} height={500} />
            </div>
        </div>
    )
}

export default DigitalMarketing_Hero