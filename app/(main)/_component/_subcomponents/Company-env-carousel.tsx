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
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl lg:max-w-lg ">
      <CarouselContent>
        {contentArray.map(({ title, image, description }, index) => (
          <CarouselItem className="w-full h-full" key={title}>
            <div className="m-1 ">
                  <Image className="max-h-96 w-full" src={image} alt='hero' width={900} height={900} />
                  <Card className="flex gap-5 py-3">
                    <CardContent className="flex flex-col gap-2">
                      <CardTitle className="text-3xl font-semibold">
                        {title}
                      </CardTitle>
                      <CardDescription>
                        {description}
                      </CardDescription>
                    </CardContent>
                  </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
export default EnvCarousel