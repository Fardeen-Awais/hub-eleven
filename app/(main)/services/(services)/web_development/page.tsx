import React from 'react'
import Web_Hero from './_components/Web_Hero'
import Web_Feature from './_components/Web_Feature'
import Web_About from './_components/Web_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_About from '../../_component/Service_About'

const page = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-start overflow-hidden gap-5 w-full mx-auto">
    <Web_Hero/>
    <Web_About/>
    {/* <Service_About/>
    <Service_FAQ/> */}
  </section>
  )
}

export default page