import Link from "next/link"
import "./globals.css"

import styles from "./errorpage.module.css"

export default function NotFound() {
    return (
      <main className={styles.errormessage}>
      <h2>Oops, can't find what you're looking for</h2>
      <p>Please use the navigation bar to return to the <Link href="/"><strong>site!</strong></Link></p>
      </main>
    )
  }
  