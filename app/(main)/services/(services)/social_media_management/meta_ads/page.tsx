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
  const metaads = sections[1]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={metaads} title={title} />
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
      <SubService_About data={metaads.sections} />
      <Service_company/>
      <Service_Stats stats={metaads.stats} />
      <Service_Form />
      <Service_FAQ faq={metaads.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Elevate Your Brand with Meta Ads",
    description: (
      <>
        <p>Take your brand to new heights with our comprehensive meta ads services designed to boost visibility, engagement, and conversion. In today's digital era, meta advertising platforms like Facebook and Instagram offer unparalleled opportunities for brands to connect with their target audience and achieve their marketing objectives.</p>
        <p>At Hubeleven, we harness the power of meta ads to help you maximize your brand's reach, engagement, and conversions. Our team of experts is dedicated to crafting strategic meta ads campaigns that resonate with your audience and drive tangible results for your business.</p>
        <p>Why Choose Our Meta Ads Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Strategic Expertise: With years of experience in meta ads, we bring strategic expertise to the table, helping you navigate the complexities of meta advertising platforms and optimize your campaigns for success.</li>
          <li>Targeted Approach: We utilize advanced targeting options offered by meta advertising platforms to reach your ideal audience with precision, ensuring that your ads are seen by the right people at the right time.</li>
          <li>Creative Campaigns: Our team excels in crafting creative and engaging meta ads campaigns that capture the attention of your audience and drive meaningful interactions. From eye-catching visuals to compelling ad copy, we ensure that your ads stand out amidst the competition.</li>
          <li>Performance Tracking: We provide comprehensive performance tracking and analytics, allowing you to monitor the success of your meta ads campaigns in real-time and make data-driven decisions to optimize performance and maximize ROI.</li>
          <li>Continuous Optimization: Our commitment to your success doesn't end with campaign deployment. We continuously monitor and optimize your meta ads strategy based on performance insights and industry best practices, ensuring that your ads deliver maximum impact and value for your business.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Maximize Your Brand's Reach with Meta Ads",
    description: (
      <>
        <p>Expand your brand's reach and influence with our expertly crafted meta ads strategies tailored to meet your business objectives. In today's digital era, meta advertising has become a powerful tool for brands to connect with consumers and drive meaningful engagement.</p>
        <p>At Hubeleven, we leverage our expertise and industry insights to create impactful meta ads campaigns that resonate with your target audience and drive real results. Whether you're looking to increase brand awareness, drive sales, or foster brand loyalty, our meta ads services can help you achieve your goals.</p>
        <p>Why Partner with Us for Meta Ads?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Strategic Planning: Our team develops comprehensive meta ads strategies tailored to your unique business objectives, ensuring that every campaign is aligned with your goals and delivers measurable results.</li>
          <li>Influencer Identification: We utilize advanced tools and techniques to identify influencers who are the perfect fit for your brand, ensuring authentic and relevant collaborations that resonate with your audience.</li>
          <li>Engaging Content: We work closely with influencers to create engaging and authentic content that captures the attention of your target audience and showcases your brand in a compelling way.</li>
          <li>Performance Monitoring: We provide in-depth performance monitoring and analysis, allowing you to track the success of your meta ads campaigns in real-time and make data-driven decisions for optimization.</li>
          <li>Continuous Improvement: We are committed to continuous improvement and optimization, refining our strategies based on performance insights to ensure that your meta ads efforts drive maximum impact and ROI.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1636114673156-052a83459fc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];



export default page