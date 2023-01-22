import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../Redux/Orders/orders.actions";

const UserProfile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [page, setPage] = useState(1);
  const { loading, error, orders } = useSelector(
    (store) => store.ordersManager
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("hi");
      dispatch(getOrders({ page, user: user.email }));
    }
  }, [isAuthenticated, page]);
  console.log(user);
  console.log(orders);

  return <div>UserProfile</div>;
};

export default UserProfile;
