import { put, takeLatest, call, all, fork, select } from "redux-saga/effects";
import {
  FETCH_DEALERS,
  SET_DEALERS_DATA,
  SET_DEALERS_CATEGORIES
} from "../constants";

import dealersData from "../../data/mock/dealers.json";

function* fetchDealers() {
  try {
    // Simulate an API call
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Here we would normally call an API to fetch dealers
    // const response = yield call(api.fetchDealers);
    
    // For this example, we will use the static data from dealers.json
    const data = dealersData;
    data.sort((a, b) => a.name.localeCompare(b.name));

    // Dispatch the action to set products data in the store
    yield put({ type: SET_DEALERS_DATA, payload: data });
    const regions = [];

    data.forEach(dealer => {
      if (dealer.region && !regions.includes(dealer.region)) {
        regions.push(dealer.region);
      }
    }
    );
    regions.sort((a, b) => a.localeCompare(b));
    const regionsList = regions.map(region => ({ value: region.toLowerCase(), label: region }));
    yield put({ type: SET_DEALERS_CATEGORIES, payload: regionsList });
  } catch (error) {
    console.error("Error fetching dealers:", error);
  }
}

function* watchFetchDealers() {
  yield takeLatest(FETCH_DEALERS, fetchDealers);
}

export default function* rootDealersSaga() {
  yield all([
    fork(watchFetchDealers),
  ]);
}