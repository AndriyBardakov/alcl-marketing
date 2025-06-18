import { createSelector } from "reselect";

const getProducts = (state) => state.products ?? {};

export const productsDataSelector = createSelector(
  [getProducts],
  (products) => products.productsData
);

export const productsCategoriesSelector = createSelector(
  [getProducts],
  (products) => products.categories
);

export const productsFilterSelector = createSelector(
  [getProducts],
  (products) => products.filter
);

export const productsCategoryFilterSelector = createSelector(
  [productsFilterSelector],
  (filter) => filter.category
);

export const productsKeywordFilterSelector = createSelector(
  [productsFilterSelector],
  (filter) => filter.keyword
);

export const productsCurrentPageSelector = createSelector(
  [getProducts],
  (products) => products.currentPage
);