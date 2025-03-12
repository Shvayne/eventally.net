import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import Heroimage from '../../../assets/2.png'

const HeroImg = () => {
  return (
    <Box
      w="100%"
      h={{ base: "auto", md: "100%" }}
      maxW={{ base: "100%", md: "500px"}}
      display="flex"
      justifyContent="center"
      alignItems="center"
      positon="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        bg="primary.500"
        opacity="0.2"
        borderRadius="full"
        w={{ base: "300px", md: "500px", lg: "600px" }}
        h={{ base: "300px", md: "500px", lg: "600px" }}
        zIndex="0"
      />
      <Image
        src={Heroimage}
        alt="champange toast"
        w="100%"
        maxW={{ base: "320px", md: "450px", lg: "550px" }}
        zIndex="1"
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.02)" }}
      />
    </Box>
  )
}

export default HeroImg