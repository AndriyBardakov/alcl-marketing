

import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/products/Categories";
import SearchBox from "../../components/products/SearchBox";
import { resetFilter } from "../../redux/actions/products";

const JobSearchForm = () => {
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(resetFilter());
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
