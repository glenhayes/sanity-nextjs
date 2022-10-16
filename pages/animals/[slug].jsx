import React from "react";
import Banner from "../../components/banner";
import client from "../../lib/sanity";

const AnimalDetailPage = ({ animal }) => {
  if (!animal) return <div>Sorry no animal to show</div>;
  const { banner } = animal;
  return (
    <div>
      {banner && <Banner {...banner} />}
      <div className="px-4 py-20">
        <div className="container mx-auto ">
          <p className="max-w-prose mx-auto text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
            est veniam doloremque sit sed ab odio reprehenderit magni odit, fuga
            iure cum, nihil alias porro accusamus delectus possimus rem
            incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const animals = await client.fetch(`*[_type == "animal"]`);
  const paths = animals.map((animal) => ({
    params: {
      slug: animal.slug.current,
    },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const slug = context?.params?.slug;
  const data = await client.fetch(
    `*[_type == "animal" && slug.current == "${slug}"]`
  );

  const [animal] = data;

  return {
    props: { animal },
  };
}

export default AnimalDetailPage;
