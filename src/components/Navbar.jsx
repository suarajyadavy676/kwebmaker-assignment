"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavDrawer from "./NavDrawer";

function Navbar(props) {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 0); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isFixed ? 'fixed top-0 left-0 w-full z-50' : 'relative'} bg-[#0060AF] py-6 text-white transition-all duration-300 ease-in-out`}>
      <div className="flex flex-wrap justify-between px-6 text-sm">
        {/* Logo */}
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden xl:block">
          <ul className="grid grid-cols-9 gap-4">
            <li><button>About</button></li>
            <li><button>Category</button></li>
            <li><button>Services</button></li>
            <li><button>Colours</button></li>
            <li><button>Downloads</button></li>
            <li><button>Become a dealer</button></li>
            <li><button>Blogs</button></li>
            <li><button>Contact</button></li>
            <li>
              <button className="bg-white rounded-xl text-blue-500 py-1 px-2">
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
