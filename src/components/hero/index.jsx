// import SearchForm from "../../common/job-search/SearchForm";
// import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    // <section className="banner-section">
    //   <div className="auto-container" style={{backgroundImage: "url(https://doxo.com.ph/wp-content/uploads/2020/01/Products-1.png)", height: "100%"}}>

    //   </div>
    // </section>
    <section
      className="text-white text-center"
      style={{
        padding: "2.5% 10% 2.5% 10%",
      }}
    >
      <div className="youtube-container container d-flex flex-column justify-content-center align-items-center h-100">
        {/* <h1 className="mb-3 fw-bolder" style={{fontSize: "48px"}}>Mga Ka-Cheesemiss!</h1>
        <h2 className="fw-bolder" style={{fontSize: "40px"}}>Welcome To The OFFICIAL ALCL MARKETING WEBSITE</h2> */}
        {/* <p className="lead text-white">Your trusted partner in digital solutions</p>
        <a href="#services" className="btn btn-light btn-lg">
          Explore Services
        </a> */}
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/ptL9q-lU_cg?playlist=ptL9q-lU_cg&autoplay=1&loop=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="mt-4 text-dark text-start">
          The unsung hero of the Philippine flavoring industry, one of the top
          in both B2B and B2C markets with its accessible and affordable
          flavoring options.
        </h3>
      </div>
    </section>
  );
};

export default index;
