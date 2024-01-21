import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Section01 = () => {
    return (
        <div className='flex items-center justify-center min-h-screen p-5'>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-20'>
                <div><Image src={'/assets/section-2-img.svg'} alt='hero' width={350} height={350} /></div>
                <div className='flex flex-col max-w-96 gap-5'>
                    <h3 className='text-3xl font-semibold'>Craft with Purpose, Construct with Agility, Scale with Growth</h3>
                    <p className='text-gray-600'>Our comprehensive approach not only futureproofs your solutions but also ensures sustained value and growth for your business. The input from our diverse team of experts instills purpose into every project, guaranteeing seamless functionality across the board.</p>
                    <Button className='bg-green-500'>Our Service</Button>
                </div>
            </div>
        </div>
    )
}

export default Section01