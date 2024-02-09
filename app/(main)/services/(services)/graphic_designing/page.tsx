import React from 'react'
import { GraphicDesigning } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_Stats from '../../_component/Service_Stats'
import Designing_Strategy from './_component/Designing_Strategy'
import Service_Hero from '../../_component/Service_Hero'

const page = () => {
  const {title, description,image, sections, faq,stats} = GraphicDesigning
  return (
    <div>
      <section className="flex flex-col min-h-screen items-center justify-start overflow-hidden gap-5 w-full mx-auto">
        <Service_Hero title={title} description={description} image={image}/>
        <Service_About data={sections}/>
        <Designing_Strategy />
        <Service_Stats stats={stats}/>
        <Service_FAQ faq={faq}/>
      </section>
    </div>
  )
}

export default page