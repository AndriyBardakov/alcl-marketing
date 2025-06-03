import { all, fork } from "@redux-saga/core/effects";
import rootProductsSaga from "./sagas/products"

export default function* rootSaga() {
  yield all([
    fork(rootProductsSaga),
  ])
}