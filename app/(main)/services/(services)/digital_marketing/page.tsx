import React from 'react'
import DigitalMarketing_Hero from './_component/DigitalMarketing_Hero'
import DigitalMarketing_Strategy from './_component/DigitalMarketing_Strategy'
import DigitalMarketing_Stats from './_component/DigitalMarketing_Stats'

const page = () => {
  return (
    <section className="flex flex-col max-w-screen-xl min-h-screen items-center justify-start py-10 px-5 gap-5 w-full mx-auto">
      <DigitalMarketing_Hero/>
      <DigitalMarketing_Strategy/>
      <DigitalMarketing_Stats/>
    </section>
  )
}

export default page