import React, { useEffect } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../Redux/SingleProduct/singleProduct.actions";
import { addToCart } from "../Redux/Cart/cart.actions";
import { useAuth0 } from "@auth0/auth0-react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");




const ProductDetails = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const {id}= useParams()
  const dispatch =useDispatch()
  const toast=useToast()
  const { loading, error, product  } = useSelector(
    (store) => store.singleProductManager
  );
 
  useEffect(()=>{
    dispatch(getSingleProducts({id}))

  },[])

  console.log(product)
   const {image, desc,brand, price, strickedoffprice, ratings}=product
  const handleAddToCart=async()=>{
    let item={
      user:user.email,
      product:product,
      size:"M",
      qty:1
    }
    await dispatch(addToCart(item))
    toast({
      title: 'Added to Cart',
      description: "Item has successfully added to Cart",
      status: 'success',
      duration: 6000,
      isClosable: true,
    })

  }
  
  return (

     <Container maxW={"7xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {brand}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                ₹{dollarIndianLocale.format(price)}
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                <s>{strickedoffprice}</s>
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"lg"}>
                {desc}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Features
                </Text>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Ratings</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{ratings}</ListItem>
                  
                  </List>
                </SimpleGrid>
              </Box>
             
            </Stack>

            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container> 
    
  );
};

export default ProductDetails;
