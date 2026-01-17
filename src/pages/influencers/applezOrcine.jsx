import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const ApplezOrcine = () => {
  return (
    <InfluencerContainer
      name="Applez Orcine"
      src="/images/source/influencers/Applez_Orcine.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@mommyapplez/video/7549857161166245127"
        data-video-id="7549857161166245127"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@mommyapplez"
            href="https://www.tiktok.com/@mommyapplez?refer=embed"
          >
            @mommyapplez
          </a>{" "}
          Let’s make Ranchero’s Chili BBQ Onion Rings! Perfect snack ngayong
          tagulan habang nagmomovie marathon! 😊🌧️ Simple ingredients and very
          easy to make pa! Highly recommended ko talaga ang mga ALCL products
          para sa mga favorite snacks mo! You can order thru ALCL official
          online stores: www.shopee.ph&#47;alclmarketing
          www.tiktok.com&#47;@alclmarketing Also available in Ever Supermarkets
          and Ever Online store: https:&#47;&#47;ever.ph At sa inyong
          pinakamalapit na palengke! @ALCL Marketing, OPC{" "}
          <a
            title="nakacheesemisskanaba"
            target="_blank"
            href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
          >
            #nakaCHEESEMISSkaNaBa
          </a>{" "}
          <a
            title="icheesemissmona"
            target="_blank"
            href="https://www.tiktok.com/tag/icheesemissmona?refer=embed"
          >
            #ICheeseMissMona
          </a>{" "}
          <a
            title="sarapnglasasarapngkita"
            target="_blank"
            href="https://www.tiktok.com/tag/sarapnglasasarapngkita?refer=embed"
          >
            #SarapNgLasaSarapNgKita
          </a>{" "}
          <a
            target="_blank"
            title="♬ original sound  - Mommy Applez"
            href="https://www.tiktok.com/music/original-sound-Mommy-Applez-7549857372341685009?refer=embed"
          >
            ♬ original sound - Mommy Applez
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@mommyapplez/video/7549857161166245127" />
    </InfluencerContainer>
  );
};

export default ApplezOrcine;
