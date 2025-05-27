import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const carouselConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    easing: "linear", 
    arrows: false,
    lazyLoad: "ondemand",
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          marginTop: 0
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
      ></div>
    ),
    className: "video-carousel",
    dotsClass: "slick-dots slick-thumb",
  };

const Section2 = () => {

  return (
    <section
      className="bg-primary text-white text-center"
      style={{
        backgroundImage: "url(/src/assets/images/5.png)",
        backgroundSize: "cover",
        padding: "5% 20%",
      }}
    >
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column " data-aos="fade-up">
            <div className="sec-title">
              <div className="text text-white text-left fs-5">
                With inJoy, we believe that this is our way to enable aspiring
                business owners an opportunity to start with just a small
                capital. We’ve seen many success stories with their inJoy
                business through their hard work, dedication and innovative
                spirit. That is what inspires us to continue creating products
                for you. At the heart of inJoy is to see you achieve your dreams
                and provide delicious and affordable products to every Filipino.
              </div>
            </div>
          </div>
        </div>

        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <figure className="image" data-aos="fade-left">
            <Slider {...carouselConfig}>
              <div>
                <img
                  src="/src/assets/images/sampaloc/DSC04981_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/src/assets/images/sampaloc/DSC05002_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/src/assets/images/sampaloc/DSC05035_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/src/assets/images/sampaloc/DSC05055_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/src/assets/images/sampaloc/DSC05068_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
            </Slider>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Section2;