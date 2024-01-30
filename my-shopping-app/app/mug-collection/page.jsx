import Image from "next/image";
import Link from "next/link";
import AddButton from "../components/AddButton";
import styles from "./styles.module.css"
import { promises as fs } from 'fs';


export async function readFileAndParseJSON() { 

    // Read the contents of db.json
    const file = await fs.readFile(process.cwd() + '/app/db.json', 'utf8');
    
    // Parse the JSON data
    const mugList = JSON.parse(file);
    // Output the parsed data
    return mugList;
}


export default async function MugItems() {

    // Call the function
    const mugList = await readFileAndParseJSON();
    console.log(mugList);

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