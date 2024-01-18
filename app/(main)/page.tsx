import Image from "next/image";
import Hero from "./_component/Hero";
import About from "./_component/About";

export default function Home() {
  return (
    <main className='flex flex-col h-full w-full z-30'>
      <Image
        src={'/assets/Background-01.png'}
        alt="Hero Image"
        width={3000}
        height={3000}
        className="absolute bg-cover object-fill max-h-screen w-full h-screen inset-0 -z-10"
        priority={true}
      />
      <Hero />
      <About/>
      {/* service section */}
      {/* section 02 */}
      {/* section 03 */}
      {/* explore section */}
      {/* companies */}
      {/* footer */}

      {/* feature 01: able to login the user */}
      {/* feature 02: able to add blogs with wordpress */}
      {/* feature 03: Get the details of the users through email */}
      {/* feature 04: Make an script which pull all the login person email from the database and show which users sign up your site this month. */}
      {/* feature 05: Add animation */}
    </main>
  )
}
