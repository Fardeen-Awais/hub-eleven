import React from 'react'
import TalkNowBtn from '../../_component/_subcomponents/TalkNowBtn'
const SubService_Hero = ({ amazon, title }: any) => {
    return (
        <div style={{
            backgroundImage: `url('/services/DM/Amazon/amazon_hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'luminosity',
            WebkitFilter: 'grayscale(50%)',
            backdropFilter:'contrast(1) grayscale(100%)',
        }} className='flex w-full h-screen items-start justify-center px-5 pt-20 sm:pt-40 '>
            <div className='flex flex-col items-center justify-center text-center gap-5 max-w-screen-xl '>
                <div className='flex flex-col gap-5 max-w-4xl px-4 md:px-8'>
                    <h2>{amazon.title}-{title}</h2>
                    <p>{amazon.description}</p>
                </div>
                <TalkNowBtn />
            </div>

        </div>
    )
}

export default SubService_Hero