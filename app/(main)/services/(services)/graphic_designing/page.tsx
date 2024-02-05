import React from 'react'
import Designing_Hero from './_component/Designing_Hero'
import { GraphicDesigning } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_Stats from '../../_component/Service_Stats'
import Designing_Strategy from './_component/Designing_Strategy'

const page = () => {
  const {title, description, sections, faq,stats} = GraphicDesigning
  return (
    <div>
      <section className="flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden">
        <Designing_Hero title={title} description={description}/>
        <Service_About data={sections}/>
        <Designing_Strategy />
        <Service_Stats stats={stats}/>
        <Service_FAQ faq={faq}/>
      </section>
    </div>
  )
}

export default page