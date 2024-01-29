import React from 'react'
import HoverImageLinks from './_component/ServiceLink'

const page = () => {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <div className='flex flex-col items-center gap-10 p-5'>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold `}><span className='bg-gradient-to-r from-black via-cyan-400 to-cyan-600 text-transparent bg-clip-text '>Our Services</span></h1>
      </div>
      <div>
        <HoverImageLinks />
      </div>
    </div>
  )
}

export default page