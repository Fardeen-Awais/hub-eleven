import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import TalkNowBtn from './_subcomponents/TalkNowBtn'

const Section01 = () => {
    return (
        <div className='flex items-center justify-between min-h-96 max-w-7xl sm:mx-auto px-5 py-10'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10 w-full'>
                <div className='flex flex-col md:max-w-2xl w-full gap-5'>
                    <h3 className='font-semibold'>Craft with Purpose, Construct with Agility, Scale with Growth</h3>
                    <p className='text-gray-600 text-base'>Our comprehensive approach not only futureproofs your solutions but also ensures sustained value and growth for your business. The input from our diverse team of experts instills purpose into every project, guaranteeing seamless functionality across the board.</p>
                    {/* <Button className='bg-green-500'>Our Service</Button> */}
                    <TalkNowBtn/>
                </div>
                <div className='min-h-96 min-w-96'><Image src={'/assets/section-2-img.svg'} alt='hero' width={500} height={500} /></div>
            </div>
        </div>
    )
}

export default Section01