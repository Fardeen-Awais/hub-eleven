import React from 'react'
import { SocialMediaManagement } from '@/app/constant'
import Service_About from '../../_component/Service_About'
import DigitalMarketing_Strategy from '../digital_marketing/_component/DigitalMarketing_Strategy'
import Service_company from '../../_component/Service_company'
import Service_Stats from '../../_component/Service_Stats'
import Service_FAQ from '../../_component/Service_FAQ'
import Service_Hero from '../../_component/Service_Hero'

const page = () => {
  const { title,image, description , sections , faq , stats} = SocialMediaManagement
  return (
    <section className="flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden">
      <Service_Hero title={title} description={description} image={image} />
      <Service_About data={sections}/>
      <DigitalMarketing_Strategy/>
      <Service_company/>
      <Service_Stats stats={stats}/>
      <Service_FAQ faq={faq}/>
    </section>
  )
}

export default page