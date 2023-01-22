import React from "react";
import "./cart.css";
import { GrNext } from "react-icons/gr";
import { useState, useEffect } from "react";
import Product from "./Add product/Product";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromCart,
  editCartItem,
  getCartProducts,
} from "../../Redux/Cart/cart.actions";
import { useNavigate } from "react-router";
import { addOrders } from "../../Redux/Orders/orders.actions";
import { Flex, Spinner, useToast, Image, Box, Heading } from "@chakra-ui/react";
let dollarIndianLocale = Intl.NumberFormat("en-IN");

const Cart = () => {
  const { loading, products, error } = useSelector(
    (store) => store.cartManager
  );
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  //   console.log(user);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCartProducts(user.email));
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || loading) {
    return (
      <Flex justifyContent={"center"} p={"50px"}>
        <Spinner textAlign={"center"} />
      </Flex>
    );
  }
  const handleRemove = async (id) => {
    await dispatch(deleteItemFromCart(id));
    dispatch(getCartProducts(user.email));
    toast({
      title: "Item Removed!",
      description: "Item has been removed from the cart.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
  };

  const handlePlace = async () => {
    let item = {
      user: user.email,
      products: products.map((item) => {
        return {
          product: item.product,
          qty: item.qty,
          size: item.size,
        };
      }),
      date: Date.now(),
      status: "Pending",
    };
    await dispatch(addOrders(item));
    let id = "";
    for (let i = 0; i < products.length; i++) {
      await dispatch(deleteItemFromCart(products[i].id));
    }

    toast({
      title: "Congratulations!!!",
      description: "Your Order has been placed successfully.",
      status: "success",
      duration: 6000,
      isClosable: true,
    });
    navigate("/user-profile");
  };

  const handleQtyChange = async ({ id, qty, size }) => {
    await dispatch(editCartItem({ id, qty, size }));

    dispatch(getCartProducts(user.email));
  };

  // total discount calculation
  let res = products.map((el) => {
    return el.qty * el.product.price;
  });
  res = res.reduce(function (sum, el) {
    return sum + el;
  }, 0);
  // total original price calculation
  let MRP = products.map((el) => {
    return (
      el.qty * +el.product.strickedoffprice.split(",").join("").substring(1)
    );
  });
  MRP = MRP.reduce(function (sum, el) {
    return sum + el;
  }, 0);
  // saving amount
  let saving = MRP - res;

  if (!products.length) {
    return (
      <Box px={"10%"} py={"30px"}>
        <Image
          src={
            "https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
          }
          m={"auto"}
          w={"30%"}
        />
        <Heading textAlign={"center"} color="gray">
          Cart is empty
        </Heading>
      </Box>
    );
  }

  return (
    <div className="main__container">
      <h2>
        <b>My Bag</b> {products.length} item(s)
      </h2>
      <div className="card__container">
        {/* ----- Selected item in cart ----- */}
        <div className="product__container">
          <div>
            <img
              src="https://images.bewakoof.com/web/Red-truck.png"
              alt="logo"
              width="19px"
              height="12px"
            />
            <p>Yay! You get FREE delivery on this order</p>
          </div>
          <div className="comp__container">
            {products.map((items) => (
              <Product
                key={items.id}
                {...items}
                handleRemove={handleRemove}
                handleQtyChange={handleQtyChange}
              />
            ))}
          </div>
        </div>

        {/* ------ product Information ------ */}
        <div className="info__container">
          <div className="box1">
            <div>
              <p>
                Save extra <b>₹367</b> with TriBe
              </p>
              <p>
                <GrNext />
              </p>
            </div>
            <div>
              <p>
                Whistles! Get extra 10% Cashback upto 100 on prepaid orders
                <br />
                above Rs.699. Coupon code - MAD10.
              </p>
            </div>
            <div>
              <p>
                Get Rs.200 instant discount on your First Purchase above
                <br /> Rs.999. Coupon code -NEW200
              </p>
            </div>
            <div>
              <p>
                Whistles! Get extra 20% Cashback on prepaid orders above
                <br />
                Rs.499. Coupon code - NEW20. Applicable for new customers only!
              </p>
            </div>
          </div>
          <div className="box2">
            <div className="box21">
              <div>
                <p>Have a Coupon / Referral / Gift Card ?</p>
                <p>
                  <b>Redeem</b>
                </p>
              </div>
            </div>
            <div className="box22">
              <div>
                <p>
                  <b>PRICE SUMMARY</b>
                </p>
              </div>
              <div>
                <p>Total MRP (Incl. of taxes) </p>
                <p>₹{dollarIndianLocale.format(MRP)}/-</p>
              </div>
              <div>
                <p>Shipping Charges </p>
                <p>FREE</p>
              </div>
              <div>
                <p>Bag Discount </p>
                <p>- ₹{dollarIndianLocale.format(saving)}/-</p>
              </div>
              <div>
                <p>Subtotal </p>
                <p>₹{dollarIndianLocale.format(res)}/-</p>
              </div>
              <div>
                <div>
                  <p>
                    You are saving ₹ {dollarIndianLocale.format(saving)}/- on
                    this order
                  </p>
                </div>
              </div>
            </div>
            <div className="box23">
              <div>
                <span>
                  <p>Total</p>
                  <p>
                    <b>₹{dollarIndianLocale.format(res)}/-</b>
                  </p>
                </span>
                <button onClick={handlePlace}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
