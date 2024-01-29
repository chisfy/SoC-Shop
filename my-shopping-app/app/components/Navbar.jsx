import Link from "next/link"
import Image from "next/image"
import Logo from "../../public/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
import CartButtonLink from "./CartButtonLink"

export default function Navbar() {
  return (
    <nav className="nav-bar">
    <div className="img-logo">
    <Image
    src={Logo}
    width="110"
    height="110"
    alt="SoC logo"
    />
    <h1>SoC Shop</h1>
    </div>
    <div className="links">
    <Link href="/">
    <h3>Home</h3>
    </Link>
    <CartButtonLink/>
    <Link href="/mug-collection">
    <h3>Catalog</h3>
    </Link>
    </div>
    </nav>
  )
}
