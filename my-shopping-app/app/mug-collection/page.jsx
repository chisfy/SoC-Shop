import Image from "next/image";
import Link from "next/link";
import AddButton from "../components/AddButton";

async function getMugs() {
    const res = await fetch("http://localhost:4000/mugs");
    return res.json();
}

export default async function MugItems() {

const mugList = await getMugs();

    return (
      <main>
      <h3>Don't be mug, buy a mug!</h3>
      <>
        {mugList.map((mug) => (
          <article key={mug.id}>
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
            <Link href={`/mug-collection/${mug.id}`}>
            <button>View Item</button>
            </Link>
            <AddButton mug={mug} />
          </article>
        ))}
      </>
      </main>
    );
  }