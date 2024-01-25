'use client'

import SidebarRouteItems from "./SidebarRouteItem"
import { Home, MessageCircleIcon } from "lucide-react"
import { FcBusinessman} from "react-icons/fc"
import { BsBriefcase } from "react-icons/bs"

const routes = [
    {
        label: 'Home',
        href: '/',
        icon: Home
    },
    {
        label: 'Service',
        href: '/services',
        icon: BsBriefcase
    },
    {
        label: 'About',
        href: '/about',
        icon: FcBusinessman
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: MessageCircleIcon
    },
    
]


const SidebarRoutes = () => {

  return (
    <div className="flex flex-col sm:flex-row w-full">
        {routes.map(route => (
            <SidebarRouteItems key={route.label} {...route}/>
        ))}
    </div>
  )
}

export default SidebarRoutes