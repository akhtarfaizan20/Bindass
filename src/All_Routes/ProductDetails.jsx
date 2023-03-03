import React, { useEffect, useState } from "react";
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
  GridItem,
  Grid,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../Redux/SingleProduct/singleProduct.actions";
import { addToCart } from "../Redux/Cart/cart.actions";
import { useAuth0 } from "@auth0/auth0-react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");
import { StarIcon } from "@chakra-ui/icons";

const ProductDetails = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const { loading, error, product } = useSelector(
    (store) => store.singleProductManager
  );

  const [size, setSize] = useState("M");

  useEffect(() => {
    dispatch(getSingleProducts({ id }));
  }, [id]);

  console.log(product);
  const { image, desc, brand, price, strickedoffprice, ratings } = product;
  const handleAddToCart = async () => {
    if (isAuthenticated) {
      let item = {
        user: user.email,
        product: product,
        size: size,
        qty: 1,
      };
      await dispatch(addToCart(item));
      toast({
        title: "Added to Cart",
        description: "Item has successfully added to Cart",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Please, Sign in first",
        position: "top",
        description:
          "Kindly sign in to your account to add product in your cart.",
        status: "info",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          {loading ? (
            <Flex justifyContent={"center"} p={"50px"}>
              <Spinner textAlign={"center"} />
            </Flex>
          ) : (
            <Image
              rounded={"md"}
              alt={"product image"}
              src={image}
              fit={"cover"}
              align={"center"}
              w={"50%"}
              h={{ base: "80%", sm: "300px", lg: "400px" }}
            />
          )}
        </Flex>
        <Stack spacing={{ base: 2, md: 4 }}>
          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight="normal"
            fontSize={"3xl"}
          >
            {brand}
          </Text>
          <Box as={"header"}>
            <Heading
              fontWeight="normal"
              fontSize={{ base: "md", sm: "xl", lg: "2xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              {desc}
            </Heading>
            <Box py={2} display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < ratings ? "teal.500" : "gray.300"}
                  />
                ))}
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="md"
              textTransform="uppercase"
              ml="2"
              py={3}
            >
              Price ₹{dollarIndianLocale.format(price)}/- {"   "}
              {"   "}
              <s style={{ fontSize: "14px", fontWeight: "lighter" }}>
                {strickedoffprice}/-
              </s>
            </Box>
          </Box>
          <Box>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight="normal"
              fontSize={"md"}
            >
              Select Size
            </Text>
            <br />
            <Grid
              width={"80%"}
              templateColumns={useBreakpointValue({
                base: "repeat(3,1fr)",
                md: "repeat(7,1fr)",
              })}
              gap={"20px"}
            >
              {sizes.map((item) => {
                return (
                  <Flex
                    key={item}
                    border={
                      size === item ? "2px solid black" : "1px solid #ddd"
                    }
                    h={"50px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </Flex>
                );
              })}
            </Grid>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("teal.500", "teal.300")}
              py={2}
              mb={"3"}
            >
              Cloths size {size} selected
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
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Cloth Details
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Fiber or filament</ListItem>
                  <ListItem>Fabric density</ListItem>{" "}
                  <ListItem>Fabric width</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>fiber</ListItem>
                  <ListItem>1.25</ListItem>
                  <ListItem>1.5mtr</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Description
              </Text>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight="normal"
                fontSize={"md"}
                py={2}
              >
                Let the goth queen take over your wardrobe by adding this Killer
                Queen Women's Black Oversized Hoodie to it. Team it with
                distressed denim shorts or joggers & sneakers for a chic look.
                Country of Origin - India
              </Text>

              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight="normal"
                fontSize={"md"}
                py={2}
              >
                Manufactured By - Bindass Brands Pvt Ltd, Sairaj Logistic Hub
                #A5, Bmc Pipeline Road, Opposite All Saints High School, Amne,
                Bhiwandi,Thane, Maharashtra 421302
              </Text>
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

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductDetails;

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
