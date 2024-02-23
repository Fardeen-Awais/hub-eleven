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
    title: "Craft Exceptional User Experiences with Our UI/UX Design Services",
    description: (
      <>
        <p>Elevate your digital presence and engage your audience with intuitive and visually appealing user interfaces. At Hubeleven, we specialize in crafting exceptional user experiences through our comprehensive UI/UX design services.</p>
        <p>Our team of skilled designers combines creativity with strategic thinking to create interfaces that not only look stunning but also enhance usability and drive conversions. Whether you're launching a new product or revamping an existing platform, our UI/UX design solutions are tailored to meet your specific needs and goals.</p>
        <p>Why Choose Our UI/UX Design Services?</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>User-Centric Approach: We put your users at the center of our design process, focusing on understanding their needs, preferences, and behaviors. By empathizing with your audience, we create interfaces that are intuitive, user-friendly, and tailored to meet their expectations.</li>
          <li>Strategic Design Thinking: Our UI/UX design process is guided by strategic thinking and data-driven insights. We conduct thorough research and analysis to identify opportunities for improvement and design solutions that address your business objectives while delivering exceptional user experiences.</li>
          <li>Visual Excellence: We believe that great design goes beyond aesthetics. Our designers combine form and function to create interfaces that not only look beautiful but also communicate your brand identity and values effectively. From typography and color schemes to iconography and imagery, every element is carefully crafted to enhance the overall user experience.</li>
          <li>Responsive and Adaptive Design: In today's multi-device world, it's essential to ensure that your interfaces are responsive and adaptive across all screen sizes and devices. We design interfaces that seamlessly adapt to different resolutions and orientations, ensuring a consistent and enjoyable user experience on desktops, tablets, and smartphones.</li>
          <li>Iterative Prototyping: We follow an iterative design process, starting with wireframes and prototypes to validate concepts and gather feedback early in the development cycle. This allows us to refine and iterate on our designs based on user input, ensuring that the final product meets your expectations and delivers maximum value to your users.</li>
          <li>Continuous Collaboration: We believe in transparent communication and collaboration throughout the design process. We work closely with you to understand your vision, goals, and feedback, ensuring that our designs align with your brand identity and business objectives every step of the way.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Why Invest in Professional UI/UX Design?",
    description: (
      <>
        <p>Investing in professional UI/UX design is essential for businesses looking to create digital experiences that delight users, drive engagement, and achieve business goals. In today's competitive landscape, user experience is a key differentiator, and a well-designed interface can make all the difference in attracting and retaining customers.</p>
        <p>Here are some compelling reasons why you should consider investing in professional UI/UX design:</p>
        <ul className='flex flex-col gap-3 text-gray-600'>
          <li>Enhanced User Satisfaction: A well-designed interface improves user satisfaction by making it easy and enjoyable for users to navigate and interact with your digital products. By removing friction points and streamlining workflows, you can create positive experiences that keep users coming back for more.</li>
          <li>Increased Conversions: Intuitive and user-friendly interfaces lead to higher conversion rates by guiding users through the desired actions and reducing abandonment rates. Whether it's making a purchase, signing up for a newsletter, or completing a form, a well-designed interface removes barriers to conversion and encourages users to take action.</li>
          <li>Brand Differentiation: Your interface is often the first point of contact between your brand and potential customers. A professionally designed interface communicates professionalism, reliability, and attention to detail, helping you differentiate your brand and stand out in a crowded marketplace.</li>
          <li>Optimized Performance: A well-designed interface optimizes performance by improving load times, reducing bounce rates, and increasing engagement. By optimizing the user experience, you can maximize the performance of your digital products and drive business growth.</li>
          <li>Data-Driven Insights: UI/UX design is not just about aesthetics; it's also about understanding user behavior and preferences. By gathering and analyzing user data, you can gain valuable insights that inform future design iterations, refine your marketing strategies, and optimize the overall user experience to drive business success.</li>
        </ul>
      </>
    ),
    image: "https://images.unsplash.com/photo-1581291518570-03a26006fb21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default page