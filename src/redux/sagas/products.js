import { put, takeLatest, call, all, fork, select } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  SET_PRODUCTS_DATA,
} from "../constants";

import productsData from "../../data/mock/products.json";

function* fetchProducts() {
  try {
    // Simulate an API call
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Here we would normally call an API to fetch products
    // const response = yield call(api.fetchProducts);
    
    // For this example, we will use the static data from products.json
    const data = productsData;

    // Dispatch the action to set products data in the store
    yield put({ type: SET_PRODUCTS_DATA, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export default function* rootProductsSaga() {
  yield all([
    fork(watchFetchProducts),
  ]);
}