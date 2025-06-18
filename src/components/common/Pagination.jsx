import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductsCurrentPage,
  addProductsPerPageFilter,
} from "../../redux/actions/products";
import {
  setDealersCurrentPage,
  addDealersPerPageFilter,
} from "../../redux/actions/dealers";
import { productsCurrentPageSelector } from "../../redux/selectors/products";
import { dealersCurrentPageSelector } from "../../redux/selectors/dealers";

const Pagination = ({ isProduct, itemsCount, perPageEnd }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    isProduct ? productsCurrentPageSelector : dealersCurrentPageSelector
  );
  const totalPages = useMemo(
    () => (perPageEnd ? Math.ceil(itemsCount / perPageEnd) : 1),
    [itemsCount, perPageEnd]
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const gotoNextPage = useCallback(
    (e) => {
      e.preventDefault();
      const nextPage = currentPage + 1; // Increment current page
      if (isProduct) {
        dispatch(setProductsCurrentPage(nextPage)); // Example: Set to page 2, you can modify this logic as needed
        return;
      }

      dispatch(setDealersCurrentPage(nextPage)); // Example: Set to page 2, you can modify this logic as needed
    },
    [dispatch, currentPage]
  );

  const gotoPrevPage = useCallback(
    (e) => {
      e.preventDefault();
      const prevPage = currentPage > 1 ? currentPage - 1 : 1; // Decrement current page but not below 1
      if (isProduct) {
        dispatch(setProductsCurrentPage(prevPage)); // Example: Set to page 1, you can modify this logic as needed
        return;
      }

      dispatch(setDealersCurrentPage(prevPage)); // Example: Set to page 1, you can modify this logic as needed
    },
    [dispatch, currentPage]
  );

  const handlePerPageChange = useCallback(
    (e, pageNumber) => {
      e.preventDefault();

      if (isProduct) {
        // dispatch(addProductsPerPageFilter(pageNumber));
        dispatch(setProductsCurrentPage(pageNumber));
        return;
      }
      // dispatch(addDealersPerPageFilter(pageNumber));
      dispatch(setDealersCurrentPage(pageNumber));
    },
    [dispatch, isProduct]
  );

  return (
    <nav className="ls-pagination">
      <ul>
        <li className="prev">
          <a href="#" onClick={gotoPrevPage}>
            <i className="fa fa-arrow-left"></i>
          </a>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              className={currentPage === pageNumber ? "current-page" : ""}
              onClick={(e) => handlePerPageChange(e, pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        <li className="next">
          <a href="#" onClick={gotoNextPage}>
            <i className="fa fa-arrow-right"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
