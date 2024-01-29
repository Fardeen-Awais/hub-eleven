import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "./Mobile_Sidebar";



export const MobileSideBar = () => {
    return (
        <>
            <Sheet>
                <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition ">
                    <Menu className="text-cyan-500"/>
                </SheetTrigger>
                <SheetContent side="right" className="p-0 bg-white">
                    <Sidebar />
                </SheetContent>
            </Sheet>
        </>
    )
}