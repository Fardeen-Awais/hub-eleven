import * as React from "react"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function EnvCarousel() {
  const contentArray = [
    {
      title: 'Culture',
      image: '/assets/sec1-01.webp',
      description: 'Our culture puts people before profits every time, whether our team or our clients. We’re genuine and human and we’re not afraid to show it. We acknowledge that our clients are human too, creating lasting, strong and authentic relationships with each one along the way.'
    },
    {
      title: 'Social Impact',
      image: '/assets/sec3-03.webp',
      description: 'We’re here to create a better agency, an agency with purpose and impact outside of our professional projects. Recognising we are part of a bigger picture, we strive to create a community that empowers, supports and champions change.'
    },
    {
      title: 'Culture',
      image: '/assets/sec2-02.webp',
      description: 'Our culture puts people before profits every time, whether our team or our clients. We’re genuine and human and we’re not afraid to show it. We acknowledge that our clients are human too, creating lasting, strong and authentic relationships with each one along the way.'
    }
  ];
  return (
    <Carousel className="h-full w-full px-5">
      <CarouselContent>
        {contentArray.map(({ title, image, description }, index) => (
          <CarouselItem className="w-full h-full" key={title}>
            <Card className="w-fit h-fit max-h-fit mx-auto flex flex-col md:flex-row overflow-hidden cursor-pointer justify-center items-center max-w-sm">
              <div className="h-full max-w-xl">
              <Image src={image} alt='hero' width={900} height={900} />
              </div>
              <CardContent className="flex flex-col gap-2 max-w-lg">
                <CardTitle className="text-3xl font-semibold">
                  {title}
                </CardTitle>
                <CardDescription>
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

    </Carousel>
  )
}
export default EnvCarousel