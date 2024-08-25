import React from "react";
import Button from "./Button";

function Category() {
  return (
    <div className="w-[90%] mx-auto mt-20">
      <p className="text-lg font-bold mb-4">Category</p>
      <p className="text-2xl font-extrabold">Wide range of Colours</p>
      <div className="flex flex-col sm:flex-row justify-between" >
        <div className="relative bg-[url('/category/c1.png')] my-9 bg-cover bg-center bg-no-repeat w-full sm:w-[50%] h-[300px] flex-shrink-0">
          <div className="absolute bottom-0 left-0 right-0 bg-[#FF911999] flex justify-between items-center p-4">
            <p className="text-white">Interior Paints</p>
            <Button />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white w-full sm:w-[45%]">
          <div className="bg-[url('/category/c2.png')] bg-cover bg-center bg-no-repeat h-[200px]">
            <p className="pt-32 px-10 pb-3">Exterior Paints</p>
          </div>
          <div className="bg-[url('/category/c3.png')] bg-cover bg-center bg-no-repeat h-[200px]">
            <p className="pt-32 px-10 pb-3">Water Proofing</p>
          </div>
          <div className="bg-[url('/category/c4.png')] bg-cover bg-center bg-no-repeat h-[200px]">
            <p className="pt-32 px-10 pb-3">Undercoats</p>
          </div>
          <div className="bg-[url('/category/c5.png')] bg-cover bg-center bg-no-repeat h-[200px]">
            <p className="pt-32 px-10 pb-3" id="services">Painting Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
