"use client"

import useBasket from "../hooks/useBasket"

export default function Basket() {

const { basket } = useBasket();

console.log(basket);

return (
    <div>
    <p>Cart is currently empty!</p>
    </div>
  );
};