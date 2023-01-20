import axios from "axios";
import * as types from "./singleProduct.types";

export const getSingleProducts =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: types.GET_SINGLE_PRODUCT_LOADING });

    return axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.GET_SINGLE_PRODUCT_ERROR });
      });
  };


