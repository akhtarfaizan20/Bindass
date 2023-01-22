import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  var navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const onsubmit = () => {
    // console.log("fuck");
    if (user.email === "Bindass") {
      return <navigate to="/" />;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div
 
    >


<Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="Enter email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            name="email" onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" 
          name="password"
          placeholder="Enter Passward"

          onChange={handleChange}
          />
        </FormControl>

        {user.email === "Bindass@gmail.com" ?
        (<Stack spacing={6}>
                  <NavLink to="/admin">

          <Button
            bg={'blue.400'}
            color={'white'}
            ml={210}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
          </NavLink>

        </Stack>):null
      }
        
      </Stack>
    </Flex>



      {/* <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        mt={-20}
        bg={useColorModeValue("gray.50", "gray.800")}

      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
          
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            mt={-20}
            p={5}
          >
            <Stack spacing={4} mt={-10}>
              
              <FormControl id="email">
                
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>

                {user.email === "Bindass" ? (
                  <NavLink to="/">
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() => onsubmit()}
                    >
                      Sign in
                    </Button>
                  </NavLink>
                ) : null}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex> */}
    </div>
  );
}

export default Login;
