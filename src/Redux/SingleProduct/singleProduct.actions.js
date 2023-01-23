import axios from "axios";
import * as types from "./singleProduct.types";
const BASE_URL = "https://bindass-db.onrender.com";

export const getSingleProducts =
  ({ id }) =>
  (dispatch) => {
    dispatch({ type: types.GET_SINGLE_PRODUCT_LOADING });

    return axios
      .get(`${BASE_URL}/products/${id}`)
      .then((res) => {
        dispatch({ type: types.GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
      })
      .catch(() => {
        dispatch({ type: types.GET_SINGLE_PRODUCT_ERROR });
      });
  };
