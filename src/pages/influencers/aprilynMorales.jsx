import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const AprilynMorales = () => {
  return (
    <InfluencerContainer
      name="Aprilyn Morales"
      src="/images/source/influencers/Aprilyn_Morales.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@aprilynmorales15/video/7511195587971255559"
        data-video-id="7511195587971255559"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@aprilynmorales15"
            href="https://www.tiktok.com/@aprilynmorales15?refer=embed"
          >
            @aprilynmorales15
          </a>{" "}
          Level up ang ating simple fried chicken wings into Extra Smokey BBQ
          Chili Chicken Wings, na mas easy to preppared using Ranchero&#39;s
          Chili BBQ Flavoring Powder na mabibili sa pinakamalapit na Palengke!{" "}
          <a
            title="nakacheesemisskanaba"
            target="_blank"
            href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
          >
            #NakaCHEESEMISSkaNaBa
          </a>{" "}
          <a
            title="icheesemismona"
            target="_blank"
            href="https://www.tiktok.com/tag/icheesemismona?refer=embed"
          >
            #ICheesemisMONA
          </a>{" "}
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
            title="♬ original sound  - Aprilyn Morales"
            href="https://www.tiktok.com/music/original-sound-Aprilyn-Morales-7511195617096387344?refer=embed"
          >
            ♬ original sound - Aprilyn Morales
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@aprilynmorales15/video/7511195587971255559" />
    </InfluencerContainer>
  );
};

export default AprilynMorales;
