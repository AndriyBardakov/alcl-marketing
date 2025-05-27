


import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact = () => {
  const [focus, setFocus] = useState(false);

  const counterUpContent = [
    {
      id: 1,
      startCount: "0",
      endCount: "15",
      endPointText: "",
      meta: "Years of experience",
      animationDelay: "0",
    },
    {
      id: 2,
      startCount: "0",
      endCount: "300",
      endPointText: "+",
      meta: "Partners",
      animationDelay: "100",
    },
  ];

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="counter-column col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="count-box text-white">
            <span className="count-text ">
              <CountUp
                start={focus ? val.startCount : null}
                end={val.endCount}
                duration={2}
              >
                {({ countUpRef }) => (
                  <InView
                    as="span"
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </InView>
                )}
              </CountUp>
            </span>
            {val.endPointText}
          </div>
          <h4 className="counter-title text-white">{val.meta}</h4>
        </div>
      ))}
    </>
  );
};

export default Funfact;
