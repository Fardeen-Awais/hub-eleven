import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import ServiceCards from './_subcomponents/Cards';

const Service = () => {
  const cardData = [
    {
      title: 'Seo Services',
      description: 'Powerful SEO campaigns that create long-lasting visibility, traffic and revenue growth. Help your web app to reach into the larger audience',
      image: '/assets/SettingResearch.gif'
    },
    {
      title: 'Web developement',
      description: 'We stay up-to-date on the latest website trends so that your business can outshine competitors.',
      image: '/assets/WebDesignerWithIdea.gif'
    },
    {
      title: 'Consultancy',
      description: 'We provide IT Consultancy to businesses to help them choose, implement, upgrade, and migrate business solutions and applications.',
      image: '/assets/laptop.png'
    },
    {
      title: 'Graphic Design',
      description: 'A team of graphic designers with years of experience is ready to complete projects for companies worldwide',
      image: '/assets/painter.webp'
    },
    // Add more card objects as needed
  ];
  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-5'>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl sm:text-4xl font-bold p-3'>Our Services</h2>
        <p className='text-gray-600'>The services that can help you to grow your business</p>
      </div>

      <div className='flex flex-col items-center gap-2 mx-auto max-w-7xl p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
          {cardData.map((card, index) => (
            <ServiceCards key={index} title={card.title} description={card.description} image={card.image} />
          ))}
        </div>
        <Card className='flex flex-col overflow-hidden justify-center items-center py-2 sm:max-h-60 w-full'>
          <CardContent className='flex flex-col sm:flex-row justify-center items-center gap-2 p-5'>
            <div className='flex flex-col justify-center gap-2 '>
              <CardTitle>
                <span className='text-4xl sm:text-5xl font-semibold'>Digital Marketing</span>
              </CardTitle>
              <CardDescription className='max-w-md text-base'>We provide a range of digital marketing solutions to help your business succeed. Help you to manage your business compaigns</CardDescription></div>
            <Image className='relative top-4 h-60 w-60 md:h-96 md:w-96' src={'/assets/social-media-exp.svg'} alt='hero' width={400} height={400}></Image>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}

export default Service