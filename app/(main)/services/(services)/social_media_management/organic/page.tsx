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

const page = () => {
  const { title, sections } = SocialMediaManagement
  const organic = sections[0]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={organic} title={title} />
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
      <SubService_About data={organic.sections} />
      <Service_Stats stats={organic.stats} />
      <Service_Form />
      <Service_FAQ faq={organic.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Maximize Your Brand's Reach with Social Media Organic Services",
    description: (
      <>
        <p>Expand your brand's reach and influence with our expertly crafted social media organic services tailored to meet your business objectives. In today's digital era, social media has become a powerful tool for brands to connect with consumers and drive meaningful engagement.</p>
        <p>At HubEleven, we leverage our expertise and industry insights to create impactful organic social media strategies that resonate with your target audience and drive real results. Whether you're looking to increase brand awareness, drive sales, or foster brand loyalty, our social media organic services can help you achieve your goals.</p>
        <p>Why Partner with Us for Social Media Organic Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Strategic Planning: Our team develops comprehensive social media organic strategies tailored to your unique business objectives, ensuring that every campaign is aligned with your goals and delivers measurable results.</li>
          <li>Content Creation: We create engaging and authentic content that captures the attention of your target audience and showcases your brand in a compelling way, fostering meaningful interactions and brand loyalty.</li>
          <li>Community Engagement: We actively engage with your audience, fostering meaningful conversations and building strong relationships with your followers to drive long-term brand loyalty and advocacy.</li>
          <li>Performance Monitoring: We provide in-depth performance monitoring and analysis, allowing you to track the success of your organic social media efforts in real-time and make data-driven decisions for optimization.</li>
          <li>Continuous Improvement: We are committed to continuous improvement and optimization, refining our strategies based on performance insights to ensure that your organic social media efforts drive maximum impact and ROI.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Enhance Your Brand's Presence with Social Media Organic Services",
    description: (
      <>
        <p>Take your brand to the next level with our expertly crafted social media organic services designed to boost visibility, engagement, and loyalty. In today's digital age, social media platforms like Facebook, Instagram, and Twitter offer unparalleled opportunities for brands to connect with their target audience and achieve their marketing goals.</p>
        <p>At [Your Company Name], we harness the power of organic social media strategies to help you maximize your brand's reach, engagement, and conversions. Our team of experts is dedicated to crafting strategic organic social media campaigns that resonate with your audience and drive tangible results for your business.</p>
        <p>Why Choose Our Social Media Organic Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Strategic Expertise: With years of experience in social media marketing, we bring strategic expertise to the table, helping you navigate the complexities of social media platforms and optimize your campaigns for success.</li>
          <li>Engaging Content: We create compelling and authentic content that captures the attention of your audience and fosters meaningful interactions, driving engagement and loyalty for your brand.</li>
          <li>Community Building: We actively engage with your audience, building strong relationships and fostering a sense of community around your brand, leading to increased brand advocacy and loyalty.</li>
          <li>Performance Tracking: We provide comprehensive performance tracking and analytics, allowing you to monitor the success of your organic social media campaigns in real-time and make data-driven decisions to optimize performance and maximize ROI.</li>
          <li>Continuous Optimization: Our commitment to your success doesn't end with campaign deployment. We continuously monitor and optimize your organic social media strategy based on performance insights and industry best practices, ensuring that your efforts deliver maximum impact and value for your business.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];


export default page