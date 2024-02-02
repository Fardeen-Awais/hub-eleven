import Image from 'next/image';
import React from 'react'
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
const Company = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-60 my-5'>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-20 place-items-center justify-items-center'>
                {companies.map((company) => (
                    <div key={company.title} className='w-24 h-24 border rounded-sm shadow-sm'>
                        <Image src={company.image} alt={company.title} width={300} height={300} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Company