import { ReactNode } from "react";
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { BsBag } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

import LoginAuth from "./loginAuth";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Search from "./Search";

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        py={1}
        // borderTop={"1px solid #ccc"}
        borderBottom={"1px solid #ccc"}
        position={"fixed"}
        w={"100%"}
        zIndex={"999"}
        backgroundColor={"white"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          w={useBreakpointValue({ base: "100%", lg: "80%" })}
          margin={"auto"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink to="/">
                <Image
                  src={logo}
                  alt=""
                  w={useBreakpointValue({ base: "80px", lg: "150px" })}
                />
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              fontSize={"20px"}
            >
              <NavLink to="/products/men">Men</NavLink>
              <NavLink to="/products/women">Women</NavLink>
              <NavLink to="/">Mobile </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={"1rem"}>
            <Box>
              <Search />
            </Box>
            <LoginAuth />
            <NavLink to="/cart">
              <Text fontSize={"35px"}>
                <AiOutlineHeart />
              </Text>
            </NavLink>

            <NavLink to="/cart">
              <Text fontSize={"30px"}>
                <AiOutlineShoppingCart />
              </Text>
            </NavLink>
            {/* <LoginAuth /> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link.url}
                  to={`/products/${link.url}`}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {link.title}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

const Links = [
  { url: "men", title: "Mens" },
  { url: "women", title: "Womens" },
];
