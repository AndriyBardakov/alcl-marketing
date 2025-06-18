import {
  FETCH_PRODUCTS,
  ADD_PRODUCTS_CATEGORY_FILTER,
  ADD_PRODUCTS_KEYWORD_FILTER,
  ADD_PRODUCTS_SORT_FILTER,
  ADD_PRODUCTS_PER_PAGE_FILTER,
  RESET_PRODUCTS_FILTER,
  SET_PRODUCTS_CURRENT_PAGE
} from "../constants";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});
export const addProductsCategoryFilter = (category) => ({
  type: ADD_PRODUCTS_CATEGORY_FILTER,
  payload: category,
});
export const addProductsKeywordFilter = (keyword) => ({
  type: ADD_PRODUCTS_KEYWORD_FILTER,
  payload: keyword,
});
export const addProductsSortFilter = (sort) => ({
  type: ADD_PRODUCTS_SORT_FILTER,
  payload: sort,
});
export const addProductsPerPageFilter = (perPage) => ({
  type: ADD_PRODUCTS_PER_PAGE_FILTER,
  payload: perPage,
});
export const resetProductsFilter = () => ({
  type: RESET_PRODUCTS_FILTER,
});
export const setProductsCurrentPage = (page) => ({
  type: SET_PRODUCTS_CURRENT_PAGE,
  payload: page,
});