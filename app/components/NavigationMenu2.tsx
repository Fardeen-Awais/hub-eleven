import React, { useState } from 'react';
import { services } from '../constant';
import Link from 'next/link';

const routes = [
  {
    label: 'Service',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },

]
const NavigationMenu2 = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
  const MouseToggle = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div  >
      <ul className='sm:flex hidden justify-center items-center text-xs text-cyan-400 transition-all gap-x-10 '>
        {routes.map((route, index) => (
          <Link href={route.href} key={index} onClick={route.label === 'Services' ? toggleSubMenu : undefined}
            onMouseEnter={route.label === 'Service' ? MouseToggle : undefined}> <li className='flex items-center opacity-100 cursor-pointer hover:underline decoration-yellow-400 underline-offset-4 p-5 transition-all'> {route.label}</li></Link>
        ))
        }
      </ul>

      {isSubMenuOpen && (
        <div onMouseLeave={MouseToggle} className='w-full h-[600px] lg:h-[400px] bg-white absolute inset-2 top-20 left-0 p-5 rounded-lg border-4 border-cyan-500'>
          <ul className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 text-xs transition-all gap-10'>
            {services.map((service: any, index) => (
              <div className='flex flex-col gap-5 w-full' key={index}>
                <Link href={service.href}><h4 className='text-2xl font-semibold cursor-pointer hover:underline decoration-cyan-400 underline-offset-5'>{service.title}</h4></Link> 
                <div className='flex flex-col gap-3 text-sm'>
                  {service.subservices.map((subservice: any) => (
                    <Link href={subservice.href}>
                    <li className='opacity-100 hover:opacity-75 hover:scale-105 transition-all cursor-pointer'>{subservice.title}</li></Link>
                  ))}
                </div>
              </div>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
};

export default NavigationMenu2;
