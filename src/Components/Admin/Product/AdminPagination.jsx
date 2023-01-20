import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const AdminPagination = ({ total, page, onChange }) => {
  return (
    <Box>
      <Button
        colorScheme={"gray"}
        isDisabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <AiOutlineLeft />
      </Button>
      <Button>{page}</Button>
      <Button
        colorScheme={"gray"}
        isDisabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        <AiOutlineRight />
      </Button>
    </Box>
  );
};

export default AdminPagination;
