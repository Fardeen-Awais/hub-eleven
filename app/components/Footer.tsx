import Link from "next/link"
import TalkNowBtn from "../(main)/_component/_subcomponents/TalkNowBtn"
import Logo from "./Logo"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export default () => {

    const footerNavs = [
        {
            href: '/terms&condition',
            name: 'Term & Condition'
        },
        {
            href: '/about',
            name: 'About us'
        }
    ]
    const socialIcons = [
        { icon: <FaFacebook className="w-6 h-6" />, link: '/' },
        { icon: <FaTwitter className="w-6 h-6" />, link: '/' },
        { icon: <FaInstagram className="w-6 h-6" />, link: '/' },
        { icon: <FaLinkedin className="w-6 h-6" />, link: '/' },
    ];

    return (
        <footer className="bg-black text-white py-3 ">
            <div className="flex flex-col  max-w-7xl mx-auto">
                <div className="flex flex-col items-center space-y-6 ">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div>
                            <Logo />
                        </div>
                        <p className="text-center px-5 max-w-lg">
                            What you are waiting for now. Start your journey with us now and grow your business.
                        </p>
                    </div>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <TalkNowBtn />
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row mt-10 py-10 border-t items-center justify-between gap-5 px-5">
                    <div className="flex">
                        <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="duration-150">
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='flex gap-x-5 items-center justify-center mx-auto relative md:left-10 lg:left-16'>
                        {socialIcons.map((social, index) => (
                            <div key={index} className='opacity-80 hover:opacity-100 transition-all'>
                                <Link href={social.link} target="_blank">
                                    {social.icon}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="flex"><p>© 2022 Hub Eleven Inc. All rights reserved.</p></div>
                </div>
            </div>
        </footer>
    )
}