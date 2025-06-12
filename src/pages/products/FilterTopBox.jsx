import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import companyData from "../../data/topCompany";
import Pagination from "../../components/products/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryFilter,
  addKeywordFilter,
  addPerPageFilter,
  addSortFilter,
  resetFilter,
} from "../../redux/actions/products";
import {
  filterSelector,
  productsDataSelector,
  currentPageSelector,
} from "../../redux/selectors/products";

const FilterTopBox = () => {
  const productsData = useSelector(productsDataSelector);
  const { keyword, category, sort, perPage } = useSelector(filterSelector);
  const currentPage = useSelector(currentPageSelector);
  const dispatch = useDispatch();

  // keyword filter
  const keywordFilter = (item) =>
    keyword !== ""
      ? item?.name?.toLowerCase().includes(keyword?.toLowerCase()) && item
      : item;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // sort filter
  const sortFilter = (a, b) =>
    sort === "desc" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = useMemo(
    () =>
      productsData
        ?.slice(
          currentPage > 1 ? perPage.end : 0,
          currentPage > 1
            ? productsData.length
            : perPage.end !== 0
            ? perPage.end
            : 24
        )
        ?.filter(keywordFilter)
        ?.filter(categoryFilter)
        ?.sort(sortFilter)
        ?.map((product) => (
          <div
            className="company-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12"
            key={product.id}
          >
            <div className="inner-box product-box">
              <div className="d-flex h-100">
                <div className="content-inner d-flex flex-column justify-content-between">
                  <span className="company-logo">
                    <img src={product.image} alt="company brand" />
                  </span>
                  <h6>{product.name}</h6>
                  <div className="d-flex justify-content-center mt-3 align-items-end gap-2 flex-grow-1">
                    <a
                      href="#"
                      className="btn btn-outline-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target={`#productModal-${product.id}`}
                    >
                      Details
                    </a>
                    <Link
                      to={product.link}
                      target="_blank"
                      className="btn btn-primary btn-sm"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id={`productModal-${product.id}`}
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="apply-modal-content modal-content">
                  <div className="text-center">
                    <h5 className="title">{product.name}</h5>
                    <button
                      type="button"
                      className="closed-modal"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  {/* End modal-header */}
                  <div className="overflow-auto">
                    <div className="text-center">
                      <img
                        src={product.image}
                        alt="product"
                        className="img-fluid mb-3"
                      />
                    </div>
                    <div>{product.description}</div>
                  </div>
                  {/* End PrivateMessageBox */}
                </div>
                {/* End .send-private-message-wrapper */}
              </div>
            </div>
          </div>
        )),
    [productsData, perPage, keyword, category, sort, currentPage]
  );

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPageFilter(pageData));
  };

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSortFilter(e.target.value));
  };

  // clear handler
  const clearAll = () => {
    dispatch(resetFilter());
  };
  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{content?.length}</strong> products
          </div>
        </div>
        {/* End showing-result */}
        <div className="sort-by">
          {/* {keyword !== "" ||
          category !== "" ||
          sort !== "" ||
          perPage.start !== 0 ||
          perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{
                minHeight: "45px",
                marginBottom: "15px",
              }}
            >
              Clear All
            </button>
          ) : undefined} */}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="desc">Oldest</option>
          </select>
          {/* End select */}

          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3 "
            value={JSON.stringify(perPage)}
          >
            <option
              value={JSON.stringify({
                start: 0,
                end: 0,
              })}
            >
              All
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 10,
              })}
            >
              10 per page
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 20,
              })}
            >
              20 per page
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 24,
              })}
            >
              24 per page
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      <div className="row">{content}</div>
      {/* End .row */}

      <Pagination
        perPageEnd={perPage?.end || 0}
        productsCount={productsData?.length || 0}
      />
      {/* <!-- Pagination --> */}
    </>
  );
};

export default FilterTopBox;
