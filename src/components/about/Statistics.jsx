import React from 'react';
import Funfact from './Funfact';

const Statistics = () => {

  return (
    <>
      <section
        className="bg-primary text-white text-center py-5"
        style={{
          backgroundImage: "url(/src/assets/images/5.png)",
          backgroundSize: "cover",
          padding: "",
        }}
      >
        <div className="auto-container">
          <div className="fun-fact-section p-0">
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 mx-auto">
                <div className="row">
                  <Funfact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Statistics;