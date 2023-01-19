import { Box, Button, Image, Input, Td, Text, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDone, MdOutlineEdit } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { set } from "lodash";
import { useDispatch } from "react-redux";
import { editProducts } from "../../../Redux/Products/products.actions";

const Row = ({ id, image, brand, desc, price, page }) => {
  const [editable, setEditable] = useState(false);
  const [editValue, setEditValue] = useState("");
  let dollarIndianLocale = Intl.NumberFormat("en-IN");
  const dispatch = useDispatch();
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
                dispatch(editProducts(id, editValue, page));
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
    </Tr>
  );
};

export default Row;
