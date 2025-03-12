import React from "react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";
import CTA from "./CTA";
import HeroImg from "./HeroImg";

const About = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row"}}
      align="center"
      justify="space-between"
      p={{ base: 4, md: 0}}
      minH={{ base: "auto", md: "100vh" }}
      w="100%"
      maxW="100vw"
      bg={useColorModeValue("white", "primary.300")}
      overflow="hidden"
      pt={{ base: "80px", md: "80px"}}
    >
      <Box 
        flex="1" 
        mb={{ base: 6, md: 0}}
        pl={{ base: 4, md: 16, lg: 24 }}
        pr={{ base: 4, md: 8 }}
        py={{ base: 8, md: 0}}
      >
        <CTA />
      </Box>
      <Box 
        flex="1" 
        display="flex" 
        justifyContent="right"
        alignItems="right"
        h={{ base: "auto", md: "cal(100vh - 80px)" }}
        position="relative"
      >
        <HeroImg />
      </Box>
    </Flex>
  )
}
export default About