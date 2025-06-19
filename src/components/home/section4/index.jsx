import React from "react";
import { Link } from "react-router-dom";

const Section4 = () => {

  return (
    <section
      className="text-white text-center py-5"
      style={{
        // backgroundImage: "url(/images/source/orange_bg.png)",
        // backgroundSize: "cover",
        padding: "5% 20% 2.5% 20%",
      }}
    >
      {/* <h1 className="mb-5 fw-bolder">Influencers</h1> */}

      <div className="row">
        <div className="content-column col-lg-6 col-md-6 col-sm-12 order-2">
          <Link
            to="#"
            // target="_blank"
            className="btn btn-light mb-3 p-2"
          >
            <figure className="image" data-aos="zoom-in">
              <img
                src="/images/source/influencers/CHEESEMOSA_website_small.png"
                alt="Chef Gericke"
                className="rounded"
              />
              <figcaption className="text-center mt-2">Cheesemosa</figcaption>
            </figure>
          </Link>
        </div>
        <div className="content-column col-lg-6 col-md-6 col-sm-12 order-2">
          <Link
            to="#"
            // target="_blank"
            className="btn btn-light mb-3 p-2"
          >
            <figure className="image" data-aos="zoom-in">
              <img
                src="/images/source/influencers/RANCHERO_website_small.png"
                alt="Sophia Cartie"
                className="rounded"
                style={{ maxHeight: "800px"}}
              />
              <figcaption className="text-center mt-2">
                Ranchero
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section4;