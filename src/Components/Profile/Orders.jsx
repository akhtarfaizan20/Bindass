import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import OrderModalCard from "../Admin/Orders/OrderModalCard";

const Orders = ({ id, date, products, status, ...rest }) => {
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  const { isOpen, onOpen, onClose } = useDisclosure();
  let d = new Date(date);
  let [day, neww] = d.toString().split(" GMT");
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].qty * products[i].product.price;
  }
  return (
    <Flex
      direction={"column"}
      p={"10px"}
      border={"1px solid #ddd"}
      w={useBreakpointValue({ md: "50%", base: "100%" })}
      m={"auto"}
      my={"10px"}
    >
      <Text as={"b"} color={"gray.600"}>
        Order ID: {id}
      </Text>
      <Text as={"b"} color={"gray.600"}>
        Date: {day}
      </Text>
      <Text as={"b"} color={"gray.600"}>
        Total Amount: ₹{dollarIndianLocale.format(sum)}/-
      </Text>
      <Text as={"b"} color={"gray.600"}>
        No. of items: {products.length}
      </Text>
      <Text as={"b"} color={"#84cc16"}>
        Status: {status}
      </Text>
      <Button
        w={"fit-content"}
        onClick={onOpen}
        variant={"outline"}
        colorScheme={"blue"}
      >
        Show Details
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Products ({products.length})</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={"column"} gap={"20px"}>
              {products.map((item) => {
                return <OrderModalCard key={item.id} {...item} />;
              })}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Orders;
