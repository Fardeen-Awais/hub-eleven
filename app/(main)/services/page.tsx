import React from 'react'
import HoverImageLinks from './_component/ServiceLink'

const page = () => {
  return (
    <div className='flex flex-col gap-10 overflow-hidden pt-10 sm:pt-20 pb-5'>
      <div className='flex flex-col items-center gap-10'>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-cyan-400 to-cyan-600 text-transparent bg-clip-text`}>Our Services</h2>
      </div>
      <div>
        <HoverImageLinks />
      </div>
    </div>
  )
}

export default page