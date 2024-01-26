import Image from 'next/image'
import React from 'react'

const Service_About = ({data}:any) => {
    return (
        <div className='flex flex-col  justify-center items-center min-h-fit max-w-7xl mx-auto gap-20 sm:gap-0 p-5'>
        {data.map((item:any, index:number) => (
            <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-40' key={index}>
                {index === 1 ? ( // Check if it's the second item
                <div className='flex justify-between'>
                    <div className='hidden sm:flex justify-between items-center mx-auto w-full'>
                        <p className='text-xl max-w-full '>{item.description}</p>
                        <Image className='w-96 h-full relative m-10' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                    </div>
                    <div className='flex flex-col justify-center items-center sm:hidden'>
                        <Image className='w-60 h-full relative' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                        <p className='text-xl max-w-2xl p-5'>{item.description}</p>
                    </div>
                </div>
                ) : (
                    <>
                        <Image className='w-60 h-60 lg:w-96 lg:h-96 relative ' src={item.image} width={500} height={500} alt='Digital marketing related picture' />
                        <p className='text-xl max-w-full p-2 '>{item.description}</p>
                    </>
                )}
            </div>
        ))}
    </div>
    
    )
}

export default Service_About