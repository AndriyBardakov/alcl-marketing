import {
  ADD_DEALERS_CATEGORY_FILTER,
  ADD_DEALERS_KEYWORD_FILTER,
  ADD_DEALERS_SORT_FILTER,
  ADD_DEALERS_PER_PAGE_FILTER,
  RESET_DEALERS_FILTER,
  SET_DEALERS_CURRENT_PAGE,
  FETCH_DEALERS
} from "../constants";

export const fetchDealers = () => ({
  type: FETCH_DEALERS,
});
export const addDealersCategoryFilter = (category) => ({
  type: ADD_DEALERS_CATEGORY_FILTER,
  payload: category,
});
export const addDealersKeywordFilter = (keyword) => ({
  type: ADD_DEALERS_KEYWORD_FILTER,
  payload: keyword,
});
export const addDealersSortFilter = (sort) => ({
  type: ADD_DEALERS_SORT_FILTER,
  payload: sort,
});
export const addDealersPerPageFilter = (perPage) => ({
  type: ADD_DEALERS_PER_PAGE_FILTER,
  payload: perPage,
});
export const resetDealersFilter = () => ({
  type: RESET_DEALERS_FILTER,
});
export const setDealersCurrentPage = (page) => ({
  type: SET_DEALERS_CURRENT_PAGE,
  payload: page,
});

