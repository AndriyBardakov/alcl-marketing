import {
  FETCH_PRODUCTS,
  ADD_CATEGORY_FILTER,
  ADD_KEYWORD_FILTER,
  ADD_SORT_FILTER,
  ADD_PER_PAGE_FILTER,
  RESET_FILTER,
  SET_CURRENT_PAGE
} from "../constants";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});
export const addCategoryFilter = (category) => ({
  type: ADD_CATEGORY_FILTER,
  payload: category,
});
export const addKeywordFilter = (keyword) => ({
  type: ADD_KEYWORD_FILTER,
  payload: keyword,
});
export const addSortFilter = (sort) => ({
  type: ADD_SORT_FILTER,
  payload: sort,
});
export const addPerPageFilter = (perPage) => ({
  type: ADD_PER_PAGE_FILTER,
  payload: perPage,
});
export const resetFilter = () => ({
  type: RESET_FILTER,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});