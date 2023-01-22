import { ReactNode } from "react";
import logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
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
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
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
              <InputGroup
                variant="filled"
                size="xs"
                style={{
                  marginLeft: "5em",
                }}
              >
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineSearch />}
                />
                <Input
                  type="tel"
                  // focusBorderColor="black.400"
                  placeholder="Search Product"
                  border="1px"
                />
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <NavLink to="/cart">
              <AiFillHeart
                style={{
                  width: "50px",
                  height: "40px",
                }}
              />
            </NavLink>

            <NavLink to="/cart">
              <AiOutlineShoppingCart
                style={{
                  width: "50px",
                  height: "40px",
                  marginRight: "1em",
                }}
              />
            </NavLink>
            <LoginAuth />
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
