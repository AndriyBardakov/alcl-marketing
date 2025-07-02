import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const JoanaRamos = () => {
  return (
    <InfluencerContainer
      name="Joana Ramos"
      src="/images/source/influencers/Joana_Ramos.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@mommyjoana_rph/video/7509328505856003346"
        data-video-id="7509328505856003346"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@mommyjoana_rph"
            href="https://www.tiktok.com/@mommyjoana_rph?refer=embed"
          >
            @mommyjoana_rph
          </a>{" "}
          Dahil craving ako for a barbeque with a kick of spicyness, I made my
          own version ft. Ranchero&#39;s Chili BBQ flavoring powder! Ang sarap
          promise! lalo na with your favorite drinks!  Try nyo narin 😉
          AVAILABLE ITO ONLINE AT SA INYONG PINAKAMALAPIT NA PALENGKE! Shop
          online here ⬇️ 🛒Shopee: www.shopee.ph&#47;alclmarketing 🛒Tiktok:
          www.tiktok.com&#47;@alclmarketing{" "}
          <a
            title="nakacheesemisskanaba"
            target="_blank"
            href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
          >
            #NakaCHEESEMISSkaNaBa
          </a>{" "}
             {" "}
          <a
            title="icheesemissmona"
            target="_blank"
            href="https://www.tiktok.com/tag/icheesemissmona?refer=embed"
          >
            #ICheesemissMONA
          </a>
             {" "}
          <a
            title="sarapnglasasarapngkita"
            target="_blank"
            href="https://www.tiktok.com/tag/sarapnglasasarapngkita?refer=embed"
          >
            #SarapNgLasaSarapNgKita
          </a>{" "}
          @alclmarketing{" "}
          <a
            target="_blank"
            title="♬ Upbeat Catchy Pop - FiniteMusicForge"
            href="https://www.tiktok.com/music/Upbeat-Catchy-Pop-7376227644303001626?refer=embed"
          >
            ♬ Upbeat Catchy Pop - FiniteMusicForge
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@mommyjoana_rph/video/7509328505856003346" />
    </InfluencerContainer>
  );
};

export default JoanaRamos;
