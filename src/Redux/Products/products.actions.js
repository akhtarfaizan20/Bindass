import axios from "axios";
import * as types from "./products.types";

export const getProducts =
  ({ target, page = 1, limit = 10, sort, order }) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_LOADING });

    return axios
      .get(`http://localhost:8080/products`, {
        params: {
          target,
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };

export const getTotalProducts =
  (limit = 10) =>
  (dispatch) => {
    dispatch({ type: types.GET_TOTAL_PRODUCT_LOADING });
    return axios
      .get(`http://localhost:8080/products`)
      .then((res) => {
        dispatch({
          type: types.GET_TOTAL_PRODUCT_SUCCESS,
          payload: Math.ceil(res.data.length / limit),
        });
      })
      .catch(() => {
        dispatch({ type: types.GET_TOTAL_PRODUCT_ERROR });
      });
  };
export const editProducts = (id, price) => (dispatch) => {
  dispatch({ type: types.EDIT_PRODUCT_LOADING });
  return axios
    .patch(`http://localhost:8080/products/${id}`, {
      price: +price,
    })
    .then((res) => {
      dispatch({
        type: types.EDIT_PRODUCT_SUCCESS,
      });
      // dispatch(getProducts({ page }));
    })
    .catch(() => {
      dispatch({ type: types.EDIT_PRODUCT_ERROR });
    });
};
