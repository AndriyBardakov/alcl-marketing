import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const MamaJasmin = () => {
  return (
    <InfluencerContainer
      name="Mama Jasmin"
      src="/images/source/influencers/Mama_Jasmin.jpeg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@mama_justmine/video/7530151311262764296"
        data-video-id="7530151311262764296"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@mama_justmine"
            href="https://www.tiktok.com/@mama_justmine?refer=embed"
          >
            @mama_justmine
          </a>{" "}
          Another Baon &#47; Snacks Idea dahil mahilig tayo sa Cheesemiss o
          ibang Word yan 😂 kung mahilig ka sa Cheese itry mo na rin to ang easy
          lang nito. You Can Order Online At meron din sa inyong pinaka malapit
          na palengke Follow nyo na rin ang @alclmarketing{" "}
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
            title="♬ Snack Time - Lots of rooms"
            href="https://www.tiktok.com/music/Snack-Time-7439555741756082193?refer=embed"
          >
            ♬ Snack Time - Lots of rooms
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@mama_justmine/video/7530151311262764296" />
    </InfluencerContainer>
  );
};

export default MamaJasmin;
