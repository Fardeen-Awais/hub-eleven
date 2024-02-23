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
  const buisines_site = sections[1]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={buisines_site} title={title} />
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
      <SubService_About data={buisines_site.sections} />
      <Service_Stats stats={buisines_site.stats} />
      <Service_Form />
      <Service_FAQ faq={buisines_site.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Build Your Professional Business Website with Us",
    description: (
      <>
        <p>Elevate your business's online presence and drive growth with our expertly crafted business website development solutions. In today's digital age, having a professional and user-friendly website is essential for attracting customers, showcasing your products or services, and establishing credibility in the market.</p>
        <p>At Hub Eleven, we specialize in creating customized business websites tailored to meet the unique needs and objectives of your enterprise. Whether you're a small startup aiming to make a big impact or a large corporation seeking to optimize your online presence, our team of experienced developers will collaborate closely with you to design and develop a website that reflects your brand identity and achieves your business goals.</p>
        <p>Why Choose Our Business Website Development Solutions?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Customized Solutions: We understand that every business has its own identity and goals. That's why we offer personalized website development solutions that cater to your specific requirements and objectives. From design to functionality, we ensure that your website is a true representation of your brand and delivers a seamless experience for your visitors.</li>
          <li>User-Friendly Interface: We prioritize user experience in our website development process, creating intuitive interfaces and navigation paths that make it easy for visitors to explore your site, find what they need, and take action. By enhancing usability, we help you convert more visitors into customers and drive business growth.</li>
          <li>Responsive Design: With the increasing use of mobile devices, having a responsive website is crucial for reaching and engaging with your audience across different devices and screen sizes. We design and develop responsive websites that adapt seamlessly to various devices, ensuring a consistent and enjoyable browsing experience for all users.</li>
          <li>Search Engine Optimization (SEO): We integrate SEO best practices into our website development process to help your site rank higher in search engine results and attract more organic traffic. By optimizing your site's structure, content, and performance, we improve its visibility and discoverability, driving more qualified leads to your business.</li>
          <li>Scalability and Growth: Our business website solutions are designed to grow with your business. Whether you're expanding your product offerings, targeting new markets, or adding new features and functionalities, we ensure that your website can scale seamlessly to accommodate your evolving needs and objectives.</li>
          <li>Continuous Support and Maintenance: We provide ongoing support and maintenance services to ensure that your website remains secure, up-to-date, and optimized for performance. From regular updates and security patches to troubleshooting and technical support, we're here to ensure that your website continues to deliver value to your business over time.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Why Invest in a Professional Business Website?",
    description: (
      <>
        <p>Investing in a professional business website is essential for companies seeking to establish a strong online presence, attract customers, and drive growth. In today's digital-centric world, your website serves as the virtual storefront of your business, making a lasting impression on potential customers and influencing their purchasing decisions.</p>
        <p>Here are some compelling reasons why you should consider investing in a professional business website:</p>
        <ol className='flex flex-col gap-5 text-gray-600'>
          <li>Enhanced Credibility: A professionally designed and well-maintained website instills trust and confidence in your brand, positioning your business as a credible and reputable authority in your industry. With a polished online presence, you can attract more customers and differentiate yourself from competitors.</li>
          <li>Expanded Reach: A business website provides a global platform for showcasing your products or services to a broader audience. By leveraging the power of the internet, you can reach potential customers around the world, increase brand awareness, and expand your market reach beyond geographical boundaries.</li>
          <li>24/7 Accessibility: Unlike traditional brick-and-mortar stores, a business website is accessible to customers 24/7, allowing them to learn about your offerings, make purchases, and contact your business at their convenience. This round-the-clock accessibility enhances customer convenience and drives sales even outside of regular business hours.</li>
          <li>Increased Sales Opportunities: With an online presence, you can capitalize on a wide range of sales opportunities, including e-commerce transactions, lead generation, appointment bookings, and more. By providing multiple avenues for customers to engage with your business, you can maximize revenue potential and drive business growth.</li>
          <li>Data-driven Insights: A business website provides valuable insights into customer behavior, preferences, and interactions with your brand. By analyzing website analytics and user feedback, you can gain valuable insights that inform strategic decisions, refine marketing strategies, and optimize the customer experience to drive conversions and retention.</li>
        </ol>
      </>
    ),
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];




export default page