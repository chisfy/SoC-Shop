"use client"

import { AddToCartContext } from "@/context/addtocartcontext";
import { useContext } from "react";

export default function AddButton({mug}) {
    
  const { basket, setBasket } = useContext(AddToCartContext);

  const addToBasket = () => {
    setBasket([...basket, mug]);
    console.log(basket);
  };

  return (
    <>
    <button onClick={addToBasket}>Add to Basket</button>
    </>
  )
}
