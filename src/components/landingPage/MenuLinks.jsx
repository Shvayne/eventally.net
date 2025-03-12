import React from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
import MenuItem from "./MenuItem";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: 'flex' }}
      flexBasis={{ base: '100%', md: 'auto' }}
      position={isOpen ? "relative" : "static"}
      zIndex="1001"
      alignItems="center"
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={{ base: "column", md: "row" }}
        w="100%"
        h={{ md: "100%" }}
        alignItems="center"
        pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/about">About</MenuItem>
          <MenuItem to="/features">Features</MenuItem>
          <MenuItem to="/testimonials">Testimonials</MenuItem>
          <MenuItem to="/pricing">Pricing</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <MenuItem to="/signup">
            <Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600']
              }}
            >
              Get Started
            </Button>
          </MenuItem>
          <MenuItem to="/signin">
            <Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
              }}
            >
              Sign In
            </Button>
          </MenuItem>
        </Stack>
    </Box>
  )
}

export default MenuLinks;