import React from 'react'
import SubService_Hero from '../../../_component/SubService_Hero'
import SubService_About from '../../../_component/SubService_About'
import Service_Stats from '../../../_component/Service_Stats'
import Service_FAQ from '../../../_component/Service_FAQ'
import Service_Form from '../../../_component/Service_Form'
import { TracingBeam } from '../../../_component/tracing-beam'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { WebDevelopment } from '@/app/constant'

const page = () => {
  const { title, sections } = WebDevelopment
  const custome_app = sections[2]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={custome_app} title={title} />
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
      <SubService_About data={custome_app.sections} />
      <Service_Stats stats={custome_app.stats} />
      <Service_Form />
      <Service_FAQ faq={custome_app.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Empower Your Business with Custom Application Development",
    description: (
      <>
        <p>Transform your business processes and drive innovation with our custom application development services. In today's fast-paced business environment, off-the-shelf software solutions may not always meet your unique requirements and challenges.</p>
        <p>At [Your Company Name], we specialize in creating tailored applications that address your specific business needs and objectives. Whether you need a custom CRM system, an enterprise resource planning (ERP) solution, a project management tool, or any other bespoke application, our team of experienced developers will collaborate closely with you to design, develop, and deploy a solution that drives tangible results for your business.</p>
        <p>Why Choose Our Custom Application Development Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Customized Solutions: We understand that every business is unique, which is why we offer customized application development solutions tailored to your specific requirements and objectives. From initial concept to final deployment, we ensure that your application aligns with your business goals and delivers the functionality you need to succeed.</li>
          <li>Scalable Architecture: Our applications are built on scalable architecture that can grow with your business. Whether you're experiencing rapid growth or adding new features and functionalities, our solutions can easily accommodate increased user traffic, data volume, and functionality requirements without compromising performance.</li>
          <li>Intuitive User Experience: We prioritize user experience in our application development process, creating intuitive interfaces and workflows that make it easy for users to accomplish tasks and achieve their goals. By optimizing usability, we enhance user satisfaction and drive adoption rates for your application.</li>
          <li>Integration Capabilities: Our applications are designed to integrate seamlessly with your existing systems and workflows, allowing for smooth data exchange and collaboration across your organization. Whether you need to integrate with third-party APIs, databases, or internal systems, we ensure that your application functions cohesively within your ecosystem.</li>
          <li>Continuous Support and Maintenance: We provide ongoing support and maintenance services to ensure that your application remains secure, up-to-date, and optimized for performance. From regular updates and security patches to troubleshooting and technical support, we're here to ensure that your application continues to deliver value to your business over time.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Why Invest in Custom Application Development?",
    description: (
      <>
        <p>Investing in custom application development can provide significant benefits for your business, helping you streamline operations, improve efficiency, and gain a competitive edge in the market. Whether you need to automate repetitive tasks, enhance collaboration among team members, or deliver personalized experiences to your customers, custom applications offer a versatile and scalable solution to address your business needs.</p>
        <p>Here are some compelling reasons why you should consider investing in custom application development:</p>
        <ol className='flex flex-col gap-5 text-gray-600'>
          <li>Increased Efficiency: Custom applications are tailored to your specific business processes and workflows, allowing you to automate repetitive tasks, eliminate manual errors, and streamline operations. By optimizing efficiency, you can reduce costs, save time, and focus on strategic initiatives that drive business growth.</li>
          <li>Enhanced Productivity: Custom applications empower your team members to work more efficiently and collaboratively, regardless of their location or device. By providing access to real-time data, tools, and resources, you can improve communication, coordination, and decision-making across your organization, leading to increased productivity and innovation.</li>
          <li>Competitive Advantage: Custom applications give you a competitive edge by providing unique features and functionalities that differentiate your business from competitors. Whether it's delivering personalized experiences to customers, offering self-service portals for partners, or implementing advanced analytics for data-driven decision-making, custom applications enable you to stay ahead of the curve and meet evolving market demands.</li>
          <li>Scalable Growth: Custom applications are built on scalable architecture that can grow with your business. Whether you're expanding your user base, adding new features and functionalities, or entering new markets, custom applications can accommodate increased user traffic, data volume, and functionality requirements without sacrificing performance or reliability.</li>
          <li>Enhanced Customer Experience: Custom applications allow you to deliver tailored experiences to your customers, providing personalized content, recommendations, and interactions based on their preferences and behavior. By enhancing the customer experience, you can increase satisfaction, loyalty, and retention, driving long-term value for your business.</li>
        </ol>
      </>
    ),
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export default page