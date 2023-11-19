import Basket from "./Basket";
import styles from "./styles.module.css"

export default function Cart() {
  return (
    <main className={styles.cartpage}>
    <h1>Basket:</h1>
    <Basket/>
    </main>
  )
}