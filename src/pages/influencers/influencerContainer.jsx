import React, { useEffect } from "react";
import MetaComponent from "@/components/common/MetaComponent";
import PhotoContainer from "./photoContainer";
import { reloadTikTokEmbed } from "./carouselUtils";

const InfluencerContainer = ({ name, src, children }) => {
  const metadata = {
    title: `Influencers: ${name} || ALCL Marketing`,
  };

  useEffect(() => {
    reloadTikTokEmbed();
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="influencers-page" style={{ paddingTop: "200px" }}>
        <div className="auto-container">
          <h1 className="text-center mb-5">{name}</h1>
          <div className="row influencer mb-5">
            <PhotoContainer src={src} alt={name} />
            <div className="col-sm-6" data-aos="zoom-in">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerContainer;
