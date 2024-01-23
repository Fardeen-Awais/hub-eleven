import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-center min-h-screen'>
            <div className='flex flex-col items-start lg:justify-end md:justify-center sm:justify-start'>
                <div>
                    <Image src={'/assets/creative-boxes.webp'} alt='hero' width={550} height={550} quality={100} priority />
                </div>
            </div>
            <div className='flex flex-col items-center sm:items-end'>
                <div className='max-w-2xl px-5'>
                    <h2 className={`text-4xl sm:text-5xl font-bold p-3`}>Let our creativity market your business.</h2>
                    <p className='max-w-xl px-3 md:text-lg text-base'>Connect your digital channels to create a supercharged online presence that is guaranteed to deliver traffic, engagement and growth. <br /> <br /> Our award-winning digital marketing team can bridge the gaps in your digital strategy to ensure each of your channels are working together to deliver growth.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About