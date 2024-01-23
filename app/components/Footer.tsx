import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Social_url = [
    {
        url: <BsDiscord />,
        alt: 'My Discord Profile',
        href: 'https://discordapp.com/users/fardeenawais'
    },
    {
        url: <BsWhatsapp />,
        alt: 'My Page in X (twitter)',
        href: 'https://twitter.com/alfarnex'
    },
    {
        url: <BsFacebook />,
        alt: 'My Github Account',
        href: 'https://github.com/Fardeen-Awais'
    },
    {
        url: <BsLinkedin />,
        alt: 'My Linkedin Account',
        href: 'https://www.linkedin.com/in/fardeen-awais-b464b1200/'
    },
];
const Footer = () => (
    <footer className='flex flex-col text-white  mt-5 border-t border-gray-100 bg-gray-900 '>
   
        <div className='flex items-center justify-center min-h-screen p-5'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-20'>
                <div><Image src={'/assets/spline.webp'} alt='hero' width={350} height={350} /></div>
                <div className='flex flex-col max-w-96 gap-5'>
                    <h3 className='text-3xl font-semibold'>Have an good web design today</h3>
                    <p className='text-gray-300'>High level experience in web design and development knowledge, producing quality work.</p>
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>@2023 CarHub. All rights reserved</p>

            <div className='flex gap-3'>
                {Social_url.map((social) => (
                    <div key={social.alt} className='opacity-80 hover:opacity-100 transition-all'>
                        <Link href={social.href} target="_blank">
                            {social.url}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;