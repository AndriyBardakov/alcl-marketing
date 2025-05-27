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

const Lifestyle = () => {
  return (
    <section className="about-section-three">
      <div className="auto-container">
        <div className="text-box">
          <h4 className="text-center">Lifestyle</h4>
          {/* <p>
            ALCL Marketing prides itself in not just being a part of your daily
            cravings, but more so on the fact that ALCL Marketing helps build
            businesses and promote livelihood for their market, the common
            Filipino. In these series, we take a look at 4, real business owners
            and how ALCL Marketing helped their livelihoods for the better
          </p> */}
        </div>
        <div className="row" style={{ padding: "2.5% 10% 2.5% 10%" }}>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/QWWtsg7bvvk?si=CvGwnwmT8o436jMx" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/r6CYqYr2nd8?si=P7BXPl346XtGdjIC" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/EW69DVc1qE0?si=2NDIXWVBhTOTy_s7" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-2">
            <div className="video-column" data-aos="zoom-in">
              <VideoFrame src="https://www.youtube.com/embed/zfKZwzYBx-Q?si=UKOAGVFdroBRfpnf" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
