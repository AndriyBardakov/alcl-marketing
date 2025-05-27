import React, { lazy, memo } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";

const VideoFrame = memo(({ src }) => {
  return (
    <iframe
      // width="100%"
      // height="405"
      src={src}
      className="video-carousel__video"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
});

const carouselConfig = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1000,
  easing: "linear",
  arrows: true,
  lazyLoad: "ondemand",
  pauseOnHover: true,
  pauseOnFocus: true,
  appendDots: (dots) => (
    <div
      style={{
        backgroundColor: "transparent",
        borderRadius: "10px",
        marginTop: 0,
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
        // backgroundColor: "#fff",
      }}
    ></div>
  ),
  className: "video-carousel",
  dotsClass: "slick-dots slick-thumb",
  nextArrow: (
    <div className="nextArrow">
      <FaChevronRight />
    </div>
  ),
  prevArrow: (
    <div className="prevArrow">
      <FaChevronLeft />
    </div>
  ),
};

export default function VideoCarousel() {
  return (
    <section
      className="text-white text-center"
      style={{
        padding: "5% 10% 0 10%",
      }}
    >
      <div className="row">
        <div className="content-column col-sm-12 mx-auto" data-aos="fade-down">
          <Slider {...carouselConfig}>
            <div>
              <VideoFrame src="https://www.youtube.com/embed/PVCJtN_4QIg?si=rNMTl0D8G8gGEcXL" />
            </div>
            <div>
              <VideoFrame src="https://www.youtube.com/embed/iJH_Jo80e3Y?si=9NAzOO1eZqrj-oVw" />
            </div>
            <div>
              <VideoFrame src="https://www.youtube.com/embed/3lflvNSRq7U?si=nXFKmRpeX32CzCX7" />
            </div>
            <div>
              <VideoFrame src="https://www.youtube.com/embed/ZBQ9ugD6eRI?si=5cD1mF1Cp8MIyHL6" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
