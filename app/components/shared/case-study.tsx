import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client';
import { Separator } from '@/components/ui/separator';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image'
import Link from 'next/link';

interface CardWrapperProps {
    description: string;
    industry: string;
    title: string;
    label: string;
    href: string
    image: string
}

const CaseStudy = ({ industry, title, description, label, image, href }: CardWrapperProps) => {
    const builder = imageUrlBuilder(client)

    function urlFor(source: any) {
        return builder.image(source)
    }
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-10 '>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <h3 className='font-bold'>{title}</h3>
                    <p>{industry}</p>
                </div>
                <div>
                    <Separator />
                    <p className='max-w-xl'>{description}</p>
                </div>
                <Link href={href} className='text-lg font-semibold text-cyan-600 hover:text-red-500 transition-all'>{label}</Link>
            </div>
            <Image className='h-40 sm:h-60 lg:h-80 w-full' as={NextImage} radius='none' src={urlFor(image).width(2000).url()} alt={title} width={2000} height={2000} />

        </div>
    )
}

export default CaseStudy