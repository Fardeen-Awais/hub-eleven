import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubService_About = ({ data }: any) => {
    return (
        <div className='flex flex-col  justify-center items-center min-h-fit max-w-7xl mx-auto gap-20 sm:gap-0 px-5'>
            {data.map((item: any, index: number) => (
                <div className='flex flex-col sm:flex-row items-center gap-5 sm:py-10' key={index}>
                    {(index % 2 === 1) ? ( // Check if it's the second item
                        <div className='flex justify-between '>
                            <div className='hidden sm:flex flex-col sm:flex-row items-center justify-between gap-10 mx-auto px-10 '>
                                <div className='flex flex-col items-center md:items-start gap-5 '>
                                    <Image className='sm:flex md:hidden w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 relative' src={item.image} width={500} height={500} alt={item.title} />
                                    <div className='flex flex-col gap-5'>
                                        <h3 className='font-semibold'>{item.title}</h3>
                                        <p className='lg:text-lg sm:text-sm md:text-base'>{item.description}</p>
                                        <Link href={item.href}>
                                            <Button className='bg-cyan-200 text-black border border-cyan-900 hover:border-cyan-300 hover:text-white transition-all'>Learn More about {item.subheading}</Button>
                                        </Link>
                                    </div>
                                </div>

                                <Image className='sm:hidden md:flex w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 relative' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                            </div>

                            <div className='flex flex-col justify-between items-center sm:hidden gap-10 px-0 sm:px-10 max-h-screen '>
                            <Image className='w-60 h-60 sm:w-72 sm:h-96 lg:w-96 lg:h-96 relative' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                                <div className='flex flex-col gap-5 text-center'>
                                    <h3 className='font-semibold'>{item.title}</h3>
                                    <p className='text-sm max-w-md '>{item.description}</p>
                                    <Link href={item.href}>
                                        <Button className='bg-cyan-200 text-black border border-cyan-900 hover:border-cyan-300 hover:text-white transition-all w-fit'>Learn More about {item.subheading}</Button>
                                    </Link>
                                </div>
                                

                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-20 mx-auto px-0 sm:px-10 max-w-7xl max-h-screen w-full'>
                            <Image className='w-60 h-60 sm:w-72 sm:h-96 lg:w-96 lg:h-96 relative' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                            <div className='flex text-center sm:hidden flex-col gap-5 h-fit'>
                                <h3 className='font-semibold'>{item.title}</h3>
                                <p className='text-sm max-w-md'>{item.description}</p>
                                <Link href={item.href}>
                                    <Button className='bg-cyan-200 text-black border border-cyan-900 hover:border-cyan-300 hover:text-white transition-all w-fit'>Learn More about {item.subheading}</Button>
                                </Link>
                            </div>


                            <div className='sm:flex hidden flex-col gap-5 min-h-60'>
                                <div className='flex flex-col gap-5'>
                                    <h3 className='font-semibold'>{item.title}</h3>
                                    <p className='lg:text-lg sm:text-sm md:text-base'>{item.description}</p>
                                </div>
                                <Link href={item.href}>
                                    <Button className='bg-cyan-200 text-black border border-cyan-900 hover:border-cyan-300 hover:text-white transition-all'>Learn More about {item.subheading}</Button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

    )
}

export default SubService_About