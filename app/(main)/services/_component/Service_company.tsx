import Image from 'next/image';
import React from 'react'

const Service_company = () => {
    const companies = [
        {
            title: 'Amazon',
            image: '/assets/companies/amazon.png',
        },
        {
            title: 'meta',
            image: '/assets/companies/meta.png',
        },
        {
            title: 'Upwork',
            image: '/assets/companies/upwork.png',
        },
        {
            title: 'Google',
            image: '/assets/companies/google.png',
        },
        // Add more card objects as needed
    ];
    return (
        <div className='flex flex-col items-center justify-center w-full max-w-7xl gap-10 min-h-96 py-20'>
            <div className='absolute z-0 opacity-15 right-10 '>
                <Image src={'/assets/thunder.svg'} alt="Hero Background" width={300} height={300}></Image>
            </div>
            <div className='absolute z-0 opacity-15 left-10 '>
                <Image src={'/assets/thunder.svg'} alt="Hero Background" width={300} height={300}></Image>
            </div>
            <div className='z-10 flex flex-col items-center justify-center gap-28'>
                <div className='max-w-xs text-center sm:max-w-sm md:max-w-md lg:max-w-lg'>
                    <h3 className='font-semibold'>Trusted by our Results Driven Clients</h3>
                </div>
                <div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-20 place-items-center justify-items-center'>
                        {companies.map((company) => (
                            <div key={company.title} className='w-24 h-24 border rounded-sm shadow-sm'>
                                <Image src={company.image} alt={company.title} width={300} height={300} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service_company