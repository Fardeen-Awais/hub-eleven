import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';


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
import { services } from '../constant';

interface SidebarRouteItemsProps {
    icon: any;
    label: string;
    href: string
}

const SidebarRouteItems = ({ icon: Icon, label, href }: SidebarRouteItemsProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href)
    }

    return (
        <button onClick={onClick} type='button' className={cn("flex items-center gap-x-2 text-slate-500 font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", isActive && 'text-sky-700 sm:text-cyan-400 bg-sky-200/30 hover:bg-sky-300/20 hover:text-sky-700 sm:hover:text-cyan-600')}>
            {!(label === 'Service') &&
                <div className='flex items-center gap-x-2 py-4'>
                    <Icon size={22} className={cn("text-slate-500", isActive && 'sm:text-cyan-400 hover:text-sky-700')} />
                    {label}
                </div>
            }
            {(label === 'Service') &&
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='bg-transparent hover:bg-transparent'>
                                <div className='flex items-center gap-x-2  '>
                                    <Icon size={22} className={cn("text-slate-500", isActive && 'sm:text-cyan-400 hover:text-sky-700')} />
                                    {label}
                                </div>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="sm:grid gap-3 p-2 hidden sm:w-[250px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col items-center justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-context-menu"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    Agency services
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Find the your right services
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {services.map((service) => (
                                        <ListItem href={service.href} title={service.title}>
                                            {service.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                            {/* Navigation mobile ka bnana hai */}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            }
            <div className={cn("ml-auto opacity-0 border-2 border-cyan-700 sm:border-cyan-400 h-14 transition-all", isActive && 'opacity-100')} />
        </button>
    )
}

export default SidebarRouteItems