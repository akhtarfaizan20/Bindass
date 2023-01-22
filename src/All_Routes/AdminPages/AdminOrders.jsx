import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderRows from "../../Components/Admin/Orders/OrderRows";
import AdminPagination from "../../Components/Admin/Product/AdminPagination";
import {
  editOrders,
  getOrders,
  getTotalOrders,
} from "../../Redux/Orders/orders.actions";

const AdminOrders = () => {
  const { loading, error, orders, totalPages } = useSelector(
    (store) => store.ordersManager
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getOrders({ page, limit: 5 }));
    dispatch(getTotalOrders({ limit: 5 }));
  }, [page]);
  const onChange = (val) => {
    setPage(val);
  };

  const handleStatus = async (id, status) => {
    await dispatch(editOrders(id, status));
    dispatch(getOrders({ page, limit: 5 }));
  };

  console.log(orders, totalPages);
  return (
    <Box>
      <Heading>Orders</Heading>
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

                <Th>Date</Th>
                <Th>User ID</Th>
                <Th isNumeric>No. Of Items</Th>
                <Th isNumeric>Total Value</Th>
                <Th>Details</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((item) => {
                return (
                  <OrderRows
                    {...item}
                    key={item.id}
                    handleStatus={handleStatus}
                  />
                );
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

export default AdminOrders;
