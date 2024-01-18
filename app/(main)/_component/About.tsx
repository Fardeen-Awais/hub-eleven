import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex flex-col min-h-screen items-start lg:justify-end md:justify-center sm:justify-start'>
                <Image src={'/assets/creative-boxes.png'} alt='hero' width={550} height={550} quality={100} priority />
            </div>
        </div>
    )
}

export default About