import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {

  return (
    <section
      className="bg-primary text-white text-center py-5"
      style={{
        backgroundImage:
          "url(https://doxo.com.ph/wp-content/uploads/2020/01/Dealer.png)",
        backgroundSize: "cover",
        padding: "5% 10%",
      }}
    >
      <div className="row">
        <div className="content-column col-lg-6 col-md-12 col-sm-12">
          <div className="inner-column" data-aos="zoom-in">
            <div className="text text-white text-left fs-5 fw-bold">
              Success story: Milk Tea Business with inJoy
            </div>
          </div>
          <div className="inner-column " data-aos="fade-up">
            <div className="sec-title">
              <div className="text text-white text-left fs-5">
                “Kung hindi ninyo susubukan, hindi ninyo malalaman… Talagang
                napakaganda ng product ng inJoy, all in one! Napadali ang
                pagtitimpla naming ng milk tea. Nakakatulong talaga sa mga
                gustong magnegosyo kahit walang puhunan na ganon kalaki. Kahit
                sa maliit na halaga, kaya mong magsimula ng negosyo!”
              </div>
            </div>
          </div>
        </div>

        <div className="image-column col-lg-6 col-md-12 col-sm-12">
          <figure className="video ratio ratio-16x9" data-aos="flip-up">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zC4qhYNfT4s?si=emjW7kaQgfLYbBRx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Section3;