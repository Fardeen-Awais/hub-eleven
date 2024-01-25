import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import EnvCarousal from './_subcomponents/Company-env-carousel'

const Section01 = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen max-w-7xl px-5 mx-auto'>
            <EnvCarousal/>
        </div>
    )
}

export default Section01