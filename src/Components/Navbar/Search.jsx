import {
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
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../Redux/Products/products.actions";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, products } = useSelector((state) => state.productManager);
  // const searchRef = useRef(null);
  // const searchOutside = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = () => {
    dispatch(searchProducts({ q: searchInput }));
  };

  useEffect(() => {
    if (searchInput.length) {
      onOpen();
    } else {
      onClose();
    }

    let timer = setTimeout(getData, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  return (
    <>
      <Text
        display={useBreakpointValue({ base: "solid", md: "none" })}
        fontSize={"30px"}
        onClick={onOpen}
      >
        <AiOutlineSearch />
      </Text>
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
          type="text"
          placeholder="Search by product, category or collection"
          focusBorderColor="gray.400"
          variant={"filled"}
          // ref={searchOutside}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
                  type="text"
                  placeholder="Search by product, category or collection"
                  focusBorderColor="gray.400"
                  variant={"filled"}
                  // ref={searchRef}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </InputGroup>
            </ModalHeader>
            <ModalBody>
              {loading ? (
                <Center>
                  <Spinner m={"auto"} />
                </Center>
              ) : products.length ? (
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
              ) : (
                <Center>No Result Found!</Center>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </InputGroup>
    </>
  );
};

export default Search;
