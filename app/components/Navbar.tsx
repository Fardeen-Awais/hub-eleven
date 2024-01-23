'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MobileSideBar } from './MobileSidebar'
import SidebarRoutes from './SidebarRoutes'
import TalkNowBtn from '../(main)/_component/_subcomponents/TalkNowBtn'
import Logo from './Logo'
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
                  <Logo/>
                </div>
                <ul className='sm:flex hidden justify-center items-center md:gap-x-10 sm:gap-x-6 text-xs text-white'>
                    <SidebarRoutes />
                </ul>

                <div className='Customizer flex items-center  gap-x-5 px-3'>
                    <div>
                        <div className="hidden sm:flex">
                            <TalkNowBtn/>
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