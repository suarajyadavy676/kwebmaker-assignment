import { gql } from "@apollo/client";
import client from "@/data/apolloClient";
import Blogs from "@/components/Blogs";
import Colours from "@/components/Colours";
import Services from "@/components/Services";
import Category from "@/components/Category";
import Button from "@/components/Button";
import Image from "next/image";
import { GET_HOME_PAGE_AND_SEO_DATA } from "@/data/seoAndHomePageData";


// Fetch data directly in the component
async function fetchData() {
  const { data } = await client.query({
    query: GET_HOME_PAGE_AND_SEO_DATA,
  });
  return data.pages.nodes[0];
}

export default async function Home() {
  const { seo, homepage } = await fetchData();
  // console.log("seo in page : ", seo);

  return (
    <main className="">
      <div className="bg-[url('/home2.jpg')] relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col justify-center items-center">
        <div className="w-[90%] mx-auto">
          <p className="text-4xl font-bold">Interior Emulsions</p>
          <p className="mt-2 text-xl" id="about">
            Excellent fungal resistance | smooth finish
          </p>
          <Button className="mt-4" />
        </div>
      </div>
      {/* <Image
        src="/rainbow.svg"
        alt="home1"
        layout="responsive"
        width={100}
        height={100}
        className="absolute top-[73vh] right-0"
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6 w-[90%] mx-auto mt-20">
        <div>
          <p className="text-lg font-bold my-4">About Astral Paints</p>
          <p className="text-2xl font-extrabold my-4">Bringing your dreams to life</p>
          <p className="my-2">Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.</p>
          <p className="my-2">Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.</p>
        <button className="border-2 border-red-500 text-red-600 rounded-xl px-2 py-1 my-2" id="category">Read More</button>
        </div>
        <div>
          <Image src={"/home3.png"} alt="home3" layout="responsive" width={100} height={100} />
        </div>
      </div>

      {/* category */}
      <Category />

      {/* services */}
      <Services {...homepage} />

      {/* colours */}
      <Colours />

      <div className='bg-[url("/home1.jpg")] bg-cover bg-center bg-no-repeat text-white py-10 text-center'>
        <p className="text-lg ">Join the Success Journey</p>
        <p className="text-2xl font-bold my-2">Become a Dealer</p>
        <p id="blogs">
          Lorem ipsum dolor sit amet consectetur. Integer dui quam nisi in
          ornare. Nec in tristique et ultrices sit ullamcorper massa tempor et.
        </p>
        <Button className="mt-4" />
      </div>

      {/* blogs */}
      <Blogs {...homepage} />
    </main>
  );
}
