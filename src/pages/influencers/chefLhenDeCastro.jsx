import React from "react";
import InfluencerContainer from "./influencerContainer";
import Slider from "react-slick";
import { carouselConfig, style } from "./carouselUtils";

const ChefLhenDeCastro = () => {
  return (
    <InfluencerContainer
      name="Chef Lhen De Castro"
      src="/images/source/influencers/Chef_Lhen_De_Castro.jpg"
    >
      <Slider {...carouselConfig}>
        <div>
          
        </div>
        <div>
          
        </div>
      </Slider>
    </InfluencerContainer>
  );
};

export default ChefLhenDeCastro;
