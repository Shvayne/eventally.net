import React from 'react'
import { Box, Icon } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box 
      display={{ base: "block", md: "none" }} 
      onClick={toggle}
      position="relative"
      zIndex="1010"
      p={2}
      borderRadius="md"
      _hover={{
        cursor: "pointer",
        bg: isOpen ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)" 
      }}
    >
      {isOpen ? 
        <CloseIcon color="white" boxSize={6} /> : 
        <HamburgerIcon color={["white", "white", "primary.500", "primary.500"]} boxSize={6} />
      }
    </Box>
  )
}

export default MenuToggle