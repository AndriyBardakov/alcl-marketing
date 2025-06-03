import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FilterTopBox from "./FilterTopBox";
import JobSearchForm from "./JobSearchForm";
import { fetchProducts } from "@/redux/actions/products";

const index = () => {
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
  return (
    <>
      <section className="page-title products-page-title">
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
