import * as types from "./products.types";

const initState = {
  loading: false,
  error: false,
  products: [],
  totalPages: 1,
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    }
    case types.GET_TOTAL_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_TOTAL_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_TOTAL_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        totalPages: payload,
      };
    }
    default: {
      return state;
    }
  }
};
