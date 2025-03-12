import React from 'react'
import { Link, Text } from "@chakra-ui/react";
const MenuItem = ({ children, to = '/', ...rest }) => {
  return (
    <Link href={to} display="flex" alignItems="center" height="100%">
      <Text display="block" py={{ base: 2, md: 0 }} px={4} fontWeight="medium" fontSize="md" _hover={{ textDecoration: "none", color: "primary.800" }} {...rest}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem