import { PortableText } from "@portabletext/react";
import Link from "next/link";
import client from "../lib/sanity";

export default function IndexPage({ animals }) {
  return (
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Animals</h2>
        {animals.length > 0 && (
          <ul>
            {animals.map((animal) => (
              <li key={animal._id}>
                <dt>
                  <Link href={`/animals/${animal.slug.current}`}>
                    {animal?.name}
                  </Link>
                </dt>
                <dd>
                  <PortableText value={animal?.myRichTextExample} />
                </dd>
              </li>
            ))}
          </ul>
        )}
        {!animals.length > 0 && <p>No animals to show</p>}
        {animals.length > 0 && (
          <div>
            <pre>{JSON.stringify(animals, null, 2)}</pre>
          </div>
        )}
        {!animals.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const animals = await client.fetch(`*[_type == "animal"]`);
  return {
    props: {
      animals,
    },
  };
}
