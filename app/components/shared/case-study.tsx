import React from 'react'
import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card';
import { Image } from '@nextui-org/react';
import NextImage from "next/image"
import RedirectBtn from '../RedirectButton';
import { Separator } from '@/components/ui/separator';
import { Check } from 'lucide-react';
// import Header from './header';
// import Social from './social';
// import BackButton from './back-button';

interface CardWrapperProps {
    // children: React.ReactNode
    description: string;
    industry: string;
    title: string;
    label: string;
    href: string
}
const CaseStudy = ({ industry,title, description, label }: CardWrapperProps) => {
    return (
        <Card className='w-80 sm:w-72 lg:w-96 shadow-lg rounded-lg '>
            <Image  as={NextImage} radius='none' src="https://maley.digital/wp-content/uploads/2023/07/flat-lay-baby-clothes-with-photo-camera-1024x768.jpg" alt="case-study" width={900} height={900} />
            <CardHeader>
                <div>
                    <p><span className='text-lg font-semibold'>Industry</span> | {industry}</p>
                </div>
            </CardHeader>
            <Separator className='my-3'/>
            <CardContent>
                <div className='flex flex-col gap-5 '>
                    <div>
                        <h4 className='font-semibold text-2xl line-clamp-1'>{title}</h4>
                    </div>
                    <div>
                        <p className='line-clamp-5'>{description}</p>
                    </div>
                    {/* <div className='list-none flex flex-col gap-3'>
                        <h4 className='font-semibold text-xl text-cyan-800 '>Results</h4>
                        <div className='flex'>
                            <ul className='flex flex-col gap-y-2'>
                                <li className='flex gap-2'>
                                    <p className='max-w-sm'>{List1}</p>
                                </li>
                                <li className='flex gap-2'>
                                    <p className='max-w-sm'>{List2}</p>
                                </li>
                                <li className='flex gap-2'>
                                    <p className='max-w-sm'>{List3}</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </CardContent>

            <CardFooter>
                <RedirectBtn label={label} href={`/work/${title}`} target="" size="default" />
            </CardFooter>
        </Card>
    )
}

export default CaseStudy