import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Image from 'next/image'
import React from 'react'

const Seo_Hero = () => {
    return (
        <div className='flex flex-col items-center justify-end gap-10 min-h-screen '>
            <div className='flex flex-col md:flex-row items-center gap-5 bg-gray-900 p-5 rounded-md'>
                <h2 className={`text-white text-3xl md:text-4xl lg:text-5xl font-bold p-3`}>Search Engine Optimization</h2>
                <div className='flex flex-col gap-5'>
                    <p className='text-gray-300 max-w-xl px-3 md:text-lg text-base text-center'>Elevate your online presence with potent SEO campaigns, ensuring sustained visibility, increased traffic, and revenue growth. We specialize in expanding your web apps reach to a broader audience.</p>
                    <TalkNowBtn />
                </div>
            </div>
            <Image className='' src='/services/Seo.webp' alt='SEO' width={500} height={500} />
            <div>

            <div className='flex flex-col items-center gap-5 p-5 rounded-md'>
                <div className='flex flex-col gap-5'>
                    <p className='text-gray-900 max-w-xl px-3 md:text-lg text-xl text-center'>We will make your web application more optimized with on-page Seo and off-page seo. Market any product or service with our Team.</p>
                </div>
            <Image className='' src='/assets/seo_graphs.png' alt='SEO' width={400} height={400} />
            </div>
            </div>
        </div>
    )
}

export default Seo_Hero