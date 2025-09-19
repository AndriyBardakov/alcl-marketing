import React from "react";
import InfluencerContainer from "./influencerContainer";
import { style } from "./carouselUtils";
import LinkOverlay from "./linkOverlay";

const MayenComia = () => {
  return (
    <InfluencerContainer
      name="Mayen Comia"
      src="/images/source/influencers/Mayen_Comia.jpeg"
    >
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@yendelmundocomia/video/7511368719533214983"
        data-video-id="7511368719533214983"
        style={style}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@yendelmundocomia"
            href="https://www.tiktok.com/@yendelmundocomia?refer=embed"
          >
            @yendelmundocomia
          </a>{" "}
          🧅✨ Minsan, the best moments happen sa kusina! ✨🧅 Ang saya ng
          bonding namin while making this French Onion Dip! Simple lang, pero
          masarap ah! 😍 Perfect sa bread, crackers, or veggies, lalo na dahil
          naenhance ng Rancheros Sour Cream and Onion Powder yung flavor!
          Creamy, tangy, at siguradong maeenjoy ng buong fam! Gusto mong itry
          with your little kitchen helper? Get yours narin sa Official Stores
          nila online: 🛒 Shopee: www.shopee.ph&#47;alclmarketing 🛒 Tiktok:
          www.tiktok.com&#47;@alclmarketing{" "}
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
            title="♬ Lively and stylish background music with piano and synth(1581916) - K4u"
            href="https://www.tiktok.com/music/Lively-and-stylish-background-music-with-piano-and-synth-1581916-7426809813411842065?refer=embed"
          >
            ♬ Lively and stylish background music with piano and synth(1581916)
            - K4u
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <LinkOverlay src="https://www.tiktok.com/@yendelmundocomia/video/7511368719533214983" />
    </InfluencerContainer>
  );
};

export default MayenComia;
