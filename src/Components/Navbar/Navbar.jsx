import React, { useState } from "react";
import "./navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Input,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

// import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      {" "}
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         <img src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" alt="" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products/:target">Product</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>

           

            <li 
            
            style={{
              "marginLeft":"10em"
            }}
            >
              {/* <Input placeholder="small size" size="md" /> */}

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<AiOutlineSearch />}
                />
                <Input type="tel"   focusBorderColor='black.400' placeholder="Search Product" />
              </InputGroup>
            </li>

            <li><AiFillHeart/></li>
            <li>
            <NavLink to="/cart">
              
              
              <AiOutlineShoppingCart/>
              </NavLink>
              </li>
              

            <li>
              {!isAuthenticated ? (
                <button onClick={() => loginWithRedirect()}>SignIn</button>
              ) : null}
            </li>

            <li 
            style={{
              "marginLeft":"-2em"
            }}
            >
              {isAuthenticated && (
                <>
                  <Flex justifyContent="center" mt={4}>
                    <Popover placement="bottom" isLazy>
                      <PopoverTrigger>
                        <img
                          src={user.picture}
                          alt={"Author"}
                          style={{
                            borderRadius: "100%",
                            width: "50px",
                            marginTop: "-15px",
                          }}
                        />
                      </PopoverTrigger>
                      <PopoverContent _focus={{ boxShadown: "none" }}>
                        <PopoverArrow />

                        <PopoverBody w="full">
                          <Center py={6}>
                            <Box
                              maxW={"270px"}
                              w={"full"}
                              bg={useColorModeValue("white", "gray.800")}
                              boxShadow={"2xl"}
                              rounded={"md"}
                              overflow={"hidden"}
                            >
                              <Image
                                h={"120px"}
                                w={"full"}
                                src={
                                  "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                }
                                objectFit={"cover"}
                              />
                              <Flex justify={"center"} mt={-12}>
                                <Avatar
                                  size={"xl"}
                                  src={user.picture}
                                  alt={"Author"}
                                  css={{
                                    border: "2px solid white",
                                  }}
                                />
                              </Flex>

                              <Box p={6}>
                                <Stack spacing={0} align={"center"} mb={5}>
                                  <Heading
                                    fontSize={"2xl"}
                                    fontWeight={500}
                                    fontFamily={"body"}
                                  >
                                    {user.name}
                                  </Heading>
                                  <Text color={"gray.500"} fontSize={"2xl"}>
                                    {user.email}
                                  </Text>
                                </Stack>

                                <Button
                                  w={"full"}
                                  mt={8}
                                  bg={useColorModeValue("#151f21", "gray.900")}
                                  color={"white"}
                                  rounded={"md"}
                                  _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: "lg",
                                  }}
                                  onClick={() =>
                                    logout({ returnTo: window.location.origin })
                                  }
                                >
                                  logout
                                </Button>
                              </Box>
                            </Box>
                          </Center>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </>
              )}
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
