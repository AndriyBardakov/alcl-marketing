import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const DeeKayeSanLuis = () => {
  return (
    <InfluencerContainer
      name="Dee Kaye San Luis"
      src="/images/source/influencers/Dee_Kaye_San_Luis.jpg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@mommyfoodee/video/7520501345179143431"
        data-video-id="7520501345179143431"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@mommyfoodee"
            href="https://www.tiktok.com/@mommyfoodee?refer=embed"
          >
            @mommyfoodee
          </a>{" "}
          Balik-eskwela na kaya challenge sa ating mga nanay ang mag-isip ng
          pambaon sa ating mga anak. Kaya ngayong araw ay may ibabahagi ako sa
          inyo na back-to-school baon idea. BBQ Fried Boneless Bangus
          @alclmarketing{" "}
          <a
            title="alclbacktoschool"
            target="_blank"
            href="https://www.tiktok.com/tag/alclbacktoschool?refer=embed"
          >
            #ALCLBackToSchool
          </a>{" "}
          <a
            title="nakacheesemisskanaba"
            target="_blank"
            href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
          >
            #NakaCHEESEMISSkaNaBa
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
            title="♬ original sound  - Dee Kaye San Luis"
            href="https://www.tiktok.com/music/original-sound-Dee-Kaye-San-Luis-7520501442046741249?refer=embed"
          >
            ♬ original sound - Dee Kaye San Luis
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@mommyfoodee/video/7520501345179143431" />
    </InfluencerContainer>
  );
};

export default DeeKayeSanLuis;
