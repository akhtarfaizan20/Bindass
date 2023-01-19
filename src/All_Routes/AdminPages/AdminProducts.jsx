import {
  Box,
  Center,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminPagination from "../../Components/Admin/Product/AdminPagination";
import Row from "../../Components/Admin/Product/Row";
import {
  getProducts,
  getTotalProducts,
} from "../../Redux/Products/products.actions";

const AdminProducts = () => {
  const { loading, products, totalPages, error } = useSelector(
    (store) => store.productManager
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts({ page }));
    dispatch(getTotalProducts());
  }, [page]);

  const onChange = (val) => {
    setPage(val);
  };

  if (loading) {
    return <h1>Loading</h1>;
  }

  console.log(totalPages);
  return (
    <Box>
      <Center>
        <Heading>Products</Heading>
      </Center>
      <Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal" className="productTable">
            <TableCaption>
              <AdminPagination
                total={totalPages}
                page={page}
                onChange={onChange}
              />
            </TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Image</Th>
                <Th>Brand</Th>
                <Th>Name</Th>
                <Th isNumeric>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((item) => {
                return <Row {...item} key={item.id} />;
              })}
            </Tbody>
            {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AdminProducts;
