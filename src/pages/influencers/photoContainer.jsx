import React, { memo } from "react";

const PhotoContainer = ({ src, alt }) => {
  return (
    <div className="col-sm-6 d-flex">
      <figure className="image" data-aos="zoom-in">
        <img src={src} alt={alt} style={{ maxHeight: "800px" }} />
      </figure>
    </div>
  );
};

export default memo(PhotoContainer);
