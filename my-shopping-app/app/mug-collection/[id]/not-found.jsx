import styles from "../../errorpage.module.css"

export default function NotFound() {
  return (
    <main className={styles.errormessage}>
    <h2>Oops, can't find the mug you're looking for</h2>
    <p>Please use the navigation bar to return to the site!</p>
    </main>
  )
}
