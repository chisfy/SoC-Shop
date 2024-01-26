import React from 'react'
import styles from "../cart/styles.module.css";


export default function Quantity() {
  return (
    <div>
    <button className={styles.plusButton}><strong>+</strong></button>
    <div className={styles.quantitybox}>
    <p>1</p>
    </div>
    <button className='plus-button'><strong>-</strong></button>
    </div>
  )
}
