import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col justify-start h-screen bg-yellow-50'>
            <div className='flex flex-col items-start lg:justify-end md:justify-center sm:justify-start'>
                <div>
                    <Image src={'/assets/creative-boxes.png'} alt='hero' width={550} height={550} quality={100} priority />
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className={`bg-gradient-to-r from-cyan-400 to-gray-600 text-transparent bg-clip-text text-4xl md:text-5xl lg:text-7xl font-bold p-3`}>Digital Marketing Agency</h1>
                    <p className='text-white max-w-xl px-3 md:text-lg text-base '>Our award-winning digital marketing team can bridge the gaps in your digital strategy to ensure each of your channels are working together to deliver growth.</p>
                </div>
            </div>
        </div>
    )
}

export default About