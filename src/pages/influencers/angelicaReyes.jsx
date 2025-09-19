import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style, carouselConfig } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";
import Slider from "react-slick";

const AngelicaReyes = () => {
  return (
    <InfluencerContainer
      name="Angelica Reyes"
      src="/images/source/influencers/Angelica_Reyes.jpg"
    >
      <Slider {...carouselConfig}>
        <div>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@reyes_gel/video/7521902578813259016"
            data-video-id="7521902578813259016"
            style={style}
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                title="@reyes_gel"
                href="https://www.tiktok.com/@reyes_gel?refer=embed"
              >
                @reyes_gel
              </a>{" "}
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
                title="alclmarketing"
                target="_blank"
                href="https://www.tiktok.com/tag/alclmarketing?refer=embed"
              >
                #alclmarketing
              </a>{" "}
              <a
                title="rancheros"
                target="_blank"
                href="https://www.tiktok.com/tag/rancheros?refer=embed"
              >
                #rancheros
              </a>{" "}
              <a
                target="_blank"
                title="♬ original sound - Jhino Bilbao - JHINO OFFICIAL"
                href="https://www.tiktok.com/music/original-sound-Jhino-Bilbao-7307904797062187781?refer=embed"
              >
                ♬ original sound - Jhino Bilbao - JHINO OFFICIAL
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
          <LinkOverlay src="https://www.tiktok.com/@reyes_gel/video/7521902578813259016" />
        </div>
        <div>
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@reyes_gel/video/7551668216557341959"
            data-video-id="7551668216557341959"
            style={style}
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                title="@reyes_gel"
                href="https://www.tiktok.com/@reyes_gel?refer=embed"
              >
                @reyes_gel
              </a>{" "}
              <a
                title="SarapNgLasaSarapNgKita"
                target="_blank"
                href="https://www.tiktok.com/tag/SarapNgLasaSarapNgKita?refer=embed"
              >
                #SarapNgLasaSarapNgKita
              </a>{" "}
              <a
                title="nakacheesemisskanaba"
                target="_blank"
                href="https://www.tiktok.com/tag/nakacheesemisskanaba?refer=embed"
              >
                #nakacheesemisskanaba
              </a>{" "}
              Try nyo na ang ALKALIZED COCOA POWDER ng @ALCL Marketing, OPC
              @mhacel{" "}
              <a
                target="_blank"
                title="♬ original sound  - tita angel 🈳"
                href="https://www.tiktok.com/music/original-sound-tita-angel-🈳-7551668516467116816?refer=embed"
              >
                ♬ original sound - tita angel 🈳
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
          <LinkOverlay src="https://www.tiktok.com/@reyes_gel/video/7551668216557341959" />
        </div>
      </Slider>
    </InfluencerContainer>
  );
};

export default AngelicaReyes;
