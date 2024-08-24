"use client";
import React from "react";

function Blogs(props) {
  const { blogSubtitle, blogTitle } = props;
  console.log("homepage", props);
  return (
    <div className="mt-14 w-[90%] mx-auto mb-20">
      <h1 className="text-lg font-bold">{blogSubtitle}</h1>
      <p className="mb-10 font-extrabold text-2xl">{blogTitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
        <div className="relative bg-[url('/blog/blog1.png')] bg-cover bg-center bg-no-repeat pt-14 pb-5">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative px-4 pt-[25vh]">
            <p className="my-2">10 Jan 2024</p>
            <p className="my-2">How to choose the perfect wall colour for your office</p>
          </div>
        </div>

        <div className="relative bg-[url('/blog/blog3.png')] bg-cover bg-center bg-no-repeat pt-14 pb-5 row-span-2">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative px-4 pt-[70vh]">
            <p className="my-2">20 Jan 2024</p>
            <p className="my-2">10 stylish cream colour combinations for your home</p>
            <button className="bg-white text-blue-500 rounded-lg px-3 py-1 my-2">Read More</button>
          </div>
        </div>

        <div className="relative bg-[url('/blog/blog2.png')] bg-cover bg-center bg-no-repeat pt-14 pb-5">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative px-4 pt-[25vh]">
            <p className="my-2">10 Jan 2024</p>
            <p className="my-2">How to choose the perfect wall colour for your office</p>
          </div>
        </div>

        <div className="relative bg-[url('/blog/blog4.png')] bg-cover bg-center bg-no-repeat pt-14 pb-5">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative px-4 pt-[25vh]">
            <p className="my-2">10 Jan 2024</p>
            <p className="my-2">How to choose the perfect wall colour for your office</p>
          </div>
        </div>

        <div className="relative bg-[url('/blog/blog5.png')] bg-cover bg-center bg-no-repeat pt-14 pb-5">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative px-4 pt-[25vh]">
            <p className="my-2">10 Jan 2024</p>
            <p className="my-2">How to choose the perfect wall colour for your office</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
