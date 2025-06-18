import { createSelector } from "reselect";

const getDealers = (state) => state.dealers ?? {};

export const dealersDataSelector = createSelector(
  [getDealers],
  (dealers) => dealers.dealersData
);

export const dealersCategoriesSelector = createSelector(
  [getDealers],
  (dealers) => dealers.categories
);

export const dealersFilterSelector = createSelector(
  [getDealers],
  (dealers) => dealers.filter
);

export const dealersCategoryFilterSelector = createSelector(
  [dealersFilterSelector],
  (filter) => filter.category
);

export const dealersKeywordFilterSelector = createSelector(
  [dealersFilterSelector],
  (filter) => filter.keyword
);

export const dealersCurrentPageSelector = createSelector(
  [getDealers],
  (dealers) => dealers.currentPage
);