import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdminPagination from "../Components/Admin/Product/AdminPagination";
import Orders from "../Components/Profile/Orders";
import { getOrders, getTotalOrders } from "../Redux/Orders/orders.actions";

import styles from "./Products.module.css";

const UserProfile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [page, setPage] = useState(1);
  const { loading, error, orders, totalPages } = useSelector(
    (store) => store.ordersManager
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      // console.log("hi");
      dispatch(getOrders({ page, user: user.email }));
      dispatch(getTotalOrders({ limit: 5, user: user.email }));
    }
  }, [isAuthenticated, page]);

  const handleChange = (val) => {
    setPage(val);
  };

  if (!isAuthenticated) {
    return (
      <Center p={"50px"}>
        <Spinner />
      </Center>
    );
  }

  return (
    <Box>
      <Heading textAlign={"center"} color={"gray.600"}>
        Your Profile
      </Heading>

      <Flex
        direction={"column"}
        justifyContent={"center"}
        w={"fit-content"}
        m={"auto"}
      >
        <Avatar src={user.picture} size={"2xl"} m={"auto"} mb={"20px"} />
        <Heading size={"lg"} textAlign={"center"}>
          {user.name}
        </Heading>
        <Heading size={"md"} textAlign={"center"} color={"gray.400"}>
          {user.email}
        </Heading>
      </Flex>

      <Box>
        <Heading textAlign={"center"} color={"gray.600"}>
          Your Orders
        </Heading>
        {orders.map((order) => {
          return <Orders key={order.id} {...order} />;
        })}

        <Center>
          <AdminPagination
            page={page}
            total={totalPages}
            onChange={handleChange}
          />
        </Center>
      </Box>
    </Box>
  );
};

export default UserProfile;
