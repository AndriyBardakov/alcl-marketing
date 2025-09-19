import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const CarwinAnnNavarro = () => {
  return (
    <InfluencerContainer
      name="Carwin Ann Navarro"
      src="/images/source/influencers/Carwin_Ann_Navarro.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@carwinaann.navarro/video/7532890235047316743"
        data-video-id="7532890235047316743"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@carwinaann.navarro"
            href="https://www.tiktok.com/@carwinaann.navarro?refer=embed"
          >
            @carwinaann.navarro
          </a>{" "}
          Approved na approved kay Ate Erelah ang Cheesemiss Cheese Powder. and
          kung nag iisip ka business, wag mo hahayaan na wala ka cheesemiss
          products. 🛒Tiktok: @alclmarketing{" "}
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
            target="_blank"
            title="♬ original sound  - The EC Momma"
            href="https://www.tiktok.com/music/original-sound-The-EC-Momma-7532890282451471121?refer=embed"
          >
            ♬ original sound - The EC Momma
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@carwinaann.navarro/video/7532890235047316743" />
    </InfluencerContainer>
  );
};

export default CarwinAnnNavarro;
