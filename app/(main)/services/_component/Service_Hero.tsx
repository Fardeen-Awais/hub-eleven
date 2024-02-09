import React from 'react'
import TalkNowBtn from '../../_component/_subcomponents/TalkNowBtn'
import Image from 'next/image'

const Service_Hero = ({ title, description, image }:any) => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-center gap-0 mx-auto max-w-7xl px-5'>
        <div className='flex flex-col items-center sm:items-start sm:justify-start justify-center gap-5 '>
            <div className='flex flex-col items-center sm:items-start justify-center'>
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-cyan-400 to-cyan-600 text-transparent bg-clip-text py-3 px-20 sm:px-0 text-center sm:text-start`}>{title}</h1>
                <p className='text-black max-w-2xl md:text-xl text-center sm:text-start px-1'>{description}</p>
            </div>
            <TalkNowBtn />
        </div>
        <div className='flex sm:max-w-lg sm:h-full'>
            <Image src={image} alt={title} className='w-full h-full object-cover' width={100} height={1500} />
        </div>
    </div>
    )
}

export default Service_Hero