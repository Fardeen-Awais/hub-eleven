import React from 'react'
import Web_Hero from './_components/Web_Hero'
import Image from 'next/image'
import Web_Feature from './_components/Web_Feature'

const page = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center gap-5 w-full py-10 overflow-hidden">
    <Web_Hero/>
    <Image className='relative -top-40 sm:-top-60' src='/assets/Dashboard.png' alt='web_development' width={1200} height={1200} />
    <div className='flex flex-col sm:flex-row'>
      <h2 className='text-2xl text-center max-w-2xl p-5'>I will help you to build modern web application with any desire technology. Make customizable website and design with any budget.</h2>
      <Image src='/services/webdevelopement.gif' alt='web_development' width={600} height={600} />
    </div>
    <Web_Feature/>
  </section>
  )
}

export default page