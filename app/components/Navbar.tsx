'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MobileSideBar } from './MobileSidebar'
import SidebarRoutes from './SidebarRoutes'
const Navbar = () => {

    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) {
        return null;
    }

    return (
        <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto px-5 md:px-10 h-20 flex items-center justify-between'>
            <nav className='flex justify-between items-center w-full py-4'>
                <div className='logo flex items-center justify-center logo w-20 h-20 sm:w-24 sm:h-24'>
                    <Image src={'/assets/logo.png'} quality={70} width={300} height={300} alt='Logo for Dark' />
                </div>
                <ul className='sm:flex hidden justify-center items-center md:gap-x-10 sm:gap-x-6 text-xs text-white'>
                    <SidebarRoutes />
                </ul>

                <div className='Customizer flex items-center  gap-x-5 px-3'>
                    <div>
                        <div className="hidden sm:flex">
                            <Button className='border border-cyan-400 hover:border-green-500 hover:animate-pulse transition-all'>Let's talk</Button>
                        </div>
                        <div className='sm:hidden flex'>
                            <MobileSideBar/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar