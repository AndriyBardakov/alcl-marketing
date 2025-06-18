import React from "react";
import Hero from "../../components/hero";
import Section1 from "../../components/home/section1";
import Section2 from "../../components/home/section2";
import Section3 from "../../components/home/section3";
import SectionProducts from "../../components/home/sectionProducts";
import VideoCarousel from "../../components/home/videoCarousel";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'ALCL Marketing',  
}

const Home = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Hero />
      <VideoCarousel />
      <Section2 />
      <Section1 />
      <Section3 />
      {/* <SectionProducts /> */}
      {/* <Section3 /> */}
    </>
  );
};

export default Home;
