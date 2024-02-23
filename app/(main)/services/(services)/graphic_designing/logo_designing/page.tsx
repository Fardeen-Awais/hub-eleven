import React from 'react'
import SubService_Hero from '../../../_component/SubService_Hero'
import SubService_About from '../../../_component/SubService_About'
import Service_Stats from '../../../_component/Service_Stats'
import Service_FAQ from '../../../_component/Service_FAQ'
import Service_Form from '../../../_component/Service_Form'
import { TracingBeam } from '../../../_component/tracing-beam'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { ContentCreation} from '@/app/constant'

const page = () => {
  const { title, sections } = ContentCreation
  const content_creation = sections[0]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={content_creation} title={title} />
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
      <SubService_About data={content_creation.sections} />
      <Service_Stats stats={content_creation.stats} />
      <Service_Form />
      <Service_FAQ faq={content_creation.faq} />
    </section>
  )
}
const pageContent = [
    {
      title: "Make an Branded logo design",
      description: (
        <>
          <p>Make a lasting impression and stand out from the competition with our custom logo design services. Your logo is the visual cornerstone of your brand identity, representing your values, personality, and mission.</p>
          <p>At Hubeleven, we specialize in creating unique and memorable logos that resonate with your target audience and leave a lasting impression. Whether you're launching a new brand or rebranding your business, our team of talented designers will collaborate closely with you to bring your vision to life.</p>
          <p>Why Choose Our Logo Design Services?</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>Custom Design Solutions: We understand that every brand is unique. That's why we offer custom logo design solutions tailored to your brand's personality, values, and target audience. From minimalist and modern designs to bold and vibrant logos, we create designs that reflect your brand identity and resonate with your audience.</li>
            <li>Strategic Branding: Our logo design process is guided by strategic branding principles, ensuring that your logo aligns with your brand's positioning and messaging. We conduct in-depth research into your industry, competitors, and target audience to create a logo that sets you apart and communicates your brand's story effectively.</li>
            <li>Timeless and Versatile Designs: We create logos that stand the test of time and remain relevant as your business evolves. Our designs are scalable, adaptable, and versatile, allowing you to use them across various marketing collateral, from business cards and websites to social media profiles and merchandise.</li>
            <li>Professionalism and Creativity: Our team of experienced designers combines professionalism with creativity to deliver exceptional results. We leverage the latest design trends, tools, and techniques to create logos that are visually striking, memorable, and impactful.</li>
            <li>Collaborative Process: We believe in collaboration and transparency throughout the design process. We work closely with you to understand your vision, preferences, and feedback, ensuring that the final logo design exceeds your expectations and accurately represents your brand.</li>
            <li>Customer Satisfaction Guaranteed: Your satisfaction is our top priority. We offer unlimited revisions until you're completely satisfied with the final design. Our goal is to create a logo that not only meets but exceeds your expectations and helps you achieve your branding goals.</li>
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1598367815092-a2c0cbc1ea3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Why Invest in Professional Logo Design?",
      description: (
        <>
          <p>Investing in professional logo design is essential for businesses looking to establish a strong brand identity, build credibility, and stand out in the market. Your logo is the first thing customers notice about your brand, and it plays a crucial role in shaping their perception and influencing their purchasing decisions.</p>
          <p>Here are some compelling reasons why you should consider investing in professional logo design:</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>Brand Recognition: A professionally designed logo helps your brand stand out in a crowded marketplace and fosters instant recognition among your target audience. A unique and memorable logo sets you apart from competitors and makes your brand more memorable and recognizable.</li>
            <li>Established Brand Identity: Your logo is the visual representation of your brand's identity, values, and mission. A well-designed logo communicates professionalism, trustworthiness, and reliability, helping you establish a strong brand identity and build credibility with your audience.</li>
            <li>First Impression: Your logo is often the first point of contact between your brand and potential customers. A professionally designed logo creates a positive first impression, conveying professionalism, quality, and attention to detail. A well-designed logo builds trust and encourages customers to engage with your brand.</li>
            <li>Scalability and Versatility: A professionally designed logo is versatile and scalable, allowing you to use it across various marketing channels and platforms. Whether it's on your website, social media profiles, business cards, or merchandise, your logo maintains its visual integrity and impact.</li>
            <li>Long-term Investment: Your logo is a long-term investment in your brand's success and growth. A well-designed logo can withstand the test of time and remain relevant and effective for years to come. By investing in professional logo design, you're investing in the future success and longevity of your brand.</li>
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1655437448243-08a76744b048?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  




export default page