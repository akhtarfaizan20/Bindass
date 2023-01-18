import axios from "axios";
import * as types from "./products.types";

export const getProducts =
  (target, page = 1, limit = 10) =>
  (dispatch) => {
    dispatch({ type: types.GET_PRODUCT_LOADING });

    return axios
      .get(`http://localhost:8080/products`, {
        params: {
          target,
          _page: page,
          _limit: limit,
        },
      })
      .then((res) => {
        dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.GET_PRODUCT_ERROR });
      });
  };
