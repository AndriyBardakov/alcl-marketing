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
            <div className="inner-box">
              <Link to={product.link} target="_blank" className="">
                {/* <button className="bookmark-btn">
                  <span className="flaticon-ellipsis"></span>
                </button> */}

                <div className="content-inner">
                  {/* <span className="featured">Featured</span> */}
                  <span className="company-logo">
                    <img src={product.image} alt="company brand" />
                  </span>
                  <h6>{product.name}</h6>
                </div>
                {/* <div className="product-description">
            {product.description.map((item, index) => (
              <p className="text" key={index}>
                {item}
              </p>
            ))}
          </div> */}
              </Link>
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
