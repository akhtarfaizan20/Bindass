import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AdminPagination = ({ total, page, onChange }) => {
  return (
    <Box>
      <Button
        colorScheme={"white"}
        isDisabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <AiOutlineLeft color="black" />
      </Button>
      <Button colorScheme={"white"} color={"black"}>
        {page}
      </Button>
      <Button
        colorScheme={"white"}
        isDisabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        <AiOutlineRight color="black" />
      </Button>
    </Box>
  );
};

export default AdminPagination;
