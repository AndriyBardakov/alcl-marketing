import React, { memo } from "react";

const VideoFrame = memo(({ src }) => {
  return (
    <iframe
      className="video-frame"
      src={src}
      lazyLoad="true"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
});

const NegosyoSeries = () => {
  return (
    <section className="about-section-three">
      <div className="auto-container">
        <div className="text-box">
          <h4 className="text-center">Negosyo Series</h4>
          <p>
            ALCL Marketing prides itself in not just being a part of your daily
            cravings, but more so on the fact that ALCL Marketing helps build
            businesses and promote livelihood for their market, the common
            Filipino. In these series, we take a look at 4, real business owners
            and how ALCL Marketing helped their livelihoods for the better
          </p>
        </div>
        <div className="row" style={{ padding: "2.5% 10% 0 10%" }}>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/PVCJtN_4QIg?si=rNMTl0D8G8gGEcXL" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/iJH_Jo80e3Y?si=9NAzOO1eZqrj-oVw" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/3lflvNSRq7U?si=nXFKmRpeX32CzCX7" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/ZBQ9ugD6eRI?si=5cD1mF1Cp8MIyHL6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NegosyoSeries;
