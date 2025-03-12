import React, { useState } from "react";
import Logo from "../Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavbarContainer from "./NavbarContainer";
import { Box } from "@chakra-ui/react";
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    {isOpen && (
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="primary.500"
        zIndex="998"
        overflow="hidden"
      />
    )}
    <NavbarContainer isOpen={isOpen}{...props}>
      <Logo 
        w="100px"
        color={isOpen ? "white" : ['white', 'white', "primary.500", "primary.500"]}
        z-index="1005"
        position="relative"
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  </>
  );
}

export default Navbar;