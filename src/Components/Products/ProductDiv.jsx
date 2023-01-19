import React from 'react'
import styles from "./ProductDiv.module.css"
import { Box, Image, Badge } from "@chakra-ui/react";


const ProductDiv = ({data}) => {

    const { image, desc, price, strickedoffprice, ratings } = data;

  return (
    <div className={styles.main}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image boxSize='200px'  src={image} alt={image} />
        <Box >
          <Box padding={2} fontSize="16px" p={1} color="gray" display="flex" margin="auto" justifyContent="space-around" alignItems="baseline">
            <h1 >Bindass</h1>
            
            <Badge borderRadius="full" px="2" colorScheme="gray">
              <Image boxSize='30px' p={1}  objectFit='cover' src="https://images.bewakoof.com/web/Wishlist.svg" />
            </Badge>
          </Box>
          <Box
            mt="1"
            as="p"
            lineHeight="tight"
            noOfLines={1}
            marginLeft="10px"
            
          >
            {desc}
          </Box>
          <Box  marginLeft="6px">
            <Box marginLeft="4px" as="span"  color="gray.600" fontSize="md">
              Price:
            </Box>
            <Box marginLeft="4px" as="span" color="gray.600"  fontSize="md">
              <span>&#8377;</span>
              {price}
            </Box>
          </Box>
          <Box >
            <Box marginLeft="4px" as="span"  color="gray.600" fontSize="md">
              <Badge as="h4" borderRadius="full" px="2" colorScheme="black">
                Discount Price :
              </Badge>
            </Box>
            <Box as="span" color="gray.600"  fontSize="sm">
              <s>{strickedoffprice}</s>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ProductDiv