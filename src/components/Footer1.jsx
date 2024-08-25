import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiFacebookLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer1() {
  return (
    <>
      <div
        className="relative p-8 text-white"
        style={{
          backgroundImage: 'url("/group/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        id="contact"
      >
        <h1 className="text-center mb-8">Group Company</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 text-center justify-between w-[90%] mx-auto">
          <Image
            src="/group/g1.png"
            alt="group company 1"
            width={100}
            height={100}
          />
          <Image
            src="/group/g2.png"
            alt="group company 2"
            width={100}
            height={100}
          />
          <Image
            src="/group/g3.png"
            alt="group company 3"
            width={100}
            height={100}
          />
          <Image
            src="/group/g4.png"
            alt="group company 4"
            width={100}
            height={100}
          />
          <Image
            src="/group/g5.png"
            alt="group company 5"
            width={100}
            height={100}
          />
        </div>
        {/* horizontal line */}
        <hr className="text-white text-2xl my-9" />
        <div className="flex justify-between flex-wrap">
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>

            <p className="my-2">Reach Us</p>

            <p className="my-2">
              <CiLocationOn className="inline mr-2 text-2xl" />
              <span className="text-sm">
                #417/418, 11th Cross, 4th Phase, Peenya Industrial Area,
                Bangalore - 560 058
              </span>
            </p>
            <p className="my-2">
              <IoCallOutline className="inline mr-2 text-2xl" />{" "}
              <a href="tel:91 – 80 – 42552555" className="text-sm">
                +91 – 80 – 42552555
              </a>
            </p>
            <p className="my-2">
              <MdOutlineMailOutline className="inline mr-2 text-2xl" />{" "}
              <a href="mailto:info@gem-paints.com" className="text-sm">
                info@gem-paints.com
              </a>
            </p>
          </div>

          <div>
            <div className="text-sm flex justify-between flex-wrap">
              <div className="mr-6 my-2">
                <p>sign up to our newsletter</p>
                <p>Lorem ipsum dolor sit amet consectetur. </p>
              </div>
              <div className="my-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl px-2 py-1 bg-transparent placeholder:text-white text-white border-2 border-gray-400"
                />
                <button className="bg-blue-600 text-white rounded-xl px-2 py-1 -ml-4">
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-sm my-4">
              <div>
                <p className="my-2">About</p>
                <p className="my-2">About astrals</p>
                <p className="my-2">paint journey</p>
                <p className="my-2">Group Companies</p>
              </div>
              <div>
                <p className="my-2">Category</p>
                <p className="my-2">interior paints</p>
                <p className="my-2">exterior paints</p>
                <p className="my-2">undercoats</p>
                <p className="my-2">painting tools</p>
                <p className="my-2">water proofing</p>
              </div>
              <div>
                <p className="my-2">Services</p>
                <p className="my-2">wall painting</p>
                <p className="my-2">water Solution</p>
                <p className="my-2">painting</p>
                <p className="my-2">colour shades</p>
              </div>
              <div>
                <p className="my-2">Downloads</p>
                <p className="my-2">Become a dealer</p>
                <p className="my-2">Blogs</p>
                <p className="my-2">Contact</p>
                <p className="my-2">
                  <PiFacebookLogoLight className="inline mr-2 text-2xl" />
                  <CiInstagram className="inline mr-2 text-2xl" />
                  <CiYoutube className="inline mr-2 text-2xl" />
                  <FaXTwitter className="inline mr-2 text-2xl" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer1;
