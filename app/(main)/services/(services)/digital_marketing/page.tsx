import React from 'react'
import DigitalMarketing_Hero from './_component/DigitalMarketing_Hero'
import DigitalMarketing_Strategy from './_component/DigitalMarketing_Strategy'
import DigitalMarketing_Stats from './_component/DigitalMarketing_Stats'
import { DigitalMarketing } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import Service_FAQ from '../../_component/Service_FAQ'
const page = () => {
  const {title, description, sections, faq} = DigitalMarketing
  return (
    <section className="flex flex-col max-w-screen-xl min-h-screen items-center justify-start gap-5 w-full px-5 mx-auto">
      <DigitalMarketing_Hero title={title} description={description}/>
      <DigitalMarketing_Strategy/>
      <Service_About data={sections}/>
      <Service_FAQ faq={faq}/>
      <DigitalMarketing_Stats/>
    </section>
  )
}

export default page