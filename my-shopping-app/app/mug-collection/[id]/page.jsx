import Image from "next/image";

async function getMugById(id) {
    const res = await fetch(`http://localhost:4000/mugs/${id}`);

    return res.json();
}

export default async function IndividualMug({ params }) {
    
const mugItem = await getMugById(params.id);

  return (
    <div>
          <article>
            <Image
              src={mugItem.img_url}
              alt="Picture of a custom mug"
              width="98"
              height="131"
            ></Image>
            <p>{mugItem.title}</p>
            <p>{mugItem.description}</p>
            <p>£{mugItem.price}</p>
          </article>
    </div>
  )
}
