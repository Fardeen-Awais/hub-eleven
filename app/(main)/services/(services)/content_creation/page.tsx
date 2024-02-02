import React from 'react'
import Web_Hero from '../web_development/_components/Web_Hero'
import TalkNowBtn from '@/app/(main)/_component/_subcomponents/TalkNowBtn'
import Image from 'next/image'
import Web_Feature from '../web_development/_components/Web_Feature'
import Consult_Feature from './_components/Consult_feature'
import Consult_FAQ from './_components/Consult_FAQ'
import Consultant_Hero from './_components/Consultant_Hero'
import Service_About from '../../_component/Service_About'
import { ConsultancyService } from '@/app/constant'
import Service_Stats from '../../_component/Service_Stats'
import Service_FAQ from '../../_component/Service_FAQ'
const page = () => {
  const { title, description, sections, faq,stats } = ConsultancyService
  return (
    <section className="flex flex-col min-h-screen items-center justify-center max-w-7xl overflow-hidden mx-auto">
Consultant Page
      {/* <Consultant_Hero/>
      <Service_About data={sections}/>
      <Service_Stats stats={stats}/>
      <Service_FAQ faq={faq}/> */}
    </section>
  )
}

export default page