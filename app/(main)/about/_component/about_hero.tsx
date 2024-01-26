'use client'
import React from 'react'
import TalkNowBtn from '../../_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import animationData from "../../../../public/assets/business-group-meeting.json"
const About_hero = () => {
    return (
        <section className='flex justify-between items-center max-w-7xl mx-auto min-h-screen px-5'>
            <div className='flex flex-col items-start justify-center gap-5'>
                <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold p-3`}>Who <span className='bg-gradient-to-r from-cyan-400 to-cyan-600 text-transparent bg-clip-text'>we are..</span></h1>
                <p className='text-black max-w-xl px-3 md:text-lg text-base '>
                    Welcome to HubEleven, where innovation meets excellence. Our award-winning digital marketing team is dedicated to elevating your brand in the digital landscape. With a strategic and holistic approach, we specialize in bridging the gaps in your digital strategy, ensuring that each channel synergizes seamlessly to deliver sustainable growth for your business.
                </p>
            </div>
            <div className='max-w-lg '><Lottie animationData={animationData} /></div>
        </section>
    )
}

export default About_hero