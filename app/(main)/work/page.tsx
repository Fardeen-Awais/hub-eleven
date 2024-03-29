import CaseStudy from '@/app/components/shared/case-study'
import { client } from '@/sanity/lib/client'
import React from 'react'

export const revalidate = 0
const page = async () => {
  
  const caseStudies = await client.fetch(`*[_type == "case-study"]{
    _id,
    title,
    desc,
    slug,
    mainImage,
    industry,
    link,
  }`)

  return (
    <main className='flex flex-col gap-10 items-center justify-center h-full mx-auto px-5'>
      <div className='flex flex-col items-center gap-5 p-2'>
        <h3 className='max-w-2xl text-center font-semibold'><span className='text-cyan-600'>Case studies.</span>See what our top customer says about us</h3>
      </div>
      <div className='flex flex-col gap-20 sm:gap-40'>
        {caseStudies.map((caseStudy: any) => (
          <CaseStudy key={caseStudy._id} industry={caseStudy.industry} title={caseStudy.title} description={caseStudy.desc} label='View Case Study' image={caseStudy.mainImage} href={`/work/${caseStudy.slug.current}`} />
        ))}
      </div>
    </main>
  )
}

export default page