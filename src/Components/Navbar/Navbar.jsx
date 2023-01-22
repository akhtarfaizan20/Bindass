import { ReactNode } from "react";
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";
import {
  AiFillHeart,
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} w={"80%"} margin={"auto"}>

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
                <img
                  src={logo}
                  alt=""
                  style={{
                    width: "100px",
                  }}
                />
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink to="/products/man">Men</NavLink>
              <NavLink to="/products/women">Women</NavLink>
              <NavLink to="/">Mobile </NavLink>
              
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={"1rem"}>
          <InputGroup
                variant="filled"
                size="sm"
                style={{
                  // marginLeft: "5em",
                  width:"15rem",
                  borderRadius:"15px",
                  marginRight:"2rem"
                }}
              >
                <InputLeftElement
                
                  pointerEvents="none"
                  children={<AiOutlineSearch  />}
                />
                <Input  
               
                  type="tel"
                  // focusBorderColor="black.400"
                  placeholder="Search Product"
                  border="1px"
                />
              </InputGroup>
              <LoginAuth />
            <NavLink to="/cart">
            
              <CiHeart
                style={{
                  width: "40px",
                  height: "42px",
                }}
              />
            </NavLink>

            <NavLink to="/cart">
              <BsBag
                style={{
                  width: "50px",
                  height: "28px",
                  marginRight: "1em",
                }}
              />
            </NavLink>
            {/* <LoginAuth /> */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} to={`/products/${link}`}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

const Links = ["men", "women"];
