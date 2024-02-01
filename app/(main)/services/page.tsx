import React from 'react'
import HoverImageLinks from './_component/ServiceLink'
import { services } from '@/app/constant'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

const page = () => {
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <div className='flex flex-col items-center gap-10 p-5'>
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold `}><span className='bg-gradient-to-r from-black via-cyan-400 to-cyan-600 text-transparent bg-clip-text '>Our Services</span></h1>
      </div>
      {/* <div className='flex justify-center items-center h-96 w-full bg-black '>
        <div className='flex flex-col items-start justify-center gap-8'>
          <h3 className='text-white font-semibold'>Jump to all services</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-start '>
            {services.map((service) => (
              <Link href={service.href} className='text-white' key={service.title}>
                <div className='flex items-center justify-center gap-2 hover:text-cyan-300 hover:scale-110 group'>
                  <p className='text-base'>{service.title}</p>
                  <MoveRight className='group-hover:animate-bounce' size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <div>
        <HoverImageLinks />
      </div>
    </div>
  )
}

export default page