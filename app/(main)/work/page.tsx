import CaseStudy from '@/app/components/shared/case-study'
import React from 'react'

const page = () => {
  return (
    <main className='flex flex-col gap-10 items-center justify-center p-5 h-full mx-auto'>
      <div className='flex flex-col items-center gap-5 p-2'>
        <h1>Case Study</h1>
        <p className='text-center'>Our satisfied clients and their successful projects case studies</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
        <CaseStudy industry='IT & security' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' List1='33-1 return on ad spend for an exclusive wine merchant during the first 6 months' List2='50+ qualified leads every month for a leading fireproofing & protection firm' List3='$215k Revenue Returned From Just $10k Ad Spend' label='View Case Study' href='/' />
      </div>
    </main>
  )
}

export default page