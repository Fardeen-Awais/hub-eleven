import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo.webp" className="z-10 cursor-pointer" alt="Logo" width={80} height={80} />
    </Link>
  )
}

export default Logo