import { Button } from '@/components/ui/button'
import React from 'react'
import styles from "./_subcomponents/bg-image.module.css"

const Explore = () => {
    return (
        <div className={`flex items-center justify-center min-h-screen p-5 ${styles.bg02img} overflow-hidden`}>
    
                <div className='flex flex-col max-w-72 gap-5 relative left-10 sm:left-48 p-5'>
                    <h3 className='text-2xl font-semibold text-white'>
                        Explore Your Next Opportunity
                    </h3>
                    <p className=' max-w-sm text-sm text-gray-300'>We provide our clients with the digital tools to seize opportunities and thrive in their marketplace. <br /><br /> Using a 360, integrated approach, each of our solutions is tailored to your business with future-proofed functionality built in.
                    </p>
                    <Button className='bg-green-500 w-28 h-10'>Our Service</Button>
                </div>
        </div>
    )
}

export default Explore