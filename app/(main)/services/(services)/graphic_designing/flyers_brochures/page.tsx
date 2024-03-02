import React from 'react'
import SubService_Hero from '../../../_component/SubService_Hero'
import SubService_About from '../../../_component/SubService_About'
import Service_Stats from '../../../_component/Service_Stats'
import Service_FAQ from '../../../_component/Service_FAQ'
import Service_Form from '../../../_component/Service_Form'
import { TracingBeam } from '../../../_component/tracing-beam'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { GraphicDesigning} from '@/app/constant'
import Service_company from '../../../_component/Service_company'

const page = () => {
  const { title, sections } = GraphicDesigning
  const flyers = sections[2]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={flyers} title={title} />
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
      <SubService_About data={flyers.sections} />
      <Service_company/>
      <Service_Stats stats={flyers.stats} />
      <Service_Form />
      <Service_FAQ faq={flyers.faq} />
    </section>
  )
}

 
const pageContent = [
  {
    title: "Create Eye-Catching Flyers and Brochures with Our Design Services",
    description: (
      <>
        <p>Make a lasting impression and captivate your audience with stunning flyers and brochures designed to showcase your brand, products, and services. At [Your Company Name], we specialize in creating eye-catching marketing materials that grab attention, communicate your message effectively, and drive results.</p>
        <p>Our team of talented designers combines creativity with strategic thinking to deliver designs that resonate with your target audience and align with your brand identity. Whether you're promoting a special event, launching a new product, or showcasing your business offerings, our flyer and brochure design services are tailored to meet your specific needs and objectives.</p>
        <p>Why Choose Our Flyer and Brochure Design Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Customized Designs: We understand that every business is unique, and that's why we offer personalized flyer and brochure designs that reflect your brand identity and messaging. From concept to completion, we work closely with you to ensure that your marketing materials stand out and leave a lasting impression on your audience.</li>
          <li>Compelling Visuals: Our designers are experts at creating compelling visuals that capture attention and communicate your message effectively. Whether it's bold graphics, captivating imagery, or striking typography, we leverage design elements to create marketing materials that resonate with your audience and drive engagement.</li>
          <li>Creative Concepts: We believe in thinking outside the box and pushing the boundaries of design creativity. Our designers bring fresh ideas and innovative concepts to the table, ensuring that your flyers and brochures are not only visually appealing but also memorable and impactful.</li>
          <li>Effective Communication: We understand the importance of clear and concise communication in marketing materials. Our designers focus on organizing information in a way that is easy to understand and digest, ensuring that your message resonates with your audience and drives action.</li>
          <li>Print-Ready Designs: Whether you're planning to print your flyers and brochures in-house or through a professional printing service, our designs are optimized for print, ensuring high-quality results every time. We provide print-ready files in the format of your choice, making it easy to bring your marketing materials to life.</li>
          <li>Timely Delivery: We know that time is of the essence when it comes to marketing campaigns, and that's why we prioritize timely delivery of our design services. Whether you have a tight deadline or need last-minute revisions, you can count on us to deliver high-quality designs on time and within budget.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1571420632775-096b42bee0c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Why Invest in Professional Flyer and Brochure Design?",
    description: (
      <>
        <p>Investing in professional flyer and brochure design is essential for businesses looking to make a strong impression and stand out in a crowded marketplace. In today's digital age, where attention spans are short and competition is fierce, high-quality marketing materials can make all the difference in capturing the attention of your audience and driving engagement.</p>
        <p>Here are some compelling reasons why you should consider investing in professional flyer and brochure design:</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Enhanced Brand Perception: Professionally designed flyers and brochures convey professionalism, credibility, and attention to detail, enhancing the perception of your brand in the eyes of your audience. By investing in high-quality design, you can differentiate yourself from competitors and position your brand as a leader in your industry.</li>
          <li>Increased Engagement: Eye-catching visuals and compelling messaging grab attention and encourage engagement with your marketing materials. Professionally designed flyers and brochures are more likely to be noticed and remembered by your audience, leading to increased brand awareness, customer interest, and ultimately, conversions.</li>
          <li>Targeted Messaging: Effective flyer and brochure design allow you to communicate your message clearly and concisely, targeting specific demographics, interests, and pain points of your audience. Whether you're promoting a new product, announcing a special offer, or showcasing your services, targeted messaging increases the relevance and effectiveness of your marketing efforts.</li>
          <li>Print and Digital Integration: Professionally designed flyers and brochures can be seamlessly integrated into both print and digital marketing campaigns, maximizing their reach and impact. Whether distributed in-person, mailed to customers, or shared online, versatile marketing materials ensure consistent branding and messaging across channels.</li>
          <li>Measurable Results: With professional flyer and brochure design, you can track the effectiveness of your marketing campaigns and measure the ROI of your design investments. By analyzing metrics such as engagement rates, response rates, and conversion rates, you can gain valuable insights into the effectiveness of your marketing materials and refine your strategies for future success.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];





export default page