

import { useDispatch, useSelector } from "react-redux";
import Categories from "../../common/Categories";
import SearchBox from "../../common/SearchBox";
import { resetDealersFilter } from "../../../redux/actions/dealers";

const JobSearchForm = () => {
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(resetDealersFilter());
  };
  return (
    <>
      <div className="job-search-form">
        <div className="row">
          <div className="form-group col-lg-4 col-md-12 col-sm-12">
            <SearchBox />
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
            <Categories />
          </div>
          {/* <!-- Form Group --> */}

          <div className="form-group col-lg-4 col-md-12 col-sm-12 text-right">
            <button type="button" onClick={clearAll} className="theme-btn btn btn-primary">
              Clear Filters
            </button>
          </div>
          {/* <!-- Form Group --> */}
        </div>
      </div>
    </>
  );
};

export default JobSearchForm;
