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
  const ecommerce = sections[0]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={ecommerce} title={title} />
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
      <SubService_About data={ecommerce.sections} />
      <Service_Stats stats={ecommerce.stats} />
      <Service_Form />
      <Service_FAQ faq={ecommerce.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Drive Online Sales with Ecommerce Development Solutions",
    description: (
      <>
        <p>Elevate your brand's online presence and boost your sales with our expertly crafted ecommerce development solutions. In today's digital landscape, having a robust and user-friendly ecommerce platform is essential for success in the competitive online marketplace.</p>
        <p>At [Your Company Name], we specialize in creating customized ecommerce websites tailored to meet the unique needs and objectives of your business. Whether you're a small startup or a large enterprise, our team of experienced developers will work closely with you to design and develop an ecommerce platform that not only looks great but also drives conversions and revenue.</p>
        <p>Why Choose Our Ecommerce Development Solutions?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Customized Solutions: We understand that every business is different, which is why we offer customized ecommerce development solutions to suit your specific requirements and goals. From design to functionality, we ensure that your ecommerce platform reflects your brand identity and delivers a seamless shopping experience for your customers.</li>
          <li>User-Friendly Interface: We prioritize user experience in our ecommerce development process, creating intuitive interfaces and navigation paths that make it easy for customers to browse, shop, and checkout. By optimizing usability, we help you reduce cart abandonment rates and increase sales.</li>
          <li>Secure Payment Gateways: We integrate secure payment gateways into your ecommerce platform, providing your customers with peace of mind during the checkout process. With robust security measures in place, you can build trust and credibility with your audience and protect sensitive customer data.</li>
          <li>Scalability and Flexibility: Our ecommerce solutions are designed to scale with your business and adapt to changing market demands. Whether you're experiencing rapid growth or expanding into new markets, we ensure that your ecommerce platform can accommodate increased traffic and functionality requirements.</li>
          <li>Continuous Support and Maintenance: Our commitment to your success extends beyond the initial development phase. We provide ongoing support and maintenance services to ensure that your ecommerce platform remains secure, up-to-date, and optimized for performance.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Why Invest in Ecommerce Development?",
    description: (
      <>
        <p>Investing in ecommerce development is crucial for businesses looking to capitalize on the growing trend of online shopping and digital commerce. With consumers increasingly turning to the internet to research and purchase products and services, having a strong ecommerce presence is essential for driving sales and staying competitive in today's market.</p>
        <p>Here are some reasons why you should consider investing in ecommerce development:</p>
        <ol className='flex flex-col gap-5 text-gray-600'>
          <li>Global Reach: An ecommerce platform allows you to reach a global audience and expand your market reach beyond geographical boundaries. With the right marketing strategies in place, you can attract customers from around the world and grow your business exponentially.</li>
          <li>24/7 Availability: Unlike traditional brick-and-mortar stores, ecommerce websites are open 24/7, allowing customers to shop at their convenience. This flexibility not only enhances the customer experience but also enables you to generate sales around the clock, increasing revenue potential.</li>
          <li>Lower Overheads: Operating an ecommerce store typically incurs lower overhead costs compared to physical retail outlets. With fewer expenses related to rent, utilities, and staffing, you can allocate more resources towards marketing, product development, and other growth initiatives.</li>
          <li>Data-Driven Insights: Ecommerce platforms provide valuable data and insights into customer behavior, preferences, and purchase patterns. By analyzing this data, you can gain a deeper understanding of your target audience and refine your marketing strategies to drive engagement and conversions.</li>
          <li>Scalable Growth: Ecommerce platforms offer scalability, allowing you to expand your product offerings, reach new markets, and accommodate increased traffic and sales volume as your business grows. This scalability ensures that your ecommerce platform can adapt to changing business needs and market dynamics.</li>
        </ol>
      </>
    ),
    image: "https://images.unsplash.com/photo-1562280963-8a5475740a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D",
  }
];


export default page