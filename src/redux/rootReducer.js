import { combineReducers } from "redux";
import products from "./reducers/products";

const reducer = combineReducers({
  products,
});

export default reducer;