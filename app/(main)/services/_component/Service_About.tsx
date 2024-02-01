import Image from 'next/image'
import React from 'react'

const Service_About = ({ data }: any) => {
    return (
        <div className='flex flex-col  justify-center items-center min-h-fit max-w-7xl mx-auto gap-20 sm:gap-0 p-5'>
            {data.map((item: any, index: number) => (
                <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-40 py-10' key={index}>
                    {(index % 2 === 1) ? ( // Check if it's the second item
                        <div className='flex justify-between '>
                            <div className='hidden sm:flex flex-col sm:flex-row items-center justify-between gap-10 mx-auto px-10'>
                                <div className='flex flex-col gap-5 '>
                                    <h3 className='font-semibold'>{item.title}</h3>
                                    <p className='text-lg'>{item.description}</p>
                                </div>
                                <Image className='w-60 h-60 lg:w-96 lg:h-96 relative ' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                            </div>

                            <div className='flex flex-col justify-between items-center sm:hidden gap-10 px-0 sm:px-10 max-h-screen'>
                                <div className='flex flex-col gap-5 text-center sm:text-start'>
                                    <h3 className='font-semibold'>{item.title}</h3>
                                    <p className='text-base '>{item.description}</p>
                                </div>
                                <Image className='w-60 h-60 lg:w-96 lg:h-96 relative' src={item.image} width={500} height={500} alt='Digital marketing related picture' />

                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-10 mx-auto px-0 sm:px-10'>
                            <div className='flex text-center sm:hidden flex-col gap-5'>
                                <h3 className='font-semibold'>{item.title}</h3>
                                <p className='text-lg'>{item.description}</p>
                            </div>
                            <Image className='w-60 h-60 lg:w-96 lg:h-96 relative ' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                            <div className='sm:flex hidden flex-col gap-5'>
                                <h3 className='font-semibold'>{item.title}</h3>
                                <p className='text-lg'>{item.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

    )
}

export default Service_About