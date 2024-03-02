'use client'
import React from 'react'
import TalkNowBtn from '../../_component/_subcomponents/TalkNowBtn'
import { TypeAnimation } from 'react-type-animation'
const SubService_Hero = ({ amazon, title }: any) => {
    return (
        <div style={{
            backgroundImage: `url('/assets/subservicehero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'luminosity',
            WebkitFilter: 'grayscale(0%)',
            backdropFilter: 'contrast(1) grayscale(100%)',
        }} className='flex w-full h-screen items-start justify-center px-5 pt-40'>
            <div className='flex flex-col items-center justify-center text-center gap-5 max-w-screen-xl text-white'>
                <div className='flex shadow-md flex-col gap-5 max-w-4xl px-4 md:px-8'>
                    <h2>
                    <TypeAnimation
                        sequence={[
                            `${amazon.title}-${title}`,
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                    </h2>
                    <p>{amazon.description}</p>
                </div>
                <TalkNowBtn />
            </div>

        </div>
    )
}

export default SubService_Hero