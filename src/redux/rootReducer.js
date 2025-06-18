import { combineReducers } from "redux";
import products from "./reducers/products";
import dealers from "./reducers/dealers";

const reducer = combineReducers({
  products,
  dealers
});

export default reducer;