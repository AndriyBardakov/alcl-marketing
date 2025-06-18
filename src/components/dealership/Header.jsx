import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {

  return (
    <section
      className="dealership-hero bg-primary text-white text-center py-5"
      style={{
        backgroundImage:
          "url(/images/source/orange_bg.png)",
        backgroundSize: "cover",
        padding: "5% 10%",
      }}
    >
      <div className="row">
        <div className="content-column col-sm-12 dealership-header">
          <h1 className="text-center text-white fw-bolder" style={{fontSize: "48px"}}>Dealership</h1>
        </div>
      </div>
    </section>
  );
}

export default Section3;