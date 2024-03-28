import CaseStudy from '@/app/components/shared/case-study'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col gap-10 items-center justify-center h-full mx-auto px-5'>
      <div className='flex flex-col items-center gap-5 p-2'>
        <h3 className='max-w-2xl text-center font-semibold'><span className='text-cyan-600'>Case studies.</span>See what our top customer says about us</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <CaseStudy industry='Ecommerce and Retail' title="Sescasters" description='An ecommerce site that sells casters and wheel. SES Casters (Stanley E. Smith Company) has been manufacturing and distributing quality casters and wheels for over 50 years. Initially focusing on the foodservice industry as the largest distributor of Jarvis Casters on the East Coast, we have expanded our SES brand caster and wheel markets to automotive, healthcare, laboratory, large equipment manufacturing and heavy industry.' label='View Case Study' href='/jaber' />
      </div>
    </main>
  )
}

export default page