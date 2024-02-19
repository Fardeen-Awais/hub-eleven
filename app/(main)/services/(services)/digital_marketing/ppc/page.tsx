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

const page = () => {
  const { title, sections } = DigitalMarketing
  const ppc = sections[2]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={ppc} title={title} />
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
      <SubService_About data={ppc.sections} />
      <Service_Stats stats={ppc.stats} />
      <Service_Form />
      <Service_FAQ faq={ppc.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Data-Driven Optimization for Enhanced Online Visibility",
    description: (
      <>
        <p>Elevate your website's visibility and rankings on search engines with our comprehensive PPC services. Our data-driven optimization strategies are tailored to maximize your online presence and drive sustainable organic traffic to your website.
        </p>
        <p>Our seasoned PPC experts meticulously analyze your website's performance, conduct in-depth keyword research, and implement effective tactics to improve your search engine rankings. By staying abreast of industry trends and algorithm updates, we ensure that your website remains competitive and visible to your target audience.</p>
        <p>Whether you're looking to increase brand awareness, attract more visitors, or boost conversions, our proven PPC strategies are designed to deliver tangible results and enhance your online authority in the digital landscape.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Why Choose Our PPC Services?",
    description: (
      <>
        <p>Partnering with us for your PPC needs means collaborating with a team dedicated to your success. Here's why you should choose our PPC services:</p>
        <ol className='flex flex-col gap-5 text-gray-600'>
          <li>Proven Track Record: We have a proven track record of delivering results-driven PPC solutions for businesses across various industries. Our tailored strategies are designed to meet your unique goals and objectives, driving tangible outcomes for your business.</li>
          <li>Data-Driven Approach: Our PPC strategies are rooted in data analysis and insights. We leverage advanced analytics tools to identify opportunities, track performance metrics, and refine our strategies continuously, ensuring optimal results and ROI for your business.</li>
          <li>Customized Solutions: We understand that every business is unique, which is why we offer customized PPC solutions tailored to your specific needs and requirements. Whether you're a small startup or a large enterprise, we adapt our strategies to align with your goals and budget constraints.</li>
          <li>Transparent Communication: We believe in transparent communication and collaboration with our clients every step of the way. From initial consultation to strategy implementation and reporting, we keep you informed and involved, ensuring that you're always in the loop.</li>
          <li>Continued Support: Our commitment to your success doesn't end with the implementation of PPC strategies. We provide ongoing support, monitoring, and optimization to ensure that your website maintains its visibility and rankings in the long run, driving sustained growth and success for your business.</li>
        </ol>
      </>
    )
    ,
  },
  {
    title: "Crafting Compelling Brand Experiences through PPC",
    description: (
      <>
        <p>Our approach to PPC revolves around crafting compelling brand experiences that resonate with your target audience. By combining your business objectives with our expertise in ad optimization and audience targeting, we ensure that your ads stand out amidst the competition in search engine results. Our PPC specialists begin by conducting a thorough analysis of your market landscape and target audience. We identify key opportunities and develop tailored strategies to maximize your ad visibility, attract high-quality leads, and drive conversions. Additionally, our creative team focuses on creating engaging ad content that captivates your audience and enhances your brand's online presence. From compelling ad copy to visually appealing multimedia content, we optimize every aspect of your PPC campaigns to deliver a seamless and impactful user experience.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default page