'use client'
import { useEffect, useState } from 'react'
import { MobileSideBar } from './MobileSidebar'
import TalkNowBtn from '../../(main)/_component/_subcomponents/TalkNowBtn'
import Logo from './Logo'
import NavigationMenu from './NavigationMenu'

const Navbar = () => {

    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) {
        return null;
    }

    return (
        <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-[4px] backdrop-filter transition-opacity duration-200 ease-in-out mx-auto h-20 flex items-center justify-between max-w-7xl w-full px-5'>
            <nav className='flex justify-between items-center w-full py-4'>
                <div className='logo flex items-center justify-center logo w-20 h-20 sm:w-24 sm:h-24'>
                    <Logo />
                </div>
                <div className='w-full flex items-center justify-center'>
                    <NavigationMenu/>
                </div>
                <div className='Customizer flex items-center '>
                    <div>
                        <div className="hidden sm:flex">
                            <TalkNowBtn />
                        </div>
                        <div className='sm:hidden flex'>
                            <MobileSideBar />
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar