import React from 'react'
import SubService_Hero from '../../../_component/SubService_Hero'
import { DigitalMarketing } from '@/app/constant'
import SubService_About from '../../../_component/SubService_About'
import Service_Stats from '../../../_component/Service_Stats'
import Service_FAQ from '../../../_component/Service_FAQ'
import Service_Form from '../../../_component/Service_Form'
import { TracingBeam } from '../../../_component/tracing-beam'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Service_company from '../../../_component/Service_company'

const page = () => {
  const { title, sections } = DigitalMarketing
  const email = sections[3]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={email} title={title} />
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
      <SubService_About data={email.sections} />
      <Service_company/>
      <Service_Stats stats={email.stats} />
      <Service_Form />
      <Service_FAQ faq={email.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Strategic Email Marketing Solutions for Business Growth",
    description: (
      <>
        <p>Transform your business with our strategic email marketing solutions tailored to drive growth and engagement. Our email marketing services are designed to help you build meaningful connections with your audience, nurture leads, and maximize conversions.</p>
        <p>At our core, we believe in the power of personalized communication. Our email marketing experts craft compelling email campaigns that resonate with your target audience, delivering the right message to the right people at the right time.</p>
        <p>From welcome emails to promotional offers and automated drip campaigns, we leverage advanced segmentation and targeting techniques to deliver highly relevant content that drives engagement and fosters brand loyalty.</p>
        <p>With our data-driven approach, we analyze campaign performance metrics and user behavior to optimize your email marketing strategy continuously. By tracking key metrics such as open rates, click-through rates, and conversion rates, we ensure that your campaigns deliver measurable results and ROI.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Why Choose Our Email Marketing Services?",
    description: (
      <>
        <p>Partnering with us for your email marketing needs means collaborating with a team dedicated to your success. Here's why you should choose our email marketing services:</p>
        <ol className='flex flex-col gap-5 text-gray-600'>
          <li>Expertise and Experience: We bring years of expertise and experience in email marketing, helping businesses across various industries achieve their marketing goals and objectives.</li>
          <li>Personalized Approach: We understand that every business is unique, which is why we tailor our email marketing strategies to align with your specific needs and target audience, ensuring maximum effectiveness and engagement.</li>
          <li>Advanced Segmentation: Our advanced segmentation techniques allow us to target the right audience segments with highly relevant content, driving higher engagement and conversion rates.</li>
          <li>Performance Tracking: We provide comprehensive performance tracking and analytics, allowing you to monitor the success of your email campaigns in real-time and make data-driven decisions to optimize performance.</li>
          <li>Continuous Optimization: Our commitment to your success doesn't end with campaign deployment. We continuously optimize your email marketing strategy based on performance insights and industry best practices to ensure maximum results and ROI.</li>
        </ol>
      </>
    ),
  },
  {
    title: "Crafting Compelling Brand Experiences through Email Marketing",
    description: (
      <>
        <p>Our approach to email marketing revolves around crafting compelling brand experiences that resonate with your audience and drive meaningful engagement. By combining creative storytelling with data-driven insights, we create email campaigns that captivate your subscribers and foster long-term brand loyalty.</p>
        <p>From captivating subject lines to personalized content and eye-catching visuals, we ensure that every email we send reflects your brand's identity and values, leaving a lasting impression on your audience.</p>
        <p>Additionally, we leverage marketing automation and behavioral triggers to deliver timely and relevant messages that guide your subscribers through the customer journey, from awareness to conversion and beyond.</p>
        <p>With our email marketing services, you can unlock the full potential of your marketing efforts, build stronger relationships with your audience, and drive sustained growth and success for your business.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];


export default page