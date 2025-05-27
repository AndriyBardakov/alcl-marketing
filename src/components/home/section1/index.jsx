import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {

  return (
    <section className="" style={{ padding: "5% 10%" }}>
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div className="inner-column " data-aos="fade-left">
            <div className="sec-title">
              <div className="text fs-5">
                ALCL Marketing prides itself in not just being a part of your
                daily cravings, but more so on the fact that ALCL Marketing
                helps build businesses and promote livelihood for their market,
                the common Filipino.
              </div>
            </div>
          </div>
        </div>

        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <figure className="image" data-aos="zoom-in">
            <img src="/images/source/img_3.png" alt="about" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Section1;