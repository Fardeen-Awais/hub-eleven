import Logo from "../Logo"
import Routes from "./Route"
import SubRoutes from "./SubRoutes"
// import MobileSidebarRoutes from "./MobileSidebarRoutes"

const Sidebar = () => {
  return (
    <div className="p-5 h-full border-r flex flex-col overflow-y-auto gap-10 shadow-sm ">
        <div className="">
            <Logo />
        </div>
        <div className="sm:hidden flex flex-col w-full">
          <SubRoutes/>
          <Routes/>
        </div>
    </div>
  )
}

export default Sidebar