import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const SophiaCartie = () => {
  return (
    <InfluencerContainer
      name="Sophia Cartie"
      src="/images/source/influencers/Sophia_Cartie.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@cartiecakez/video/7495730584560356616"
        data-video-id="7495730584560356616"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@cartiecakez"
            href="https://www.tiktok.com/@cartiecakez?refer=embed"
          >
            @cartiecakez
          </a>{" "}
          Just us, a good movie, and snacks made better with ALCL’s
          products—because everything, especially love, tastes better with a
          sprinkle of flavor. Perfect for cozy moments, any time of day.@ALCL
          Marketing, OPC{" "}
          <a
            target="_blank"
            title="♬ som original - scand7ll"
            href="https://www.tiktok.com/music/som-original-7311826381980109573?refer=embed"
          >
            ♬ som original - scand7ll
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@cartiecakez/video/7495730584560356616" />
    </InfluencerContainer>
  );
};

export default SophiaCartie;
