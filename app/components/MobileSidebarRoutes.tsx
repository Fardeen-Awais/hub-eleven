'use client'

import SidebarRouteItems from "./SidebarRouteItem"
import { Home, MessageCircleIcon } from "lucide-react"
import { FcBusinessman} from "react-icons/fc"
import { BsBriefcase } from "react-icons/bs"
import MobileRouteItem from "./MobileRouteItem"

const routes = [
    {
        label: 'Home',
        href: '/',
        icon: Home
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
    {
        label: 'Service',
        href: '/services',
        icon: BsBriefcase
    },
]


const MobileSidebarRoutes = () => {

  return (
    <div className="flex flex-col sm:flex-row w-full">
        {routes.map(route => (
            <MobileRouteItem key={route.label} {...route}/>
        ))}
    </div>
  )
}

export default MobileSidebarRoutes