import {
  Box,
  Center,
  Heading,
  Image,
  Select,
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
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [selectSort, setSelectSort] = useState("-");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts({ page, sort, order }));
    dispatch(getTotalProducts());
  }, [page, sort, order]);

  const onChange = (val) => {
    setPage(val);
  };

  console.log(totalPages);
  return (
    <Box>
      <Heading>Products</Heading>
      <Heading size={"md"}>Sort</Heading>
      <Select
        variant="filled"
        w={"200px"}
        onChange={(e) => {
          let arr = e.target.value.split("-");
          setSort(arr[0]);
          setOrder(arr[1]);
          setSelectSort(e.target.value);
        }}
      >
        <option value="-">Popular</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="ratings-asc">Rating: Low to High</option>
        <option value="ratings-desc">Rating: High to low</option>
      </Select>
      <Box>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <TableContainer>
            <Table
              variant="striped"
              colorScheme="teal"
              className="productTable"
            >
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
                  return <Row {...item} key={item.id} page={page} />;
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
        )}
      </Box>
    </Box>
  );
};

export default AdminProducts;
