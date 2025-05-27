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
        minHeight: "450px",
      }}
    >
      <div className="row">
        <div className="content-column col-sm-12 dealership-header">
          <h1 className="text-center text-white fw-bold">About</h1>
        </div>
      </div>
    </section>
  );
}

export default Section3;