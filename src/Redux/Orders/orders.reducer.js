import * as types from "./orders.types";

const initState = {
  loading: false,
  error: false,
  orders: [],
  totalPages: 1,
};

export const ordersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_ORDERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        orders: payload,
      };
    }
    case types.GET_TOTAL_ORDERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.GET_TOTAL_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.GET_TOTAL_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        totalPages: payload,
      };
    }
    case types.EDIT_ORDERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.EDIT_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.EDIT_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case types.ADD_ORDERS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case types.ADD_ORDERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case types.ADD_ORDERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
