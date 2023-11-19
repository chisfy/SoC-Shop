import Link from "next/link"

export default function NotFound() {
    return (
      <div>
      <h2>Oops, can't find what you're looking for</h2>
      <p>Please use the navigation bar to return to the <Link href="/">site!</Link></p>
      </div>
    )
  }
  