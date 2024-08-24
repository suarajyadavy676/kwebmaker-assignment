"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

// Custom hook to detect screen size
function useScreenSize() {
  const [isXL, setIsXL] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isXL;
}

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const isXL = useScreenSize(); // Move this hook call here

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
