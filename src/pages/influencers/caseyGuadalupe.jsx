import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const CaseyGuadalupe = () => {
  return (
    <InfluencerContainer
      name="Casey Guadalupe"
      src="/images/source/influencers/Casey_Guadalupe.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@mommycashew/video/7548078146491403527"
        data-video-id="7548078146491403527"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@mommycashew"
            href="https://www.tiktok.com/@mommycashew?refer=embed"
          >
            @mommycashew
          </a>{" "}
          MUSUBI WITH A TWIST! Madali lang gawin itong Hash Brown Musubi na
          Chili BBQ! Just pour &#38; mix the Ranchero’s Chili BBQ Flavoring
          Powder sa hash brown! Perfect na snack and easy meal! Follow @ALCL
          Marketing, OPC and shop on their official stores{" "}
          <a
            title="nakacheesemisskanaba"
            target="_blank"
            href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
          >
            #NakaCHEESEMISSkaNaBa
          </a>{" "}
          <a
            title="icheesemissmona"
            target="_blank"
            href="https://www.tiktok.com/tag/icheesemissmona?refer=embed"
          >
            #ICheesemissMONA
          </a>{" "}
          <a
            title="sarapnglasasarapngkita"
            target="_blank"
            href="https://www.tiktok.com/tag/sarapnglasasarapngkita?refer=embed"
          >
            #SarapNgLasaSarapNgKita
          </a>{" "}
          <a
            title="bnmph"
            target="_blank"
            href="https://www.tiktok.com/tag/bnmph?refer=embed"
          >
            #BnMPh
          </a>{" "}
          <a
            title="bnmphfamily"
            target="_blank"
            href="https://www.tiktok.com/tag/bnmphfamily?refer=embed"
          >
            #BnMPhFamily
          </a>{" "}
          @Baby and Moms PH{" "}
          <a
            target="_blank"
            title="♬ Advertisement Happy Fresh and Cute A Great Day - Royaltyfreemusicforvideos"
            href="https://www.tiktok.com/music/Advertisement-Happy-Fresh-and-Cute-A-Great-Day-7377829190279055397?refer=embed"
          >
            ♬ Advertisement Happy Fresh and Cute A Great Day -
            Royaltyfreemusicforvideos
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@mommycashew/video/7548078146491403527" />
    </InfluencerContainer>
  );
};

export default CaseyGuadalupe;
