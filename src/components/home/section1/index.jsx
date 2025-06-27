import React from "react";
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

const Section1 = () => {

  return (
    <section className="" style={{ padding: "5% 10%" }}>
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
          <div className="inner-column " data-aos="fade-down">
            <div className="sec-title">
              <div className="text fs-5">
                ALCL has had a long-standing partnership with NATIONAL BAKING
                TEACHER & CULINARY INFLUENCER, Chef Emily Peralta!
              </div>
            </div>
          </div>
        </div>

        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <figure className="image" data-aos="zoom-in">
            <Slider {...carouselConfig}>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_1.jpeg"
                  alt="Chef Emily"
                />
              </div>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_2.jpeg"
                  alt="Chef Emily"
                />
              </div>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_3.jpeg"
                  alt="Chef Emily"
                />
              </div>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_4.jpeg"
                  alt="Chef Emily"
                />
              </div>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_5.jpeg"
                  alt="Chef Emily"
                />
              </div>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_6.jpeg"
                  alt="Chef Emily"
                />
              </div>
              <div>
                <img
                  src="/images/source/influencers/chefEmily/Chef_Emily_Photo_7.jpeg"
                  alt="Chef Emily"
                />
              </div>
            </Slider>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Section1;