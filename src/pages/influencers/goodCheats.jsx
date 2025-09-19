import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const GoodCheats = () => {
  return (
    <InfluencerContainer
      name="Good Cheats"
      src="/images/source/influencers/Good_Cheats.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@good.cheats/video/7540243818621177095"
        data-video-id="7540243818621177095"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@good.cheats"
            href="https://www.tiktok.com/@good.cheats?refer=embed"
          >
            @good.cheats
          </a>{" "}
          Mas bumisa ang merienda namin dahil sa mga produkto ng @ALCL
          Marketing, OPC odukto nila lahat solido mga dre!{" "}
          <a
            title="goodcheats"
            target="_blank"
            href="https://www.tiktok.com/tag/goodcheats?refer=embed"
          >
            #goodcheats
          </a>{" "}
          <a
            title="sarapnglasasarapngkita"
            target="_blank"
            href="https://www.tiktok.com/tag/sarapnglasasarapngkita?refer=embed"
          >
            #SarapNgLasaSarapNgKita
          </a>{" "}
          <a
            title="nakacheesemisskanaba"
            target="_blank"
            href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
          >
            #NakaCHEESEMISSkaNaBa
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound - Jona - Jonabaal"
            href="https://www.tiktok.com/music/original-sound-Jona-6875959228012514050?refer=embed"
          >
            ♬ original sound - Jona - Jonabaal
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@good.cheats/video/7540243818621177095" />
    </InfluencerContainer>
  );
};

export default GoodCheats;
