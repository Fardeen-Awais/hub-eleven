import Image from "next/image"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
}