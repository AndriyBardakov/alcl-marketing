import React from "react";

import Header from "./Header";
import Statistics from "./Statistics";
import IntroDescriptions from "./IntroDescriptions";
import Certificates from "./Certificates";
import NegosyoSeries from "./NegosyoSeries";
import Lifestyle from "./Lifestyle";
import ActivitiesCollaborations from "./ActivitiesCollaborations";

const index = () => {
  return (
    <>
      {/* <Header /> */}
      <IntroDescriptions />
      <Certificates />
      <Statistics />
      {/* <NegosyoSeries />
      <Lifestyle /> */}
      {/* <ActivitiesCollaborations /> */}

    </>
  );
}

export default index;
