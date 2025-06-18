import React, { useMemo, useCallback} from "react";
import { Link } from "react-router-dom";
import Pagination from "../../common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  addDealersPerPageFilter,
  addDealersSortFilter,
  resetDealersFilter,
} from "../../../redux/actions/dealers";
import {
  dealersFilterSelector,
  dealersDataSelector,
  dealersCurrentPageSelector,
} from "@/redux/selectors/dealers";  
import DealerCard from "./DealerCard"; // Assuming you have a DealerCard component for rendering dealer information

const FilterTopBox = () => {
  const dealersData = useSelector(dealersDataSelector);
  const { keyword, category, sort, perPage } = useSelector(dealersFilterSelector);
  const currentPage = useSelector(dealersCurrentPageSelector);
  const dispatch = useDispatch();

  // keyword filter
  const keywordFilter = (item) =>
    keyword !== ""
      ? JSON.stringify(item).toLowerCase().includes(keyword?.toLowerCase()) && item
      : item;

  // category filter
  const categoryFilter = useCallback(
    (item) =>
      category !== ""
        ? item?.region?.toLocaleLowerCase() === category?.toLocaleLowerCase()
        : item,
    [category]
  );

  // sort filter
  // const sortFilter = (a, b) =>
  //   sort === "desc" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = useMemo(() => {
    let visibleData = dealersData
      ?.filter(keywordFilter)
      ?.filter(categoryFilter);

    if (perPage.end === 0) {
      // Show all dealers
      return visibleData?.map((dealer) => (
        <DealerCard key={dealer.name} dealer={dealer} />
      ));
    }

    const start = (currentPage - 1) * perPage.end;
    const end = currentPage * perPage.end;

    return visibleData
      ?.slice(start, end)
      ?.map((dealer) => <DealerCard key={dealer.name} dealer={dealer} />);
  }, [dealersData, perPage, keyword, category, sort, currentPage]);

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addDealersPerPageFilter(pageData));
  };

  // sort handler
  const sortHandler = (e) => {
    dispatch(addDealersSortFilter(e.target.value));
  };

  // clear handler
  const clearAll = () => {
    dispatch(resetDealersFilter());
  };
  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{content?.length}</strong> dealers
          </div>
        </div>
        {/* End showing-result */}
        <div className="sort-by">
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
                end: 50,
              })}
            >
              50 per page
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      <div className="row">{content}</div>
      {/* End .row */}

      {perPage.end !== 0 && (
        <Pagination
          perPageEnd={perPage?.end || 0}
          itemsCount={dealersData?.length || 0}
        />
      )}
      {/* <!-- Pagination --> */}
    </>
  );
};

export default FilterTopBox;
