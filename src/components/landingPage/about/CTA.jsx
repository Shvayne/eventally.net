import React from 'react'
import { Box, Text, Input, Heading, Button, Flex, VStack } from '@chakra-ui/react'
const CTA = () => {
  return (
    <Box maxW={{ base: "100%", md: "90%", lg: "80%" }}>
      <VStack spacing={6} align="flex-start">
        <Heading 
          as="h1"
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl"}} 
          fontWeight="bold"
          lineHeight="1.1"
        >
          Find Your Next{""}
          <Text as="span" color="#008080">Ally</Text>
        </Heading>

        <Text 
          fontSize={{ base: "md", md: "lg", lg: "xl" }} 
          maxW="550px"
          color="gray.600"
        >
          Discover local events and connect with 
          the people who make them unforgettable.
        </Text>
        <Flex 
          mt={6} 
          direction={{ base: "column", sm: "row" }} 
          gap={4}
          w="100%"
          maxW="550px"
        >
          <Input
            placeholder="Enter your Email"
            size="lg"
            borderRadius="md"
            border="1px solid"
            borderColor="primay.500"
            _focus={{ borderColor: "primary.300", boxShadow: "0 0 0 1px primary.300"}}
            py={6}
            flex="1.5"
          />
          <Button
            bg="primary.800"
            color="white"
            href="/signup"
            size="lg"
            py={6}
            px={8}
            flex="1"
            fontSize="md"
            fontWeight="bold"
            _hover={{ bg: "primary.600", transform: "translateY(-2px)"}}
            _active={{ bg: "primary.900"}}
            transition="all 0.2s"
            borderRadius="md"
            boxShadow="md"
          >
            Explore Events
          </Button>
        </Flex>
      </VStack>
    </Box>
  )
}

export default CTA