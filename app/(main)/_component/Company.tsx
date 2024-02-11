import Image from 'next/image';
import React from 'react'
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
const Company = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-60 my-5 px-10'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-20 place-items-center justify-items-center'>
                {companies.map((company) => (
                    <div key={company.title} className='w-32 h-32 sm:w-40 sm:h-40 rounded-sm flex items-center justify-center'>
                        <Image src={company.image} alt={company.title} width={300} height={300} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Company