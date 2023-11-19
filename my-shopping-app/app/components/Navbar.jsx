import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
    <h1>SoC Shop</h1>
    <Link href="/">
    <h3>Home</h3>
    </Link>
    <Link href="/cart">
    <h3>Cart</h3>
    </Link>
    <Link href="/mug-collection">
    <h3>Catalog</h3>
    </Link>
    </nav>
  )
}
