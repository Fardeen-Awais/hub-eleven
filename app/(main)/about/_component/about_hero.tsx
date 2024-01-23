'use client'
import React from 'react'
import TalkNowBtn from '../../_component/_subcomponents/TalkNowBtn'
import Lottie from 'lottie-react'
import animationData from "../../../../public/assets/business-group-meeting.json"
const About_hero = () => {
    return (
        <section className='flex flex-col md:flex-row justify-start sm:justify-start items-center max-w-7xl mx-auto gap-10 min-h-screen w- z-10'>
            <div className='flex flex-col sm:flex-row items-center sm:gap-20 p-5'>
                <div className='flex flex-col items-center sm:items-start gap-3 min-w-80'>
                    <div className='flex flex-col gap-2'>
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold p-3`}>Who <span className='bg-gradient-to-r from-cyan-400 to-cyan-600 text-transparent bg-clip-text'>we are..</span></h2>
                        <p className='text-black max-w-xl px-3 md:text-lg text-base '>Our award-winning digital marketing team can bridge the gaps in your digital strategy to ensure each of your channels are working together to deliver growth.</p>
                    </div>
                </div>
                <div className='max-w-md h-96'><Lottie animationData={animationData} /></div>
            </div>
        </section>
    )
}

export default About_hero