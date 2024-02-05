import React from 'react'
import Service_Stats from '../../_component/Service_Stats'
import Service_FAQ from '../../_component/Service_FAQ'
import Content_Creation_Hero from './_components/Content_Creation_Hero'
import Service_About from '../../_component/Service_About'
import { ContentCreation } from '@/app/constant'
import Content_Strategy from './_components/Content_Strategy'
const page = () => {
  const { title, description, sections, faq,stats } = ContentCreation
  return (
    <section className="flex flex-col min-h-screen items-center justify-center max-w-7xl overflow-hidden mx-auto gap-5">
      <Content_Creation_Hero/>
      <Service_About data={sections}/>
      <Content_Strategy/>
      <Service_Stats stats={stats}/>
      <Service_FAQ faq={faq}/>
    </section>
  )
}

export default page