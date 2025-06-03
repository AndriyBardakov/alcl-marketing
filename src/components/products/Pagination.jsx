import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, addPerPageFilter } from "../../redux/actions/products";
import { currentPageSelector } from "../../redux/selectors/products";

const Pagination = ({ productsCount, perPageEnd }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useMemo(() => perPageEnd ? Math.ceil(productsCount / perPageEnd) : 1, [productsCount, perPageEnd]);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const gotoNextPage = useCallback(
    (e) => {
      e.preventDefault();
      const nextPage = currentPage + 1; // Increment current page
      dispatch(setCurrentPage(nextPage)); // Example: Set to page 2, you can modify this logic as needed
    },
    [dispatch, currentPage]
  );

  const gotoPrevPage = useCallback(
    (e) => {
      e.preventDefault();
      const prevPage = currentPage > 1 ? currentPage - 1 : 1; // Decrement current page but not below 1
      dispatch(setCurrentPage(prevPage)); // Example: Set to page 1, you can modify this logic as needed
    },
    [dispatch, currentPage]
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
            <a href="#" className={currentPage === pageNumber ? "current-page" : ""} onClick={() => dispatch(setCurrentPage(pageNumber))}>
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
