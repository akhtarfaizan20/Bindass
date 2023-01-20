import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDone, MdOutlineEdit } from "react-icons/md";
import { GrClose } from "react-icons/gr";

const Row = ({ id, image, brand, desc, price, handleEdit, handleDelete }) => {
  const [editable, setEditable] = useState(false);
  const [editValue, setEditValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  return (
    <Tr>
      <Td>{id}</Td>
      <Td>
        <Image src={image} h={"50px"} />
      </Td>

      <Td>{brand}</Td>
      <Td>
        <Text w={"200px"} overflow={"clip"}>
          {desc}
        </Text>
      </Td>
      <Td isNumeric>
        {editable ? (
          <>
            <Input
              placeholder="Enter the new Amount"
              w={"auto"}
              type={"number"}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => {
                handleEdit(id, editValue);
              }}
            >
              <MdDone />
            </Button>
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setEditable(false)}
            >
              <GrClose />
            </Button>
          </>
        ) : (
          <Box>
            ₹{dollarIndianLocale.format(price)}
            /-{" "}
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setEditable(true)}
            >
              <MdOutlineEdit />
            </Button>
          </Box>
        )}
      </Td>
      <Td>
        <Center>
          <Button mt={4} onClick={onOpen} colorScheme={"red"}>
            Delete
          </Button>
        </Center>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Item!!!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure, You want to delete the Item?</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme={"red"} onClick={() => handleDelete(id)}>
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Td>
    </Tr>
  );
};

export default Row;
