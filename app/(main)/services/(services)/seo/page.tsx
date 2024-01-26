import React from 'react'
import Seo_Hero from './_component/Seo_Hero'
import { SEO } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_Stats from '../../_component/Service_Stats'

const page = () => {
  const {title, description, sections, faq,stats} = SEO
  return (
    <section className="flex flex-col max-w-screen-xl min-h-screen items-center justify-start py-10 px-5 gap-5 w-full mx-auto">
    <Seo_Hero title={title} description={description}/>
    <Service_About data={sections}/>
    <Service_Stats stats={stats}/>
    <Service_FAQ faq={faq}/>
  </section>
  )
}

export default page