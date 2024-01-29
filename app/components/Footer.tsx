import TalkNowBtn from "../(main)/_component/_subcomponents/TalkNowBtn"
import Logo from "./Logo"

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
    return (
        <footer className="">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div>
                            <Logo />
                        </div>
                        <p>
                            What you are waiting for now. Start your journey with us now and grow your business.
                        </p>
                    </div>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <TalkNowBtn/>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2022 Hub Eleven Inc. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => (
                                <li className="text-gray-800 hover:text-gray-500 duration-150">
                                    <a key={idx} href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}