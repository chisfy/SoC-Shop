import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css"

async function getMugById(id) {
    const res = await fetch(`http://localhost:4000/mugs/${id}`);

    if(!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function IndividualMug({ params }) {
    
const mugItem = await getMugById(params.id);

  return (
    <main className={styles.itempage}>
    <div className={styles.container}>
        <h1 className={styles.title}>{mugItem.title}</h1>
        <div className={styles.cardcontainer}>
          <article className={styles.singlecard}>
            <Image
              src={mugItem.img_url}
              alt="Picture of a custom mug"
              width="196"
              height="262"
            ></Image>
            <p className={styles.description}>{mugItem.description}</p>
            <p>£{mugItem.price}</p>
          </article>
        </div>
    </div>
    </main>
  )
}
