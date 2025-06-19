import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const carouselConfig = {
    dots: true,
    infinite: true,
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
        backgroundImage: "url(/images/source/5.png)",
        backgroundSize: "cover",
        padding: "5% 20% 2.5% 20%",
      }}
    >
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column " data-aos="fade-up">
            <div className="sec-title">
              <div className="text text-white text-left fs-5">
                Sarap ng lasa, sarap ng kita! The mantra of ALCL Marketing rings
                true in all their products aiming to improve and supplement the
                creativity of flavors and the Filipino desire for business. ALCL
                Marketing prides itself in not just being a part of your daily
                cravings, but more so on the fact that ALCL Marketing helps
                build businesses and promote livelihood for their market, the
                common Filipino.
              </div>
            </div>
          </div>
        </div>

        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <figure className="image" data-aos="fade-down">
            <Slider {...carouselConfig}>
              <div>
                <img
                  src="/images/source/sampaloc/DSC04981_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/images/source/sampaloc/DSC05002_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/images/source/sampaloc/DSC05035_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/images/source/sampaloc/DSC05055_11zon.jpg"
                  alt="sampaloc"
                />
              </div>
              <div>
                <img
                  src="/images/source/sampaloc/DSC05068_11zon.jpg"
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