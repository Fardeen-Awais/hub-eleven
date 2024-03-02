import Image from 'next/image';
import React from 'react'

const Service_company = () => {
    const companies = [
        {
            title: 'Amazon',
            image: '/assets/companies/Logo-2.png.webp',
        },
        {
            title: 'meta',
            image: '/assets/companies/Logo-Ahmed-2.png.webp',
        },
        {
            title: 'Upwork',
            image: '/assets/companies/logo.jpg.webp',
        },
        {
            title: 'Google',
            image: '/assets/companies/Ryan-Baker-980x264.png.webp',
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
                <div className='flex items-center justify-center mx-auto'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-20 place-items-center justify-items-center'>
                        {companies.map((company) => (
                            <div key={company.title} className='w-32 h-32 sm:w-40 sm:h-40 rounded-sm flex items-center justify-center'>
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