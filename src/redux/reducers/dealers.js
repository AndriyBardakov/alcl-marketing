import {
  ADD_DEALERS_CATEGORY_FILTER,
  ADD_DEALERS_KEYWORD_FILTER,
  ADD_DEALERS_SORT_FILTER,
  ADD_DEALERS_PER_PAGE_FILTER,
  RESET_DEALERS_FILTER,
  SET_DEALERS_CURRENT_PAGE,
  SET_DEALERS_CATEGORIES,
  SET_DEALERS_DATA
} from "../constants";

const initialState = {
  dealersData: null,
  categories: [],
  filter: {
    category: "",
    keyword: "",
    sort: "asc",
    perPage: {
      start: 0,
      end: 20,
    }
  },
  currentPage: 1,
};

const dealers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DEALERS_DATA:
      return {
        ...state,
        dealersData: payload,
      };
    case ADD_DEALERS_CATEGORY_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: payload,
        },
      };
    case ADD_DEALERS_KEYWORD_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          keyword: payload,
        },
      };
    case ADD_DEALERS_SORT_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: payload,
        },
      };
    case ADD_DEALERS_PER_PAGE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          perPage: payload,
        },
      };
    case RESET_DEALERS_FILTER:
      return {
        ...state,
        filter: {
          category: "",
          keyword: "",
          sort: "asc",
          perPage: {
            start: 0,
            end: 20,
          },
        },
      };
    case SET_DEALERS_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case SET_DEALERS_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default dealers;