import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/assets/logo.png" className="z-10 cursor-pointer" alt="Logo" width={90} height={90} />
    </Link>
  )
}

export default Logo