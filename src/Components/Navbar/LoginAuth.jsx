import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  keyframes,

} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginAuth() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const size = "45px";
  const color = "teal";

  const pulseRing = keyframes`
    0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
    `;

  return (
    <div>
      {!isAuthenticated ? (
        <Button onClick={() => loginWithRedirect()}>SignIn</Button>
      ) : null}

      {isAuthenticated && (
        <Flex justifyContent="center">
          <Popover placement="bottom" isLazy>
            <PopoverTrigger>
              <Flex
                justifyContent="center"
                alignItems="center"
                h="216px"
                w="full"
                overflow="hidden"
              >
                {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
                <Box
                  as="div"
                  position="relative"
                  w={size}
                  h={size}
                  _before={{
                    content: "''",
                    position: "relative",
                    display: "block",
                    width: "300%",
                    height: "300%",
                    boxSizing: "border-box",
                    marginLeft: "-100%",
                    marginTop: "-100%",
                    borderRadius: "50%",
                    bgColor: color,
                    animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                  }}
                >
                  <Avatar
                    src={user.picture}
                    size="full"
                    position="absolute"
                    top={0}
                  />
                </Box>
              </Flex>

            
            </PopoverTrigger>
            <PopoverContent _focus={{ boxShadown: "none" }}>
              <PopoverBody w="full">
                {isAuthenticated && (
                  <Center>
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

                      <Box>
                        <Stack spacing={0} align={"center"} mb={5}>
                          <Heading
                            fontSize={"2xl"}
                            fontWeight={500}
                            fontFamily={"body"}
                          >
                            {user.name}
                          </Heading>

                          <Heading
                            fontSize={"sm"}
                            fontWeight={500}
                            fontFamily={"body"}
                          >
                            {user.email}
                          </Heading>
                        </Stack>

                        <Button
                          w={"full"}
                          mt={8}
                          bg={useColorModeValue("#151f21", "gray.900")}
                          color={"white"}
                          rounded={"md"}
                          onClick={() =>
                            logout({ returnTo: window.location.origin })
                          }
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
