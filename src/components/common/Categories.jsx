import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productsCategoriesSelector,
  productsCategoryFilterSelector,
} from "../../redux/selectors/products";
import {
  dealersCategoriesSelector,
  dealersCategoryFilterSelector,
} from "../../redux/selectors/dealers";
import { addProductsCategoryFilter } from "../../redux/actions/products";
import { addDealersCategoryFilter } from "../../redux/actions/dealers";
import { BiCategory } from "react-icons/bi";

const Categories = ({ type }) => {
  const categories = useSelector(
    type === "product" ? productsCategoriesSelector : dealersCategoriesSelector
  );
  const categoryFilter = useSelector(
    type === "product"
      ? productsCategoryFilterSelector
      : dealersCategoryFilterSelector
  );
  const dispatch = useDispatch();
  const placeholder = type === "product" ? "Select category" : "Select location";

  const categoryHandler = useCallback(
    (e) => {
      if (type === "product") {
        dispatch(addProductsCategoryFilter(e.target.value));
        return;
      }
      dispatch(addDealersCategoryFilter(e.target.value));
    },
    [type, dispatch]
  );

  return (
    <>
      <select
        className="form-select"
        onChange={categoryHandler}
        value={categoryFilter}
      >
        <option value="">{placeholder}</option>
        {categories?.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <BiCategory className="icon" />
    </>
  );
};

export default Categories;
