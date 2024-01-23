import React from 'react'
import Web_Hero from './_components/Web_Hero'
import Image from 'next/image'
import Web_Feature from './_components/Web_Feature'
import Web_About from './_components/Web_About'

const page = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center gap-5 w-full py-10 overflow-hidden">
    <Web_Hero/>
    <Image className='relative -top-40 sm:-top-60' src='/assets/Dashboard.webp' alt='web_development' width={1200} height={1200} />
    <Web_About/>
    <Web_Feature/>
  </section>
  )
}

export default page