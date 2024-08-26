import React from "react";

function Colours() {
  return (
    <div className="w-[90%] mx-auto mt-20">
      <p className="text-lg font-bold">Colours</p>
      <div className="flex justify-between flex-wrap">
        <p className="my-2 text-2xl font-extrabold" id='dealer'>Popular Colours</p>
        <button className="my-2 border-2 border-green-600 px-2 py-1 rounded-lg">Explore More</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-5 text-center my-10">
        <div className="flex flex-col items-center justify-center">
          <div className="w-[198px] h-[158px] bg-[#FAE0B2] mx-auto"></div>
          <p className="mt-2">Colour Name</p>
          <p>Colour Code</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[198px] h-[158px] bg-[#FBC9C3] mx-auto"></div>
          <p className="mt-2">Colour Name</p>
          <p>Colour Code</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[198px] h-[158px] bg-[#00C1DE] mx-auto"></div>
          <p className="mt-2">Colour Name</p>
          <p>Colour Code</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[198px] h-[158px] bg-[#0060AF] mx-auto"></div>
          <p className="mt-2">Colour Name</p>
          <p>Colour Code</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-2xl rounded-lg">
          <p>Astral Paints</p>
          <div className="w-[198px] h-[158px] bg-[#800404] mx-auto"></div>
          <p className="mt-2">Colour Name</p>
          <p>Colour Code</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-[198px] h-[158px] bg-[#ECA628] mx-auto"></div>
          <p className="mt-2">Colour Name</p>
          <p>Colour Code</p>
        </div>
      </div>
    </div>
  );
}

export default Colours;
