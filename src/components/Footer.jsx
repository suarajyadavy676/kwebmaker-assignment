import React from "react";
import Footer1 from "./Footer1";

function Footer() {
  return (
    <>
    <Footer1/>
    <div className="bg-[#0060AF]">
    <div className=" grid sm:grid-cols-3 grid-cols-2 text-sm justify-between gap-5 px-2 sm:px-6 py-3 text-white lg:w-[90%] mx-auto">
      <p>Terms & Conditions</p>
      <p>ALL RIGHTS RESERVED</p>
      <p className="sm:text-right">Privacy Policy</p>
    </div>
    </div>
    </>
  );
}

export default Footer;
