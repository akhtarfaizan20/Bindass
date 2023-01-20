import axios from "axios";
import * as types from "./cart.types";

export const getCartProducts = () => (dispatch) => {
  dispatch({ type: types.GET_CART_LOADING });
  return axios
    .get(`http://localhost:8080/carts`)
    .then((res) => {
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_CART_ERROR });
    });
};

export const deleteItemFromCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_LOADING });
  return axios
    .delete(`http://localhost:8080/carts/${id}`)
    .then(() => {
      dispatch({ type: types.DELETE_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.DELETE_CART_ERROR });
    });
};

export const editCartItem = (id, qty) => (dispatch) => {
  dispatch({ type: types.EDIT_CART_LOADING });
  return axios
    .patch(`http://localhost:8080/carts/${id}`, {
      qty: +qty,
    })
    .then(() => {
      dispatch({ type: types.EDIT_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.EDIT_CART_ERROR });
    });
};

export const addToCart = (item) => (dispatch) => {
  dispatch({ type: types.ADD_CART_LOADING });
  return axios
    .post(`http://localhost:8080/carts`, item)
    .then(() => {
      dispatch({ type: types.ADD_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: types.ADD_CART_ERROR });
    });
};
