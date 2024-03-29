import React from 'react'
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import { Image } from '@nextui-org/react';
import NextImage from "next/image"
import RedirectBtn from '../RedirectButton';
import { Separator } from '@/components/ui/separator';
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client';


interface CardWrapperProps {
    description: string;
    industry: string;
    title: string;
    label: string;
    href: string
    image: string
}

const CaseStudy = ({ industry, title, description, label, image,href }: CardWrapperProps) => {
    const builder = imageUrlBuilder(client)

    function urlFor(source:any) {
        return builder.image(source)
    }
    return (
        <Card className='w-80 sm:w-72 lg:w-96 shadow-lg rounded-lg '>
            <Image className='h-72 w-full' as={NextImage} radius='none' src={urlFor(image).width(500).url()} alt={title} width={900} height={900} sizes='' />
            <CardHeader>
                <div>
                    <p><span className='text-lg font-semibold'>Industry</span> | {industry}</p>
                </div>
            </CardHeader>
            <Separator className='my-3' />
            <CardContent>
                <div className='flex flex-col gap-5 '>
                    <div>
                        <h4 className='font-semibold text-2xl line-clamp-1'>{title}</h4>
                    </div>
                    <div>
                        <p className='line-clamp-5'>{description}</p>
                    </div>

                </div>
            </CardContent>

            <CardFooter>
                <RedirectBtn label={label} href={href} target="" size="default" />
            </CardFooter>
        </Card>
    )
}

export default CaseStudy