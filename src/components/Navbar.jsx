"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavDrawer from "./NavDrawer";
import Link from "next/link";

function Navbar(props) {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    if (typeof window !== "undefined") {  // Ensure window is defined
      const position = window.scrollY;
      setIsFixed(position > 0); // Fixed when not at the top
    }
  };

  // Set up event listener for scrolling
  useEffect(() => {
    if (typeof window !== "undefined") {  // Ensure window is defined
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <header className={`${isFixed ? 'fixed top-0 left-0 w-full z-50' : 'relative'} bg-[#0060AF] py-6 text-white transition-all duration-300 ease-in-out`}>
      <div className="flex flex-wrap justify-between px-6 text-sm">
        {/* Logo */}
        <div>
        <Link href="/"><Image src="/logo.png" alt="logo" width={100} height={100} /></Link>       
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden xl:block">
          <ul className="grid grid-cols-9 gap-4">
            <li><button className="hover:text-red-500"><Link href="#about">About</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#category">Category</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#services">Services</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#colours">Colours</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#downloads">Downloads</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#dealer">Become a dealer</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#blogs">Blogs</Link></button></li>
            <li><button className="hover:text-red-500"><Link href="#contact">Contact</Link></button></li>
            <li>
              <button className="bg-white rounded-xl text-blue-500 py-1 px-2 hover:text-red-500">
                Enquire Now
              </button>
            </li>
          </ul>
        </nav>

        {/* Drawer for mobile screens */}
        <NavDrawer />
      </div>
    </header>
  );
}

export default Navbar;
