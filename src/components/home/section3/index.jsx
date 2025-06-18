import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {

  return (
    <section
      className="bg-primary text-white text-center py-5"
      style={{
        backgroundImage: "url(/images/source/orange_bg.png)",
        backgroundSize: "cover",
        padding: "5% 20% 2.5% 20%",
      }}
    >
      <h1 className="mb-5 fw-bolder">Influencers</h1>

      <div className="row">
        <div className="content-column col-lg-4 col-md-4 col-sm-12 order-2">
          <Link
            to="https://www.tiktok.com/@chefgerickmanalo/video/7274565585768402182"
            target="_blank"
            className="btn btn-light mb-3 p-2"
          >
            <figure className="image" data-aos="zoom-in">
              <img
                src="/images/source/influencers/Chef_Gericke.jpg"
                alt="Chef Gericke"
                className="rounded"
              />
              <figcaption className="text-center mt-2">Chef Gericke</figcaption>
            </figure>
          </Link>
        </div>
        <div className="content-column col-lg-4 col-md-4 col-sm-12 order-2">
          <Link
            to="https://www.instagram.com/p/DIswUudRYgP/"
            target="_blank"
            className="btn btn-light mb-3 p-2"
          >
            <figure className="image" data-aos="zoom-in">
              <img
                src="/images/source/influencers/Sophia_Cartie.jpg"
                alt="Sophia Cartie"
                className="rounded"
              />
              <figcaption className="text-center mt-2">
                Sophia Cartie
              </figcaption>
            </figure>
          </Link>
        </div>
        <div className="content-column col-lg-4 col-md-4 col-sm-12 order-2">
          <Link
            to="https://www.tiktok.com/@thejosephverallo"
            target="_blank"
            className="btn btn-light mb-3 p-2"
          >
            <figure className="image" data-aos="zoom-in">
              <img
                src="/images/source/influencers/Joseph_Verallo.jpg"
                alt="Joseph Verallo"
                className="rounded"
              />
              <figcaption className="text-center mt-2">
                Joseph Verallo
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section3;