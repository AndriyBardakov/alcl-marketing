import React from 'react';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <>
      <section
        className="dealership-header"
        style={{ padding: "5% 10% 2.5% 10%" }}
      >
        <div className="row">
          <div className="content-column col-sm-12">
            <h2 className="text-center text-muted fw-bold" data-aos="fade-down">
              Inquire now. Start your journey to become our authorized dealer.
            </h2>
          </div>
        </div>
      </section>
      <section
        className="dealership-content"
        style={{ padding: "2.5% 10% 2.5% 10%" }}
      >
        <div className="row">
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <figure className="image" data-aos="fade-right">
              <img
                src="/images/source/Carousel-AdsArtboard.png"
                alt="dealers"
              />
            </figure>
          </div>
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="content" data-aos="fade-left">
              <h5 className="mb-4">
                We are looking for wholesale food dealers or distributors with
                physical stores or warehouses.
              </h5>
              <p className="mb-4 fs-6">
                For wholesale pricing, please submit a copy of your BIR Form
                2303 (Certificate of Registration), send us photos of your shop
                and kindly fill up the form:
              </p>
              <ul className="dealer-form-fields ms-5">
                <li>Business Name</li>
                <li>Address</li>
                <li>TIN #</li>
                <li>Contact Persons</li>
                <li>Contact #s</li>
                <li>Email</li>
                <li>Socmed Page / Website</li>
                <li>Forwarder Details (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="dealership-content bg-primary text-white"
        // style={{ padding: "2.5% 10% 0 10%" }}
        style={{
          backgroundImage: "url(/images/source/5.png)",
          backgroundSize: "cover",
          padding: "2.5% 10% 0 10%",
        }}
      >
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="content" data-aos="fade-up">
              <h5 className="mb-4">
                You may purchase our products from our wholesale dealers, online
                stores or in public markets nearest your area.
              </h5>
              <div
                className="mb-4 fs-6 border rounded p-3"
                style={{ backgroundColor: "#F5F7FC" }}
              >
                <p className="fs-5 mb-4 text-center">Online Stores</p>
                <ul className="list-unstyled">
                  <li>
                    👉
                    <a
                      className="fs-5 ms-2"
                      href="https://www.shopee.ph/alclmarketing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shopee
                    </a>
                  </li>
                  <li>
                    👉
                    <a
                      className="fs-5 ms-2"
                      href="https://www.tiktok.com/@alclmarketing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <figure className="image" data-aos="fade-left">
              <Link
                to="https://www.facebook.com/ALCLMarketing"
                target="_blank"
                className=""
              >
                <img src="/images/source/dealers.jpg" alt="dealers" />
              </Link>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;