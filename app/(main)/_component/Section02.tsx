import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import EnvCarousal from './_subcomponents/Company-env-carousel'

const Section01 = () => {
    return (
        <div className='flex flex-col sm:gap-60 gap-32 items-center justify-center min-h-screen py-32 px-5'>
            <EnvCarousal/>
        </div>
    )
}

export default Section01