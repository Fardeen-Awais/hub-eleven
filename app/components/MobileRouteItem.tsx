import React from 'react'
import { ChevronDown, LucideIcon } from "lucide-react"
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';
import { RxDropdownMenu } from 'react-icons/rx';
import { BiDownArrow, BiDownArrowAlt } from 'react-icons/bi';


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ListItem from './ListItem';
import Logo from './Logo';
import { services } from '../constant';

interface SidebarRouteItemsProps {
    icon: any;
    label: string;
    href: string
}

const MobileRouteItem = ({ icon: Icon, label, href }: SidebarRouteItemsProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href)
    }

    return (
        <button onClick={onClick} type='button' className={cn("flex items-center gap-x-2 text-slate-500 font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", isActive && 'text-sky-700 sm:text-cyan-400 bg-sky-200/30 hover:bg-sky-300/20 hover:text-sky-700 sm:hover:text-cyan-600')}>
                <div className='flex items-center gap-x-2 py-4'>
                    <Icon size={22} className={cn("text-slate-500", isActive && 'sm:text-cyan-400 hover:text-sky-700')} />
                    {label}
                </div>
            <div className={cn("ml-auto opacity-0 border-2 border-cyan-700 sm:border-cyan-400 h-14 transition-all", isActive && 'opacity-100')} />
        </button>
    )
}

export default MobileRouteItem