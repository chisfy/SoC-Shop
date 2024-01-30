import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css"
import { readFileAndParseJSON } from "../page";


async function getMugById(id) {
  const mugList = await readFileAndParseJSON();
  const mugItem = mugList.find((mug) => mug.id === id);
  return mugItem;
}

export default async function IndividualMug({ mugItem }) {

  if (!mugItem) {
    return notFound();
  }
  
  console.log(mugItem);

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

// Fetch data for individual mug
export async function getInitialProps({ params }) {
  const mugItem = await getMugById(params.id);
  return {
    props: {
      mugItem,
    },
  };
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