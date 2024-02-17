import Link from "next/link"

const Service_Redirect=()=> {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore More services</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              We offer a variety of services to meet your needs.
            </p>
          </div>
        </div>
      </div>
      <div className="container grid max-w-3xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-2 md:gap-8 lg:py-12 lg:gap-10 md:px-6">
        <Link
          className="flex items-start p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-lg dark:hover:shadow-lg"
          href="#"
        >
          <div className="space-y-2">
            <h3 className="font-bold">Web Development</h3>
            <p className="text-sm leading-none">Let us build your website from scratch.</p>
          </div>
          <ArrowRightIcon className="w-6 h-6 ml-auto shrink-0" />
        </Link>
        <Link
          className="flex items-start p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-lg dark:hover:shadow-lg"
          href="#"
        >
          <div className="space-y-2">
            <h3 className="font-bold">Mobile App Development</h3>
            <p className="text-sm leading-none">We create stunning and functional mobile apps.</p>
          </div>
          <ArrowRightIcon className="w-6 h-6 ml-auto shrink-0" />
        </Link>
        <Link
          className="flex items-start p-6 rounded-xl bg-gray-50 shadow-md hover:shadow-lg dark:hover:shadow-lg"
          href="#"
        >
          <div className="space-y-2">
            <h3 className="font-bold">UI/UX Design</h3>
            <p className="text-sm leading-none">Our designers will make your product beautiful and user-friendly.</p>
          </div>
          <ArrowRightIcon className="w-6 h-6 ml-auto shrink-0" />
        </Link>
      </div>
    </section>
  )
}

function ArrowRightIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
export default Service_Redirect