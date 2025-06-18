import { all, fork } from "@redux-saga/core/effects";
import rootProductsSaga from "./sagas/products";
import rootDealersSaga from "./sagas/dealers";

export default function* rootSaga() {
  yield all([
    fork(rootProductsSaga),
    fork(rootDealersSaga),
  ])
}