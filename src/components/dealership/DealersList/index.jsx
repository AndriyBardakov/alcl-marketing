import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FilterTopBox from "./FilterTopBox";
import JobSearchForm from "./JobSearchForm";
import { fetchDealers } from "@/redux/actions/dealers";

const index = () => {
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDealers());
	}, []);
  return (
    <>
      <section className="page-title">
        <div className="auto-container">
          <JobSearchForm />
          {/* <!-- Job Search Form --> */}
        </div>
      </section>
      {/* <!--End Page Title--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-12">
              <div className="ls-outer">
                <FilterTopBox />
              </div>
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </section>
    </>
  );
};

export default index;
