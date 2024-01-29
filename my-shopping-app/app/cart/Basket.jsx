"use client";

import { AddToCartContext } from "@/context/addtocartcontext";
import { useContext, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Basket() {
  const { basket, setBasket } = useContext(AddToCartContext);
  const [showNotification, setShowNotification] = useState(false);
  const [quantities, setQuantities] = useState(
    basket.reduce((acc, mug) => ({ ...acc, [mug.id]: 1 }), {})
  );


  function getTotalPrice() {
    return basket.reduce((sum, mug) => sum + mug.price * (quantities[mug.id] || 0), 0);
  }

  console.log(basket)

  const buyNow = () => {
    if (!basket) {
      console.error("Invalid basket data:", basket);
      return;
    }

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      setBasket([]);
    }, 2000);
  };

 const increaseQuantity = (mugId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [mugId]: (prevQuantities[mugId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (mugId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [mugId]: Math.max((prevQuantities[mugId] || 0) - 1, 0),
    }));
  };

  const removeItem = (mugId) => {
    setBasket((prevBasket) => prevBasket.filter((mug) => mug.id !== mugId));
  };

  //figuring out how add quantity to basket
  //usestate to set quantity
  //2 buttons to add and remove quantity
  //number in a white box to display quantity

  //price in card and total must reflect quantity
  //

  //make it all work in mobile view

  return (
    <>
      <main className={styles.articlecontainer}>
        {basket.length === 0 && (
          <div className={styles.emptybasket}>
            <h2>Your basket is empty</h2>
            <p>Please add some mugs to your basket</p>
            <Link href="/mug-collection">
              <button className={styles.emptybasketbutton}>View Mugs</button>
            </Link>
          </div>
        )}
        {basket.map((mug) => (
          <article key={mug.id} className={styles.card}>
            <Image
              src={mug.img_url}
              alt="Picture of a custom mug"
              width="150"
              height="150"
              loading="eager"
              priority="high"
            ></Image>
            <p>{mug.title}</p>
            <p>£{mug.price}</p>
            <div className={styles.quantitybox}>
              <button onClick={() => increaseQuantity(mug.id)} className={styles.plusButton}>
                +
              </button>
              <div className={styles.quantityno}>
                <p>{quantities[mug.id]}</p>
              </div>
              <button onClick={() => decreaseQuantity(mug.id)}className={styles.plusButton}>
                -
              </button>
            </div>
            <div className={styles.removeButton}>
            <button
                onClick={() => removeItem(mug.id)}
                className={styles.trash}
              >
                🗑
              </button>
            </div>
          </article>
        ))}
        {basket.length > 0 && (
          <div className={styles.total}>
            <h2>Total: £{getTotalPrice().toFixed(2)}</h2>
            <button onClick={buyNow}>Buy Now</button>
            {showNotification && (
              <div style={{ color: "black", marginBlock: "10px" }}>
                Congratulations! You have bought some mugs!
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}
