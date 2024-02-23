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
      title: "Enhance Your Brand with Professional Content Writing Services",
      description: (
        <>
          <p>Elevate your brand's online presence and engage your audience with our expert content writing services. In today's competitive digital landscape, high-quality content is the cornerstone of successful marketing strategies.</p>
          <p>At Hub eleven, we specialize in crafting compelling and tailored content that resonates with your target audience, drives engagement, and delivers measurable results for your business.</p>
          <p>Why Choose Our Content Writing Services?</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>Strategic Content Planning: We develop customized content strategies aligned with your business objectives and target audience. From content ideation to distribution, we ensure that your content strategy drives meaningful engagement and conversions.</li>
            <li>Engaging and Persuasive Writing: Our team of experienced writers creates content that captivates your audience and inspires action. Whether it's blog posts, articles, website copy, or social media content, we craft compelling narratives that resonate with your audience and drive results.</li>
            <li>SEO Optimization: We integrate SEO best practices into our content writing process to improve your website's visibility and attract organic traffic. By optimizing content for relevant keywords and creating valuable, shareable content, we help you rank higher in search engine results and drive qualified leads to your website.</li>
            <li>Brand Consistency: We ensure that your content aligns with your brand voice, identity, and values, maintaining consistency across all communication channels. By reinforcing your brand message and values, we help you build trust and credibility with your audience.</li>
            <li>Conversion-focused Content: Our content is strategically designed to guide users through the sales funnel and drive conversions. Whether it's compelling calls-to-action, informative product descriptions, or persuasive landing pages, we create content that encourages action and drives results.</li>
            <li>Continuous Improvement: We believe in continuous refinement and optimization to ensure that your content remains relevant and effective. Through regular monitoring, analysis, and feedback, we refine our approach to deliver maximum impact and ROI for your business.</li>
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1504691342899-4d92b50853e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Why Invest in Professional Content Writing?",
      description: (
        <>
          <p>Investing in professional content writing is crucial for businesses aiming to stand out in the digital landscape, engage their audience, and drive conversions. In today's content-driven world, high-quality and relevant content is key to attracting and retaining customers, establishing thought leadership, and driving business growth.</p>
          <p>Here are some compelling reasons why you should consider investing in professional content writing:</p>
          <ul className='flex flex-col gap-3 text-gray-600'>
            <li>Enhanced Brand Visibility: Professionally written content helps your brand stand out in a crowded marketplace, increasing brand visibility and recognition. By creating valuable and shareable content, you can attract more traffic to your website, expand your reach, and build a loyal customer base.</li>
            <li>Improved Search Engine Rankings: Quality content is essential for improving your website's search engine rankings and driving organic traffic. By incorporating relevant keywords, optimizing meta tags, and creating valuable content that answers user queries, you can improve your website's visibility and attract more qualified leads.</li>
            <li>Increased Customer Engagement: Engaging and relevant content helps you connect with your audience on a deeper level, driving higher levels of engagement and interaction. By providing valuable insights, addressing customer pain points, and offering solutions to their problems, you can build stronger relationships with your audience and foster brand loyalty.</li>
            <li>Established Thought Leadership: Professionally written content positions your brand as a trusted authority in your industry, establishing thought leadership and credibility. By sharing valuable insights, industry trends, and expert opinions, you can differentiate yourself from competitors and become a go-to resource for your target audience.</li>
            <li>Optimized Content Strategy: Professional content writers can help you develop and execute a comprehensive content strategy tailored to your business goals and target audience. From content ideation to creation and distribution, they can ensure that your content strategy aligns with your objectives, drives engagement, and delivers measurable results.</li>
          </ul>
        </>
      ),
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  




export default page