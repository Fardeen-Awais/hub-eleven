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
  const { title, description, sections, stats, image } = DigitalMarketing
  const amazon = sections[0]
  return (
    <section className='flex flex-col max-w-screen min-h-screen items-center justify-start gap-5 w-full mx-auto overflow-hidden'>
      <SubService_Hero amazon={amazon} title={title} />
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
      <SubService_About data={amazon.sections} />
      <Service_Stats stats={stats} />
      <Service_Form />
      <Service_FAQ faq={amazon.faq} />
    </section>
  )
}

const pageContent = [
  {
    title: "Amazon Advertising",
    description: (
      <>
        <p>
        Are you a brand navigating the complex landscape of Amazon's Vendor Central or Seller Central platforms, or perhaps considering venturing into this expansive marketplace? Look no further, as our agency specializes in managing sponsored ad campaigns and optimizing product listings on Amazon.
        </p>
        <p>
        Led by a team of seasoned Amazon-certified search marketers, we possess a deep understanding of the intricate strategies required to propel your products to retail success and foster business growth within the Amazon ecosystem. With a keen eye for detail and a commitment to excellence, we work tirelessly to ensure that your products are not only visible but stand out amidst the competition.
        </p>
        <p>
        At our agency, we prioritize results-driven approaches that are firmly rooted in data analysis. By meticulously optimizing your ad campaigns and product listings, we aim to enhance your brand's visibility, reduce unnecessary ad spend, and ultimately drive significant returns on your investments. Our tailored strategies are designed to attract new customers while fostering loyalty among existing ones, paving the way for sustained growth and profitability in the dynamic realm of Amazon commerce.
        </p>
        <p>
        With our comprehensive suite of Amazon digital marketing services, you can trust us to navigate the complexities of the platform, optimize your presence, and unlock the full potential of your brand within the world's largest online marketplace.
        </p>
      </>
    ),
    image:
      "https://images.pexels.com/photos/907607/pexels-photo-907607.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Why work with tigerbond?",
    description: (
      <>
        <p>
          At HubEleven, we're more than just another digital marketing agency—we're your strategic partner in navigating the ever-evolving landscape of Amazon commerce. Here's why you should choose us:
        </p>
        <ol className='flex flex-col gap-5 text-gray-600'>
          <li>
            Bespoke Amazon Campaigns: Our team specializes in crafting bespoke Amazon campaigns that are meticulously designed to propel your business to new heights in the online realm. Whether you're aiming to increase sales, boost brand visibility, or expand your market reach, our tailored campaigns are geared towards helping you achieve your unique business objectives.
          </li>
          <li>
            Data-Driven Creativity: We believe in the power of combining data-driven insights with creative innovation. By leveraging advanced analytics and cutting-edge techniques, we generate ad strategies that are not only effective but also tailored specifically to your goals. Our holistic approach ensures that every aspect of your campaign is optimized for maximum impact and results.
          </li>
          <li>
            Multidisciplinary Expertise: At HubEleven, our team consists of multidisciplinary experts who excel in various facets of digital marketing, including SEO and PPC. Drawing upon their diverse skill sets and extensive experience, our experts work collaboratively to develop comprehensive strategies that align seamlessly with your business goals and objectives.
          </li>
          <li>
            Optimized Product Listings: In addition to our advertising prowess, we also specialize in optimizing product listings to enhance visibility and drive conversions. From keyword optimization to compelling product descriptions, we ensure that your listings stand out amidst the competition, attracting more customers and driving sales.
          </li>
          <li>
            With HubEleven as your trusted partner, you can rest assured that your Amazon business is in capable hands. Let us help you unlock the full potential of your brand in the dynamic world of e-commerce.
          </li>
        </ol>
      </>
    )    
  },
  {
    title: "Crafting Compelling Brand Experiences",
    description: (
      <>
        <p>
          Our approach to Amazon revolves around crafting compelling brand experiences that resonate with your target audience. By combining your objectives with our tried-and-tested methods of content optimization and media activation, built on years of delivering effective SEO and PPC campaigns, we ensure that your brand stands out amidst the competition on the Amazon platform.
        </p>
        <p>
          Our Amazon experts begin by setting up and analyzing your existing Vendor Central or Seller Central Amazon account to assess your brand’s performance. Using the data gathered, we develop integrated strategies that blend paid and organic activity to maximize product visibility, leading to increased sales and revenue. Through a mix of PPC and SEO tactics, we create a full-funnel strategy aimed at targeting customers at every stage of their Amazon journey, generating both new and returning customers for your brand.
        </p>
        <p>
          Additionally, our in-house creative team focuses on creating great content that enhances your branding, product packaging, and creative assets for use on the Amazon platform. By delivering a brand-led experience with clarity of messaging, we increase views of your products on Amazon, translating into profitable results for your business.
        </p>
      </>
    ),
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
];
export default page