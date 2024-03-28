
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export function AboutProjectsm() {
  return (
    <div className="border border-gray-400 text-black rounded-lg p-5 space-y-6 w-full">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage alt="gitness logo" src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-2xl font-bold">gitness</div>
      </div>
      <Separator/>
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-40 w-full">
        <div>
          <h4 className="text-base font-semibold mb-2 text-cyan-800">Provided services</h4>
          <ul className="space-y-2">
            <li>Brand Identity</li>
            <li>Motion Design</li>
            <li>Web Design</li>
            <li>Web Development</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-2 text-cyan-800">Technology stack</h4>
          <ul className="space-y-2">
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>Docusaurus</li>
            <li>Rive</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
