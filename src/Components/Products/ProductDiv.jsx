import React from "react";
import styles from "./ProductDiv.module.css";
import { Box, Image, Badge } from "@chakra-ui/react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const ProductDiv = ({ data }) => {
  const { image, desc, price, strickedoffprice, ratings } = data;

  return (
    <Box
      px="10px"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      textAlign={"left"}
    >
      <Image margin="auto" height="250px" src={image} alt={image} />
      <Box display={"flex"} flexDirection={"row"} >
        <Box width={"80%"} >
          <Box mt="1" as="p" lineHeight="tight" noOfLines={1} marginLeft="10px">
            {desc}
          </Box>
          <Box marginLeft="6px">
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
              Price:
            </Box>
            <Box marginLeft="4px" as="span" color="gray.600" fontSize="sm">
              ₹{dollarIndianLocale.format(price)}
              /-
            </Box>
          </Box>
          <Box paddingBottom="10px">
            <Box
              marginLeft="4px"
              as="span"
              p={"5px"}
              color="gray.600"
              fontSize="sm"
            >
              Discount Price :
            </Box>
            <Box as="span" color="gray.600" fontSize="sm">
              <s>{strickedoffprice}</s>
            </Box>
          </Box>
        </Box>
        <Box >
          <Image boxSize="30px" src="https://images.bewakoof.com/web/Wishlist.svg" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDiv;
