'use client'

import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import React from 'react'
import animateData from '../../../../../../public/services/Digital_marketing.json'
import Image from 'next/image'

const Ecommerce_Hero = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col items-center gap-5'>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold p-3`}>Ecommerce </h2>
                <p className='text-black max-w-xl px-3 md:text-lg text-base text-center'>Embark on your eCommerce journey with a feature-rich and visually appealing online store. Our developers create customized, user-friendly, and responsive eCommerce websites that resonate with your brand.</p>
                <Image width={500} height={500} src={'/assets/ec-buy-domain.svg'} alt='illustation_ecommerce' className='w-96 h-96'/>
            </div>
            <div>
                <TalkNowBtn />
            </div>
        </div>
    )
}

export default Ecommerce_Hero