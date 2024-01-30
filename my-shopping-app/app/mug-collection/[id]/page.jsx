import Image from "next/image";
import styles from "./page.module.css"
import { readFileAndParseJSON } from "../page";


async function getMugById(id) {
  const mugList = await readFileAndParseJSON();
  console.log(mugList);
  const mugItem = mugList.find(((mug) => mug.id.toString() === id.toString()));

  return mugItem;
}

export default async function IndividualMug({ params }) {
  
  const singleMug = await getMugById(params.id);

  console.log(singleMug);

  return (
    <main className={styles.itempage}>
    <div className={styles.container}>
        <h1 className={styles.title}>{singleMug.title}</h1>
        <div className={styles.cardcontainer}>
          <article className={styles.singlecard}>
            <Image
              src={singleMug.img_url}
              alt="Picture of a custom mug"
              width="196"
              height="262"
            ></Image>
            <p className={styles.description}>{singleMug.description}</p>
            <p>£{singleMug.price}</p>
          </article>
        </div>
    </div>
    </main>
  )
}

// Specify dynamic paths for individual mugs
export async function getStaticPaths() {
  const mugList = await readFileAndParseJSON();
  const paths = mugList.map((mug) => ({
    params: { id: mug.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}