import React from 'react'
import SubService_Hero from '../../../_component/SubService_Hero'
import { SocialMediaManagement } from '@/app/constant'
import SubService_About from '../../../_component/SubService_About'
import Service_Stats from '../../../_component/Service_Stats'
import Service_FAQ from '../../../_component/Service_FAQ'
import Service_Form from '../../../_component/Service_Form'
import { TracingBeam } from '../../../_component/tracing-beam'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Service_company from '../../../_component/Service_company'

const page = () => {
  const { title, sections } = SocialMediaManagement
  const influencer = sections[2]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={influencer} title={title} />
      <TracingBeam>
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto antialiased p-5 relative ">
          {pageContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className={twMerge("text-xl mb-10")}>
                {item.title}
              </h2>

              <div className="lg:text-lg md:text-base text-sm prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
      <SubService_About data={influencer.sections} />
      <Service_company/>
      <Service_Stats stats={influencer.stats} />
      <Service_Form />
      <Service_FAQ faq={influencer.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Elevate Your Brand with Influencer Marketing",
    description: (
      <>
        <p>Take your brand to new heights with our comprehensive influencer marketing solutions designed to boost visibility, engagement, and conversion. In today's digital age, influencers wield immense power in shaping consumer behavior and driving purchasing decisions.</p>
        <p>At Hub Eleven, we understand the importance of influencer marketing in establishing brand credibility and reaching a wider audience. Our team of experts specializes in crafting strategic influencer campaigns that align with your brand objectives and resonate with your target audience.</p>
        <p>Why Choose Our Influencer Marketing Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Strategic Expertise: With years of experience in influencer marketing, we bring strategic expertise to the table, helping you navigate the complex landscape of influencer partnerships and collaborations.</li>
          <li>Targeted Approach: We meticulously research and identify influencers who align with your brand values and appeal to your target demographic, ensuring that your message reaches the right audience.</li>
          <li>Creative Campaigns: Our team excels in crafting creative and engaging influencer campaigns that resonate with your audience and drive meaningful interactions. From sponsored content to brand collaborations, we leverage the power of storytelling to create authentic brand experiences.</li>
          <li>Performance Tracking: We provide comprehensive performance tracking and analytics, allowing you to measure the success of your influencer campaigns in real-time and make data-driven decisions to optimize performance.</li>
          <li>Continuous Optimization: Our commitment to your success doesn't end with campaign execution. We continuously monitor and optimize your influencer marketing strategy to ensure maximum results and ROI.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1675518334039-960154e902c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Maximize Your Brand's Reach with Influencer Marketing",
    description: (
      <>
        <p>Expand your brand's reach and influence with our expertly crafted influencer marketing strategies tailored to meet your business objectives. In today's digital era, influencer marketing has become a powerful tool for brands to connect with consumers and drive meaningful engagement.</p>
        <p>At Hubeleven, we leverage our expertise and industry insights to create impactful influencer campaigns that resonate with your target audience and drive real results. Whether you're looking to increase brand awareness, drive sales, or foster brand loyalty, our influencer marketing services can help you achieve your goals.</p>
        <p>Why Partner with Us for Influencer Marketing?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Influencer Identification: We utilize advanced tools and techniques to identify influencers who are the perfect fit for your brand, ensuring authentic and relevant collaborations that resonate with your audience.</li>
          <li>Strategic Planning: Our team develops comprehensive influencer marketing strategies tailored to your unique business objectives, ensuring that every campaign is aligned with your goals and delivers measurable results.</li>
          <li>Engaging Content: We work closely with influencers to create engaging and authentic content that captures the attention of your target audience and showcases your brand in a compelling way.</li>
          <li>Performance Monitoring: We provide in-depth performance monitoring and analysis, allowing you to track the success of your influencer campaigns in real-time and make data-driven decisions for optimization.</li>
          <li>Continuous Improvement: We are committed to continuous improvement and optimization, refining our strategies based on performance insights to ensure that your influencer marketing efforts drive maximum impact and ROI.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];



export default page