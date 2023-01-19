import React from "react";
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

} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginAuth() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log(user)
  return (
    <div>
      
        {!isAuthenticated ? (
          <Button onClick={() => loginWithRedirect()}>SignIn</Button>
        ) : null}
      




      {isAuthenticated && (
      <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          

        
        <Avatar
        size={"lg"}
        src={user.picture}
        alt={"Author"}
        css={{
          border: "2px solid white",
        }}
        />
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: 'none' }}>



          <PopoverBody w="full">

          {isAuthenticated && (
        <Center py={6}>
          <Box
            maxW={"270px"}
            w={"full"}
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
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {user.name}
                </Heading>
                <Text color={"gray.500"}>{user.email}</Text>
              </Stack>

              <Button
                w={"full"}
                mt={8}
                bg={useColorModeValue("#151f21", "gray.900")}
                color={"white"}
                rounded={"md"}
                onClick={() => logout({ returnTo: window.location.origin })}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                LogOut
              </Button>
            </Box>
          </Box>
        </Center>
      )}

           
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>

)}








    </div>
  );
}

export default LoginAuth;
