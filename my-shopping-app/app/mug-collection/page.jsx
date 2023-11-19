import Image from "next/image";
import Link from "next/link";
import AddButton from "../components/AddButton";
import styles from "./styles.module.css"

async function getMugs() {
    const res = await fetch("http://localhost:4000/mugs");
    return res.json();
}

export default async function MugItems() {

const mugList = await getMugs();

    return (
      <main className={styles.maincontainer}>
      <div className={styles.title}>
      <h3>Don't be a mug, buy a mug!</h3>
      </div>
      <div className={styles.articlecontainer}>
        {mugList.map((mug) => (
          <article key={mug.id} className={styles.card}>
            <Image
              src={mug.img_url}
              alt="Picture of a custom mug"
              width="98"
              height="131"
              loading="eager" 
              priority="high"
            ></Image>
            <p>{mug.title}</p>
            <p>£{mug.price}</p>
            <div className="buttons">
            <Link href={`/mug-collection/${mug.id}`}>
            <button>View Item</button>
            </Link>
            <AddButton mug={mug} />
            </div>
          </article>
        ))}
        </div>
      </main>
    );
  }