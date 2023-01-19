import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { productReducer } from "./Products/products.reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cart.reducer";
const rootReducer = combineReducers({
  productManager: productReducer,
  cartManager: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
