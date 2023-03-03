import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../Redux/Products/products.actions";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, products } = useSelector((state) => state.productManager);
  const searchRef = useRef(null);
  const searchOutside = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(products);

  function debounce(func, timeout = 3000) {
    let timer;
    return () => {
      if (timer) {
        return;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, timeout);
    };
  }

  const searchData = () => {
    if (searchRef.current) {
      dispatch(searchProducts({ q: searchRef.current.value || "" }));
    }
  };
  const processChange = debounce(searchData, 3000);

  const handleChange = () => {
    if (isOpen && searchRef.current) {
      if (!searchRef.current.value.length) {
        onClose();
      }
    }
  };

  return (
    <InputGroup
      w={"370px"}
      mt={2}
      display={useBreakpointValue({ base: "none", md: "solid" })}
    >
      <InputLeftElement
        py={"20px"}
        pointerEvents="none"
        children={<AiOutlineSearch color="gray.300" fontSize={"20px"} />}
      />
      <Input
        py={"20px"}
        type="tel"
        placeholder="Search by product, category or collection"
        focusBorderColor="gray.400"
        variant={"filled"}
        ref={searchOutside}
        onClick={() => {
          onOpen();
          setTimeout(() => {
            searchRef.current.focus();
          }, 100);
        }}
        onChange={() => {
          onOpen();
          setTimeout(() => {
            searchRef.current.value = searchOutside.current.value;
            searchRef.current.focus();
          }, 100);
        }}
      />
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <InputGroup mt={2}>
              <InputLeftElement
                py={"20px"}
                pointerEvents="none"
                children={
                  <AiOutlineSearch color="gray.300" fontSize={"20px"} />
                }
              />
              <Input
                py={"20px"}
                type="tel"
                placeholder="Search by product, category or collection"
                focusBorderColor="gray.400"
                variant={"filled"}
                ref={searchRef}
                onChange={(e) => {
                  searchOutside.current.value = searchRef.current.value;
                  processChange();
                  handleChange();
                }}
              />
            </InputGroup>
          </ModalHeader>
          <ModalBody>
            {loading ? (
              <Center>
                <Spinner m={"auto"} />
              </Center>
            ) : (
              <Stack>
                {products.map((item) => (
                  <div
                    onClick={() => {
                      onClose();
                      navigate(`/product-details/${item.id}`);
                    }}
                  >
                    <HStack
                      key={item.id}
                      gap={"10px"}
                      p={"10px"}
                      borderRadius={"20px"}
                      _hover={{
                        backgroundColor: "rgb(0, 0, 0, 0.2)",
                        color: "white",
                      }}
                    >
                      <Image src={item.image} maxHeight={"70px"} w={"40px"} />
                      <Flex textAlign={"left"} direction={"column"}>
                        <Heading size={"sm"} textAlign="left" m={"0"}>
                          {item.brand}
                        </Heading>
                        <Text noOfLines={2}>{item.desc}</Text>
                      </Flex>
                    </HStack>
                  </div>
                ))}
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </InputGroup>
  );
};

export default Search;
