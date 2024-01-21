import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    )
}