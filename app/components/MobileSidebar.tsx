import { Menu, MinusIcon, PlusIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { services } from '@/app/constant'
import Logo from "./Logo";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'
import { useState } from "react";



export const MobileSideBar = () => {
    const [plus, setPlus] = useState(true)
    const [open, setOpen] = useState(true);

    // Function to toggle the 'open' state
    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <Sheet open={!open} onOpenChange={toggleOpen} >
                <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition ">
                    <Menu className="text-cyan-500" />
                </SheetTrigger>
                <SheetContent side="right" className="p-0 bg-white">
                    <div className="p-5 h-full border-r flex flex-col overflow-y-auto gap-10 shadow-sm ">
                        <div onClick={toggleOpen} className="w-20 h-20">
                            <Logo />
                        </div>
                        <div className="sm:hidden flex flex-col w-full">
                            <div className='flex flex-col gap-5'>
                                <Link className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/services'}>
                                    <p className='text-xl font-semibold cursor-pointer '>Services</p>
                                </Link>
                                <div className='flex flex-col gap-5'>
                                    <Accordion type='multiple' className='flex flex-col items-start gap-2 border-b border-gray-300 '>
                                        {services.map((service, index) => (
                                            <AccordionItem value={service.title} key={service.title} className='flex flex-col gap-5'>
                                                <div className='flex flex-col items-start gap-2 py-1'>
                                                    <AccordionTrigger className='flex items-center gap-2'>
                                                        <div className='flex gap-3 items-center justify-center'>
                                                            <Image as={NextImage} src={service.icon} alt={service.title} width={120} height={120} radius='none' className='w-8 h-8' quality={50} priority />

                                                            <Link className='text-base' href={service.href}>
                                                                <p onClick={toggleOpen}>{service.title}</p>
                                                                </Link>
                                                        </div>
                                                        {
                                                            plus ? <PlusIcon onClick={() => setPlus(true)} className='w-4 h-4' /> : <MinusIcon onClick={() => setPlus(false)} className='w-4 h-4' />
                                                        }
                                                    </AccordionTrigger>
                                                    <AccordionContent className='flex flex-col gap-5'>
                                                        {service.subservices.map((subservice, index) => (
                                                            <Link href={subservice.href} key={subservice.title} className='text-sm text-gray-600 flex gap-5'>
                                                                <Image as={NextImage} src={subservice.icon} alt={subservice.title} width={120} height={120} className='w-6 h-6' radius='none' />
                                                                <p onClick={toggleOpen}>{subservice.title}</p>
                                                            </Link>
                                                        ))}
                                                    </AccordionContent>
                                                </div>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div >
                            </div >
                            <div className='flex flex-col '>
                                <Link onClick={toggleOpen} className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/about'}>
                                    <p className='text-xl font-semibold cursor-pointer'>About</p>
                                </Link>
                                <Link onClick={toggleOpen} className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/about'}>
                                    <p className='text-xl font-semibold cursor-pointer'>Our Work</p>
                                </Link>
                                <Link onClick={toggleOpen} className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/contact'}>
                                    <p className='text-xl font-semibold cursor-pointer'>Contact</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}