import Link from 'next/link'
import React from 'react'
import { services } from '@/app/constant'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'

const SubRoutes = () => {
    const [plus, setPlus] = React.useState(true)
    console.log({ services })
    return (
        <div className='flex flex-col gap-5'>
            <Link className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/services'}>
                <p className='text-xl font-semibold cursor-pointer '>Services</p>
            </Link>
            <div className='flex flex-col gap-5'>
                <Accordion type='multiple' className='flex flex-col items-start gap-2 border-b border-gray-300 '>
                    {services.map((service, index) => (
                        <AccordionItem value={service.title} key={index} className='flex flex-col gap-5'>
                            <div className='flex flex-col items-start gap-2 py-1'>
                                <AccordionTrigger className='flex items-center gap-2'>
                                    <div className='flex gap-3 items-center justify-center'>
                                    <Image src={service.icon} alt={service.title} width={120} height={120} className='w-8 h-8' />

                                    <Link className='text-base' href={service.href}>{service.title}</Link></div>

                                    {
                                    plus ? <PlusIcon onClick={() => setPlus(true)} className='w-4 h-4' /> : <MinusIcon onClick={() => setPlus(false)} className='w-4 h-4' />
                                    }
                                </AccordionTrigger>
                                <AccordionContent className='flex flex-col gap-5'>
                                    {service.subservices.map((subservice, index) => (
                                        <Link href={subservice.href} key={index} className='text-sm text-gray-600 flex gap-5'>
                                            <Image src={subservice.icon} alt={subservice.title} width={120} height={120} className='w-6 h-6' />
                                            {subservice.title}
                                        </Link>
                                    ))}
                                </AccordionContent>
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div >
        </div >
    )
}

export default SubRoutes