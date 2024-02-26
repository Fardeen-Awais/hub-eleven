import React from 'react'
import NextImage from "next/image";
import { Image } from '@nextui-org/react';

const About = () => {
    return (
        <div className='flex flex-col justify-center items-start max-h-screen max-w-7xl mx-auto py-0 pb-10'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div>
                    <Image as={NextImage} src={'/assets/creative-boxes.webp'} alt='hero' width={600} height={600} quality={100} priority />
                </div>
                <div className='max-w-2xl px-5 gap-5'>
                    <h2 className={`text-5xl sm:text-6xl font-bold p-3`}>Let our creativity market your business.</h2>
                    <p className='max-w- px-3 md:text-lg text-base'>Connect your digital channels to create a supercharged online presence that is guaranteed to deliver traffic, engagement and growth. <br /> <br /> Our award-winning digital marketing team can bridge the gaps in your digital strategy to ensure each of your channels are working together to deliver growth.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About