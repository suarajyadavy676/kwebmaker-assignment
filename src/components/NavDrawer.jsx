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
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Home</DrawerHeader>

            <DrawerBody>
              <p>About</p>
              <p>Category</p>
              <p>Services</p>
              <p>Colours</p>
              <p>Downloads</p>
              <p>Become a dealer</p>
              <p>Blogs</p>
              <p>Contact</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </ChakraProvider>
  );
}

export default NavDrawer;
