import React from 'react'
import { Flex } from '@chakra-ui/react';
const NavbarContainer = ({ children, isOpen,...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      p={2}
      position="absolute"
      top="0"
      bg={isOpen ? "primary.600" :['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavbarContainer