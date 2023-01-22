import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import OrderModalCard from "./OrderModalCard";

const OrderRows = ({ id, date, user, products, status, handleStatus }) => {
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  const { isOpen, onOpen, onClose } = useDisclosure();
  let d = new Date(date);
  let [day, neww] = d.toString().split(" GMT");
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].qty * products[i].product.price;
  }
  return (
    <>
      <Tr>
        <Td>{id}</Td>
        <Td>{day}</Td>
        <Td>{user}</Td>
        <Td isNumeric>{products.length}</Td>
        <Td isNumeric>₹{dollarIndianLocale.format(sum)}/-</Td>
        <Td>
          <Button onClick={onOpen}>Show Details</Button>
        </Td>
        <Td>
          <Select
            value={status}
            onChange={(e) => handleStatus(id, e.target.value)}
            border={"1px solid gray"}
          >
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Dispatched">Dispatched</option>
            <option value="On the Way">On the way</option>
            <option value="Delevered">Delivered</option>
          </Select>
        </Td>
      </Tr>
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
    </>
  );
};

export default OrderRows;
