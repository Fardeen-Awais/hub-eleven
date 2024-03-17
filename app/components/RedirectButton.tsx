'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BackButtonProps {
    label:string
    href:string
    target?:string | undefined
    size?: 'default' | 'sm' | 'lg' 
}
const RedirectBtn = ({label,href,target,size}:BackButtonProps) => {
  return (
    <Button variant={"default"} className="font-normal w-full" size={size} asChild>
        <Link className="cursor-pointer border border-cyan-400" target={target} href={href}>{label}</Link>
    </Button>
  )
}

export default RedirectBtn