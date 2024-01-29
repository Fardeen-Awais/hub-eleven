import Logo from "./Logo"
import MobileSidebarRoutes from "./MobileSidebarRoutes"

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
        <div className="p-6">
            <Logo/>
        </div>
        <div className="sm:hidden flex flex-col w-full">
            <MobileSidebarRoutes/>
        </div>
    </div>
  )
}

export default Sidebar