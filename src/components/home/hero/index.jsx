// import SearchForm from "../../common/job-search/SearchForm";
// import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    <section
      className="text-white text-center about-section-three"
      // style={{
      //   padding: "2.5% 10% 2.5% 10%",
      // }}
    >
      <div className="auto-container">
        <div className="text-box">
          <div className="youtube-container d-flex flex-column justify-content-center align-items-center h-100">
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
              The unsung hero of the Philippine flavoring industry, one of the
              top in both B2B and B2C markets with its accessible and affordable
              flavoring options.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
