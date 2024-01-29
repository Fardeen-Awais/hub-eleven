import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Services = ({subservices}:any) => {
  console.log({subservices})
  return (
    <div className='flex flex-col gap-10 px-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {subservices.map((subservice:any) => (
            <Card className='max-w-lg flex flex-col sm:items-start items-center justify-center'>
            <CardHeader className='flex items-center sm:items-start justify-center'>
              <CardTitle>{subservice.title}</CardTitle>
              <CardDescription className='text-center sm:text-start max-w-xl'>
                {subservice.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={subservice.href}><Button>Learn More</Button></Link>
            </CardContent>
          </Card>
        ))}
      
      </div>
    </div>
  )
}

export default Services