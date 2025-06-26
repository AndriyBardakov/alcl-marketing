import React from "react";
import Hero from "../../components/hero";
import Section1 from "../../components/home/section1";
import Section2 from "../../components/home/section2";
import Section3 from "../../components/home/section3";
import Section4 from "../../components/home/section4";
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
      
      <VideoCarousel />
      <Hero />
      <Section2 />
      <Section1 />
      {/* <Section3 />
      <Section4 /> */}
    </>
  );
};

export default Home;
