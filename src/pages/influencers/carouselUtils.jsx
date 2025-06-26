import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export const style = { maxWidth: "605px", minWidth: "325px" };

export const reloadTikTokEmbed = () => {
  const existing = document.getElementById("tiktok-embed-script");
  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.id = "tiktok-embed-script";
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
};

export const carouselConfig = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
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
  afterChange: () => {
    reloadTikTokEmbed();
  },
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