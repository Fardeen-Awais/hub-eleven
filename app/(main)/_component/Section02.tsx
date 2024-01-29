import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import EnvCarousal from './_subcomponents/Company-env-carousel'

const Section01 = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen gap-5 '>
            <EnvCarousal/>
        </div>
    )
}

export default Section01