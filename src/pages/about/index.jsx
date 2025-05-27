import MetaComponent from "@/components/common/MetaComponent";
import About from "@/components/about";

const metadata = {
  title: 'About || ALCL Marketing',  
}



const AboutPage = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <About />
    </>
  );
};

export default AboutPage
