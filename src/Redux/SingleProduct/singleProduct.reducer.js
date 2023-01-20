import * as types from "./singleProduct.types";

const initState = {
  loading: false,
  error: false,
  product: {},
};

export const singleProductReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_SINGLE_PRODUCT_LOADING:{
      return {
        ...state,loading:true,error:false
      }
    }
    case types.GET_SINGLE_PRODUCT_ERROR:{
      return {
        ...state,loading:false,error:true
      }
    }
    case types.GET_SINGLE_PRODUCT_SUCCESS:{
      return {
        ...state,loading:false,error:false,product:payload
      }
    }
    default: {
      return state;
    }
  }
};
