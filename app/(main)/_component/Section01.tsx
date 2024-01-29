import Image from 'next/image'
import React from 'react'
import TalkNowBtn from './_subcomponents/TalkNowBtn'

const Section01 = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-5'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10 w-full'>
                <div className='h-96 w-96'><Image src={'/assets/section-2-img.svg'} alt='hero' width={500} height={500} /></div>
                <div className='flex flex-col w-full gap-5 p-5 '>
                    <h3 className='font-semibold'>Craft with Purpose, Construct with Agility, Scale with Growth</h3>
                    <p className='text-gray-600 text-base'>Our comprehensive approach not only futureproofs your solutions but also ensures sustained value and growth for your business. The input from our diverse team of experts instills purpose into every project, guaranteeing seamless functionality across the board.</p>
                    <TalkNowBtn/>
                </div>
            </div>
        </div>
    )
}

export default Section01