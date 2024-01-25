import Image from "next/image";
import Hero from "./_component/Hero";
import About from "./_component/About";
import Service from "./_component/Service";
import Section01 from "./_component/Section01";
import Section02 from "./_component/Section02";
import Explore from "./_component/Explore";
import Company from "./_component/Company";

export default function Home() {
  return (
    <main className='flex flex-col overflow-hidden h-full w-full z-30 '>
      <div style={{ position: 'absolute', height: '100%', width: '100%', top: 0 }}>
        <Image
          src={'/assets/Background-01.webp'}
          alt="Hero Background"
          fill
          quality={100}
          sizes='100vw'
          style={{ objectFit: 'cover' }}
          priority={true}
        />
      </div>
      <Hero />
      <About />
      <Service />
      <Section01 />
      <Section02 />
      <Explore />
      <Company />
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
