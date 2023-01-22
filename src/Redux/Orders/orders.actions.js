import axios from "axios";
import * as types from "./orders.types";

export const getOrders =
  ({ page = 1, limit = 5, user }) =>
  (dispatch) => {
    dispatch({ type: types.GET_ORDERS_LOADING });

    return axios
      .get(`http://localhost:8080/orders`, {
        params: {
          _page: page,
          _limit: limit,
          user,
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_ORDERS_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.GET_ORDERS_ERROR });
      });
  };

export const getTotalOrders =
  (limit = 5) =>
  (dispatch) => {
    dispatch({ type: types.GET_TOTAL_ORDERS_LOADING });
    return axios
      .get(`http://localhost:8080/orders`)
      .then((res) => {
        dispatch({
          type: types.GET_TOTAL_ORDERS_SUCCESS,
          payload: Math.ceil(res.data.length / limit),
        });
      })
      .catch(() => {
        dispatch({ type: types.GET_TOTAL_ORDERS_ERROR });
      });
  };
export const editOrders = (id, status) => (dispatch) => {
  dispatch({ type: types.EDIT_ORDERS_LOADING });
  return axios
    .patch(`http://localhost:8080/orders/${id}`, {
      status,
    })
    .then((res) => {
      dispatch({
        type: types.EDIT_ORDERS_SUCCESS,
      });
      // dispatch(getorders({ page }));
    })
    .catch(() => {
      dispatch({ type: types.EDIT_ORDERS_ERROR });
    });
};

export const deleteOrders = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_ORDERS_LOADING });
  return axios
    .delete(`http://localhost:8080/orders/${id}`)
    .then((res) => {
      dispatch({
        type: types.DELETE_ORDERS_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({ type: types.DELETE_ORDERS_SUCCESS });
    });
};

export const addOrders = (item) => (dispatch) => {
  dispatch({ type: types.ADD_ORDERS_LOADING });
  return axios
    .post(`http://localhost:8080/orders`, item)
    .then((res) => {
      dispatch({
        type: types.ADD_ORDERS_SUCCESS,
      });
    })
    .catch(() => {
      dispatch({ type: types.ADD_ORDERS_SUCCESS });
    });
};
