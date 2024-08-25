"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

// Custom hook to detect screen size
function useScreenSize() {
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    // This check ensures the code only runs on the client side
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsXL(window.innerWidth >= 1280);
      }
    };

    // Run on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isXL;
}

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const isXL = useScreenSize();

  useEffect(() => {
    if (isXL && isOpen) {
      onClose();
    }
  }, [isXL, isOpen, onClose]);

  return (
    <ChakraProvider>
      <div className="block xl:hidden">
        <Button ref={btnRef} colorScheme="none" onClick={onOpen}>
          <GiHamburgerMenu className="text-3xl" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={"#0060AF"} color="white">
            <DrawerCloseButton />
            <DrawerHeader onClick={onClose} className="hover:text-red-500"><Link href="/">Home</Link></DrawerHeader>

            <DrawerBody onClick={onClose}>
              <p className="my-4 hover:text-red-500"> <Link href="#about">About</Link></p>
              <p className="my-4 hover:text-red-500"><Link href="#category">Category</Link></p>
              <p className="my-4 hover:text-red-500"> <Link href="#services">Services</Link></p>
              <p className="my-4 hover:text-red-500"><Link href="#colours">Colours</Link></p>
              <p className="my-4 hover:text-red-500"><Link href="#downloads">Downloads</Link></p>
              <p className="my-4 hover:text-red-500"><Link href="#dealer">Become a dealer</Link></p>
              <p className="my-4 hover:text-red-500"><Link href="#blogs">Blogs</Link></p>
              <p className="my-4 hover:text-red-500"><Link href="#contact">Contact</Link></p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </ChakraProvider>
  );
}

export default NavDrawer;
