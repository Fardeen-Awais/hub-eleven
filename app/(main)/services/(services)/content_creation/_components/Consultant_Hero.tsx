import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Image from 'next/image'
import React from 'react'

const Consultant_Hero = () => {
    return (
        <div className='flex flex-col justify-start items-center p-5'>
            <div className='flex flex-col items-center justify-start gap-10 sm:gap-20 w-screen min-h-screen bg-opacity-5'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold `}>Consultant</h1>
                    <p className='text-black max-w-2xl md:text-lg text-base text-center px-5'>Our consultancy services are like having a tech expert by your side. Whether you're planning to use new technologies, improve your IT setup, or brainstorm innovative ideas, we're here to help.
                    </p>
                    <TalkNowBtn />
                    <div className=''>
                        <Image src={'/services/consultant.png'} alt='hero' width={500} height={500} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Consultant_Hero