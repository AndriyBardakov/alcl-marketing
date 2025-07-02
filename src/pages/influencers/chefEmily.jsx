import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const ChefEmily = () => {
  return (
    <InfluencerContainer
      name="Chef Emily Peralta"
      src="/images/source/influencers/Chef_Emily.png"
    >
      <div
        style={{
          position: "relative",
          width: "325px",
          height: "600px",
          margin: "0 auto",
        }}
      >
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@chefemilyp/video/7495282158756449544"
          data-video-id="7495282158756449544"
          style={style}
        >
          {" "}
          <section>
            {" "}
            <a
              target="_blank"
              title="@chefemilyp"
              href="https://www.tiktok.com/@chefemilyp?refer=embed"
            >
              @chefemilyp
            </a>{" "}
            Just add hot water!!! Ang dali nalang gumawa ng meryenda para sa mga
            bata dahil sa @ALCL Marketing, OPC cheesemiss instant cheese sauce
            powder mix! Ngayong holyweek right time to bond with kids kaya
            gumawa ako ng all veggie cheesey nachos using the instant cheese
            sauce by alcl grabe ang daling gamitin add hot water lang may sauce
            kna! Ideal din eto sa mga gusto mag negosyo at magkarun munting
            pagkakakitaan. Napakadali nalng gumawa ng cheesey burgers and
            fries!! Ang galing db?? Subukan nu na! Nasa link ang basket!{" "}
            <a
              title="signaturebychefemily"
              target="_blank"
              href="https://www.tiktok.com/tag/signaturebychefemily?refer=embed"
            >
              #signaturebychefemily
            </a>{" "}
            <a
              title="masterclasswithchefemily"
              target="_blank"
              href="https://www.tiktok.com/tag/masterclasswithchefemily?refer=embed"
            >
              #masterclasswithchefemily
            </a>{" "}
            <a
              title="iloveit"
              target="_blank"
              href="https://www.tiktok.com/tag/iloveit?refer=embed"
            >
              #iloveit
            </a>{" "}
            <a
              title="cabnpbakers"
              target="_blank"
              href="https://www.tiktok.com/tag/cabnpbakers?refer=embed"
            >
              #cabnpbakers
            </a>{" "}
            <a
              title="emf"
              target="_blank"
              href="https://www.tiktok.com/tag/emf?refer=embed"
            >
              #EMF
            </a>{" "}
            <a
              title="sipagsanegosyo"
              target="_blank"
              href="https://www.tiktok.com/tag/sipagsanegosyo?refer=embed"
            >
              #sipagsanegosyo
            </a>{" "}
            <a
              title="cheesemisspowder"
              target="_blank"
              href="https://www.tiktok.com/tag/cheesemisspowder?refer=embed"
            >
              #cheesemisspowder
            </a>{" "}
            <a
              title="ofw"
              target="_blank"
              href="https://www.tiktok.com/tag/ofw?refer=embed"
            >
              #ofw
            </a>{" "}
            <a
              target="_blank"
              title="♬ original sound  - Chef EmilyP"
              href="https://www.tiktok.com/music/original-sound-Chef-EmilyP-7495282248049117968?refer=embed"
            >
              ♬ original sound - Chef EmilyP
            </a>{" "}
          </section>{" "}
        </blockquote>{" "}
        <LinkOverlay src="https://www.tiktok.com/@chefemilyp/video/7495282158756449544" />
      </div>
    </InfluencerContainer>
  );
};

export default ChefEmily;
