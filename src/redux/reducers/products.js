import { current } from "@reduxjs/toolkit";
import {
  SET_PRODUCTS_DATA,
  ADD_CATEGORY_FILTER,
  ADD_KEYWORD_FILTER,
  ADD_SORT_FILTER,
  ADD_PER_PAGE_FILTER,
  RESET_FILTER,
  SET_CURRENT_PAGE
} from "../constants";

const initialState = {
  productsData: null,
  categories: [
    // { value: "all", label: "All Products" },
    { value: "cheese-and-cheese-powder", label: "Cheese & Cheese Powder" },
    { value: "flavour-enhancers", label: "Flavour Enhancers" },
    { value: "baking-ingredients", label: "Baking Ingredients" },
    { value: "others", label: "Others" },
    { value: "cereal-and-oats", label: "Cereal & Oats" }
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
    case ADD_CATEGORY_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: payload,
        },
      };
    case ADD_KEYWORD_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          keyword: payload,
        },
      };
    case ADD_SORT_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: payload,
        },
      };
    case ADD_PER_PAGE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          perPage: payload,
        },
      };
    case RESET_FILTER:
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
};

export default products;