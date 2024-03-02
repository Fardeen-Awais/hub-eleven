import React from 'react'
import SubService_Hero from '../../../_component/SubService_Hero'
import SubService_About from '../../../_component/SubService_About'
import Service_Stats from '../../../_component/Service_Stats'
import Service_FAQ from '../../../_component/Service_FAQ'
import Service_Form from '../../../_component/Service_Form'
import { TracingBeam } from '../../../_component/tracing-beam'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { ContentCreation } from '@/app/constant'
import Service_company from '../../../_component/Service_company'

const page = () => {
  const { title, sections } = ContentCreation
  const videography = sections[1]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={videography} title={title} />
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
      <SubService_About data={videography.sections} />
      <Service_company/>
      <Service_Stats stats={videography.stats} />
      <Service_Form />
      <Service_FAQ faq={videography.faq} />
    </section>
  )
}
const pageContent = [
  {
    title: "Elevate Your Brand with Professional Video Production",
    description: (
      <>
        <p>Transform your brand's message into captivating visual stories with our professional video production services. In today's digital era, video content has become a powerful tool for engaging audiences, conveying messages effectively, and standing out in a crowded market.</p>
        <p>At Hub Eleven, we specialize in creating high-quality videos that resonate with your target audience and drive meaningful results for your business. Whether you need promotional videos, corporate documentaries, product demonstrations, or event coverage, our team of experienced videographers and editors will work closely with you to bring your vision to life.</p>
        <p>Why Choose Our Video Production Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Customized Solutions: We understand that every brand has its own story to tell. That's why we offer personalized video production solutions tailored to your unique requirements and objectives. From concept development to post-production, we ensure that your videos reflect your brand identity and resonate with your audience.</li>
          <li>Creative Excellence: Our team of skilled professionals combines creativity with technical expertise to produce visually stunning and compelling videos. Whether it's crafting a captivating narrative, capturing breathtaking visuals, or integrating dynamic graphics and effects, we strive for excellence in every aspect of video production.</li>
          <li>Strategic Approach: We take a strategic approach to video production, aligning our creative efforts with your business goals and target audience. Whether you're aiming to increase brand awareness, drive conversions, or educate your audience, we develop video content that delivers the right message to the right people at the right time.</li>
          <li>Professional Quality: With state-of-the-art equipment and industry-leading techniques, we ensure that your videos meet the highest standards of quality and professionalism. From filming in stunning 4K resolution to delivering crisp audio and smooth transitions, we pay attention to every detail to create videos that leave a lasting impression.</li>
          <li>Timely Delivery: We understand the importance of timely delivery in today's fast-paced business environment. Our streamlined production process and efficient project management enable us to deliver high-quality videos within agreed timelines, ensuring that your content is ready to engage your audience when you need it most.</li>
          <li>Collaborative Partnership: We believe in building collaborative partnerships with our clients, working closely with you throughout the production process to ensure that your vision is realized. From initial concept discussions to final edits, we value your input and feedback every step of the way, ensuring that the end result exceeds your expectations.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];


export default page