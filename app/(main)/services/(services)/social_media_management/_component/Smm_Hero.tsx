import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Image from 'next/image'
import React from 'react'

const Smm_Hero = ({title, description}:any) => {
    return (
        <div className='flex flex-col items-center justify-end gap-10 min-h-screen w-full mx-auto max-w-7xl'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 bg-gray-900 p-5 rounded-md w-full'>
                <h2 className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold p-3`}>{title}</h2>
                <div className='flex flex-col gap-5'>
                    <p className='text-gray-300 max-w-xl px-3 md:text-lg text-base'>{description}</p>
                    <TalkNowBtn />
                </div>
            </div>
            <div className='flex flex-col items-center gap-5 p-5 rounded-md'>
            <Image className='w-96 h-96' src='/assets/seo_graphs.png' alt='SEO' width={500} height={500} />
                <div className='flex flex-col gap-5'>
                    <p className='text-gray-900 max-w-xl px-3 md:text-lg text-xl text-center font-medium'>We will make your web application more optimized with on-page Seo and off-page seo. Market any product or service with our Team.</p>
                </div>
            </div>
        </div>
    )
}

export default Smm_Hero