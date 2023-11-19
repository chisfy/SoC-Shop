"use client"

import useBasket from "../hooks/useBasket"

export default function AddButton({mug}) {
    
const { addToBasket } = useBasket();

  return (
    <>
    <button onClick={() => addToBasket(mug)}>Add to Basket</button>
    </>
  )
}
