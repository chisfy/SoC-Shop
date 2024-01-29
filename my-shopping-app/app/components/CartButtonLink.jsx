"use client";
import Link from "next/link";
import { AddToCartContext } from "@/context/addtocartcontext";
import { useContext } from "react";

export default function cartButtonLink() {
  const { basket } = useContext(AddToCartContext);

  return (
    <Link href="/cart">
      <div>
        <h3 style={{ color: basket.length > 0 ? "red" : "black", display: "inline"}}>
          Cart
        </h3>
      </div>
    </Link>
  );
}