"use client"

import { AddToCartContext } from "@/context/addtocartcontext";
import { useContext, useState } from "react";

export default function AddButton({mug}) {
    
  const { basket, setBasket } = useContext(AddToCartContext);
  const [showNotification, setShowNotification] = useState(false);

  const addToBasket = () => {
    if (!mug || !mug.id) {
      console.error("Invalid mug data:", mug);
      return;
    }

    setBasket([...basket, mug]);
    setShowNotification(true);

    // Hide the notification after a brief delay (e.g., 2 seconds)
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={addToBasket}>Add to Basket</button>
      {showNotification && (
        <div style={{ color: "black", marginTop: "5px" }}>
          Item added to the basket!
        </div>
      )}
    </>
  );
}
