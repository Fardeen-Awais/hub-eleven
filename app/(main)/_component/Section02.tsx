import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import EnvCarousal from './_subcomponents/Company-env-carousel'

const Section01 = () => {
    return (
        <div className='flex flex-col sm:gap-60 gap-32 items-center justify-center min-h-screen py-32 px-5'>
            <EnvCarousal/>
            {/* <div className='flex flex-col sm:flex-row justify-center items-center gap-20'>
                <div className='skew-x-12 rotate-3 hover:skew-x-0 hover:rotate-0 hover:animate-pulse transition-all w-80 h-80'><Image src={'/assets/sec1-01.jpg'} alt='hero' width={350} height={350} /></div>
                <div className='flex flex-col max-w-96 gap-5'>
                    <h3 className='text-3xl font-semibold'>Culture</h3>
                    <p className='text-gray-600'>Our culture puts people before profits every time, whether our team or our clients. We’re genuine and human and we’re not afraid to show it. We acknowledge that our clients are human too, creating lasting, strong and authentic relationships with each one along the way.</p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-20'>
                <div className='flex flex-col max-w-96 gap-5'>
                    <div className='flex sm:hidden skew-x-12 hover:skew-x-0 hover:rotate-0 hover:animate-pulse transition-all w-80 h-80'><Image src={'/assets/sec3-03.jpg'} alt='hero' width={350} height={350} /></div>
                    <h3 className='text-3xl font-semibold'>Social Impact</h3>
                    <p className='text-gray-600'>We’re here to create a better agency, an agency with purpose and impact outside of our professional projects. Recognising we are part of a bigger picture, we strive to create a community that empowers, supports and champions change.</p>
                </div>
                <div className='hidden sm:flex skew-x-12 hover:skew-x-0 hover:rotate-0 hover:animate-pulse transition-all w-80 max-h-48'><Image src={'/assets/sec3-03.jpg'} alt='hero' width={350} height={350} /></div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-20'>
                <div className='skew-x-12 hover:skew-x-0 hover:rotate-0 hover:animate-pulse transition-all w-48 max-h-48'><Image src={'/assets/sec2-02.jpg'} alt='hero' width={350} height={350} /></div>
                <div className='flex flex-col max-w-96 gap-5'>
                    <h3 className='text-3xl font-semibold'>Culture</h3>
                    <p className='text-gray-600'>Our culture puts people before profits every time, whether our team or our clients. We’re genuine and human and we’re not afraid to show it. We acknowledge that our clients are human too, creating lasting, strong and authentic relationships with each one along the way.</p>
                </div>
            </div> */}
        </div>
    )
}

export default Section01