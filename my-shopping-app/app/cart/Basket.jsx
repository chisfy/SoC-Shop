"use client"

import { AddToCartContext } from "@/context/addtocartcontext";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Basket() {

const { basket } = useContext(AddToCartContext);

return (
    <>
      <main className={styles.articlecontainer}>
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
            <div className="buttons">
            <Link href={`/mug-collection/${mug.id}`}>
            <button>Buy Now</button>
            </Link>
            </div>
        </article>
      ))}
    </main>
    </>
  );
};