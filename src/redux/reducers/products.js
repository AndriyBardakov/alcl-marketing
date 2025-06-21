import {
  SET_PRODUCTS_DATA,
  ADD_PRODUCTS_CATEGORY_FILTER,
  ADD_PRODUCTS_KEYWORD_FILTER,
  ADD_PRODUCTS_SORT_FILTER,
  ADD_PRODUCTS_PER_PAGE_FILTER,
  RESET_PRODUCTS_FILTER,
  SET_PRODUCTS_CURRENT_PAGE
} from "../constants";

const initialState = {
  productsData: null,
  categories: [
    // { value: "all", label: "All Products" },
    { value: "cheese-and-cheese-powder", label: "Cheesemiss" },
    { value: "flavour-enhancers", label: "Ranchero's" },
    { value: "baking-ingredients", label: "Casa Bamvina" },
    { value: "others", label: "Satisfry" },
    // { value: "cereal-and-oats", label: "Cereal & Oats" }
  ],
  filter: {
    category: "",
    keyword: "",
    sort: "asc",
    perPage: {
      start: 0,
      end: 0,
    }
  },
  currentPage: 1,
};

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS_DATA:
      return {
        ...state,
        productsData: payload,
      };
    case ADD_PRODUCTS_CATEGORY_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: payload,
        },
      };
    case ADD_PRODUCTS_KEYWORD_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          keyword: payload,
        },
      };
    case ADD_PRODUCTS_SORT_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: payload,
        },
      };
    case ADD_PRODUCTS_PER_PAGE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          perPage: payload,
        },
      };
    case RESET_PRODUCTS_FILTER:
      return {
        ...state,
        filter: {
          category: "",
          keyword: "",
          sort: "asc",
          perPage: {
            start: 0,
            end: 0,
          },
        },
      };
    case SET_PRODUCTS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

export default products;