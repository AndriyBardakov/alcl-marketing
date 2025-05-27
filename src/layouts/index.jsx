
import Footer from "../components/footer/common-footer";
// import Funfact from "../fun-fact-counter/Funfact";
import Header from "../components/header";
import MobileMenu from "../components/header/MobileMenu";


const PageLayout = (props) => {

  return (
    <div id="layout-wrapper">
      <Header />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <div
        className="main-content"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
