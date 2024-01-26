import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const ServiceCards = ({ title, description, image }: { title: string, description: string, image: string }) => {
    return (
        <div>
            <Card className='flex flex-col overflow-hidden justify-center items-center py-2 h-full'>
                    <CardHeader className='flex flex-col gap-2 py-2'>
                        <CardTitle className='text-3xl'>
                            {title}
                        </CardTitle>
                        <CardDescription className='text-md'>{description}</CardDescription></CardHeader>
                <CardContent className='flex items-center gap-2'>
                    <Image className='relative h-60 w-full' src={image} alt='hero' width={130} height={130}></Image>
                </CardContent>
            </Card>
        </div>
    )
}

export default ServiceCards