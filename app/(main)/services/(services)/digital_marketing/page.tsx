import React from 'react'
import DigitalMarketing_Hero from './_component/DigitalMarketing_Hero'
import DigitalMarketing_Strategy from './_component/DigitalMarketing_Strategy'
import { DigitalMarketing } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_Stats from '../../_component/Service_Stats'
import Services from '../../_component/Services'
const page = () => {
  const {title, description, sections, faq,stats,subservices} = DigitalMarketing
  return (
    <section className="flex flex-col max-w-screen-xl min-h-screen items-center justify-start gap-5 w-full mx-auto">
      <DigitalMarketing_Hero title={title} description={description}/>
      <Service_About data={sections}/>
      <DigitalMarketing_Strategy/>
      <Services subservices={subservices}/>
      <Service_Stats stats={stats}/>
      <Service_FAQ faq={faq}/>
    </section>
  )
}

export default page