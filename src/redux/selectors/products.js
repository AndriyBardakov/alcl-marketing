import { createSelector } from "reselect";

const getProducts = (state) => state.products ?? {};

export const productsDataSelector = createSelector(
  [getProducts],
  (products) => products.productsData
);

export const categoriesSelector = createSelector(
  [getProducts],
  (products) => products.categories
);

export const filterSelector = createSelector(
  [getProducts],
  (products) => products.filter
);

export const categoryFilterSelector = createSelector(
  [filterSelector],
  (filter) => filter.category
);

export const keywordFilterSelector = createSelector(
  [filterSelector],
  (filter) => filter.keyword
);

export const currentPageSelector = createSelector(
  [getProducts],
  (products) => products.currentPage
);