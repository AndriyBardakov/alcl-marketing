import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createStateSyncMiddleware } from "redux-state-sync";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: true }).concat([
      sagaMiddleware,
      createStateSyncMiddleware({
        whitelist: [],
      }),
    ]),
});

sagaMiddleware.run(rootSaga);

export default store;