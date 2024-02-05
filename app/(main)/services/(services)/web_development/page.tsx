import React from 'react'
import Web_Hero from './_components/Web_Hero'
import Web_Feature from './_components/Web_Feature'
import Web_About from './_components/Web_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_About from '../../_component/Service_About'
import { WebDevelopment } from '@/app/constant'
import Service_Stats from '../../_component/Service_Stats'
import Web_Strategy from './_components/Web_Strategy'
const page = () => {
  const {title, description, sections, faq,stats} = WebDevelopment
  return (
    <section className="flex flex-col min-h-screen items-center justify-start overflow-hidden gap-5 w-full mx-auto">
    <Web_Hero/>
    <Service_About data={sections}/>
    <Web_Strategy/>
    <Service_Stats stats={stats}/>
    <Service_FAQ faq={faq}/>
  </section>
  )
}

export default page