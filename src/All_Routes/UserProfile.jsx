import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../Redux/Orders/orders.actions";
import styles from "./Products.module.css";

const UserProfile = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [page, setPage] = useState(1);
  const { loading, error, orders } = useSelector(
    (store) => store.ordersManager
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      // console.log("hi");
      dispatch(getOrders({ page, user: user.email }));
    }
  }, [isAuthenticated, page]);
  console.log(user);
  // console.log(orders);
  if(!isAuthenticated){
    return <h1>loading ...</h1>
  }

  return (<div className={styles.main}>
             <p>User Information</p>
             
             <div className={styles.user__order___container}>
                <img src={user.picture} alt="pic"/>
                
             </div>
             <p><b>{user?.name}</b></p>
             <p>{user.email}</p>
             <div className={styles.user__data}>
                {/* {orders?.map((el)=> <UserOrder key={el.id} {...el} /> )}   */}
             </div>
            
         </div>);
};

export default UserProfile;
