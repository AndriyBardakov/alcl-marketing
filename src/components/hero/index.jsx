// import SearchForm from "../../common/job-search/SearchForm";
// import PopularSearch from "../PopularSearch";

const index = () => {
  return (
    // <section className="banner-section">
    //   <div className="auto-container" style={{backgroundImage: "url(https://doxo.com.ph/wp-content/uploads/2020/01/Products-1.png)", height: "100%"}}>

    //   </div>
    // </section>
    <section
      className="alcl-hero bg-primary text-white text-center py-5"
      style={{
        backgroundImage:
          "url(/images/source/5.png)",
        backgroundSize: "cover",
        // marginTop: "150px",
        // height: "300px",
      }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="mb-3">Mga Ka-Cheesemiss!</h1>
        <h2>Welcome To The OFFICIAL ALCL MARKETING WEBSITE</h2>
        {/* <p className="lead text-white">Your trusted partner in digital solutions</p>
        <a href="#services" className="btn btn-light btn-lg">
          Explore Services
        </a> */}
      </div>
    </section>
  );
};

export default index;
