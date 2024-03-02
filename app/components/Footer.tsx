import Link from "next/link"
import TalkNowBtn from "../(main)/_component/_subcomponents/TalkNowBtn"
import Logo from "./Logo"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import Image from "next/image"

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
        <footer style={{ content: "", backgroundImage: 'url("/assets/footer-worldmap.svg")', backgroundSize: 'fill', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', zIndex: -1 }} className="bg-black text-white sm:h-[480px] md:h-[450px] h-[680px] flex flex-col items-end justify-end ">
            <div className="flex flex-col min-w-7xl mx-auto w-full">

                <div className="flex flex-col sm:flex-row items-center justify-center max-w-7xl mx-auto px-5 gap-10">
                    <div className="flex flex-col gap-5 items-center">
                        <Logo />
                        <p className="max-w-md text-xs sm:max-w-sm sm:text-sm">Anwar IT services limited trading as Hub Eleven since 2013 is a renowned establishment that provides digital services, consultation, support, and more to a wide spectrum of customers from FMCGs to small family-run businesses. Our 10 years of knowledge and experience has allowed us to effectively aid our customers with strategies unique to them.</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col items-center gap-3 justify-center">
                            <h4 className="text-lg font-semibold">Useful Links</h4>
                            <ul className="flex flex-col gap-1 items-center">
                                <li className="hover:text-cyan-400 transition-all"><Link href={'/about'}>About Us</Link></li>
                                <li className="hover:text-cyan-400 transition-all"><Link href={'/services'}>Services</Link></li>
                                <li className="hover:text-cyan-400 transition-all"><Link href={'/about'}>Work</Link></li>
                                <li className="hover:text-cyan-400 transition-all"><Link href={'/terms&condition'}>Privacy Policy</Link></li>
                                <li className="hover:text-cyan-400 transition-all"><Link href={'/contact'}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-3 justify-center">
                            <h4 className="text-lg font-semibold">Contact Info</h4>
                            <div className="">
                                <p><span className="font-semibold text-base">Phone:</span>+44 161 791 1352</p>
                                <p><span className="font-semibold text-base">Email:</span> info@hubeleven.com</p>
                                <p>Avonlea Drive, Manchester, United Kingdom</p>
                                <div className='flex gap-5 py-5 items-start justify-start mx-auto relative '>
                                    {socialIcons.map((social, index) => (
                                        <div key={index} className='opacity-80 hover:opacity-100 hover:text-cyan-400 transition-all'>
                                            <Link href={social.link} target="_blank">
                                                {social.icon}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row mt-10 py-10 items-center justify-center gap-5 px-5">
                    <div className="flex"><p>© 2022 Hub Eleven Inc. All rights reserved.</p></div>
                </div>
            </div>
        </footer>
    )
}