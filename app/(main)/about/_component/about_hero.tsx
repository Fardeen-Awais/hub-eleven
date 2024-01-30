'use client'
import React from 'react'
import TalkNowBtn from '../../_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import animationData from "../../../../public/assets/business-group-meeting.json"
import Image from 'next/image'
const About_hero = () => {
    return (
        <section className='flex justify-center items-start max-w-7xl mx-auto min-h-screen px-5'>
            <div className='flex flex-col md:flex-row items-center justify-center '>
                <div className='flex flex-col'>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold py-3`}>Who <span className='bg-gradient-to-r from-cyan-400 to-cyan-600 text-transparent bg-clip-text'>we are..</span></h1>
                    <p className='text-black max-w-2xl'>
                        Welcome to HubEleven, where innovation meets excellence. Our award-winning digital marketing team is dedicated to elevating your brand in the digital landscape. With a strategic and holistic approach, we specialize in bridging the gaps in your digital strategy, ensuring that each channel synergizes seamlessly to deliver sustainable growth for your business. <br /><br />

                        At HubEleven, we believe in the power of creativity and technology to transform businesses. Our team of experts is passionate about crafting unique and effective solutions tailored to meet the specific needs of our clients.  <br /><br />
                    </p>
                </div>
                <div className='relative sm:top-20 max-w-lg'>
                    <Image src={'/assets/about.png'} alt='hero' width={500} height={500} quality={100} priority />
                </div>

            </div>
        </section>
    )
}

export default About_hero