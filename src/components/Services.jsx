import React from "react";
import Button from "./Button";

function Services({ homeServicesSubtitle, homeServicesTitle }) {
  return (
    <div className="my-14 w-[90%] mx-auto mt-20">
      <p className="text-lg font-bold my-4">{homeServicesSubtitle}</p>
      <p className="text-2xl font-extrabold mb-4">{homeServicesTitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-[url('/services/s1.png')] bg-cover bg-center bg-no-repeat">
        <div className="py-20"></div>
          <div className="bg-[#FFE71099] pt-10">
          <p>Wall Painting</p>
          <p>Lorem ipsum dolor sit amet consectetur. </p>
          <Button/>
          </div>
        </div>
        <div className="bg-[url('/services/s2.png')] bg-cover bg-center bg-no-repeat">
        <div className="py-20"></div>
          <div className="bg-[#FFE71099] pt-10">
          <p>Water Solution</p>
          <p>Lorem ipsum dolor sit amet consectetur. </p>
          <Button/>
          </div>
        </div>
        <div className="bg-[url('/services/s3.png')] bg-cover bg-center bg-no-repeat">
        <div className="py-20"></div>
          <div className="bg-[#FFE71099] pt-10">
          <p>Painting</p>
          <p id="colours">Lorem ipsum dolor sit amet consectetur. </p>
          <Button/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
