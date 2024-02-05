import React from 'react'
import DigitalMarketing_Hero from './_component/DigitalMarketing_Hero'
import DigitalMarketing_Strategy from './_component/DigitalMarketing_Strategy'
import { DigitalMarketing } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_Stats from '../../_component/Service_Stats'
import Service_company from '../../_component/Service_company'
const page = () => {
  const {title, description, sections, faq,stats} = DigitalMarketing
  return (
    <section className="flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden">
      <DigitalMarketing_Hero title={title} description={description}/>
      <Service_About data={sections}/>
      <DigitalMarketing_Strategy/>
      <Service_company/>
      {/* <Services subservices={subservices}/> */}
      <Service_Stats stats={stats}/>
      <Service_FAQ faq={faq}/>
    </section>
  )
}

export default page