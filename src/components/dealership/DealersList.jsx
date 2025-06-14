import React, { useMemo } from "react";
import dealersData from "../../data/mock/dealers.json";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";

const DealersList = () => {
  const regions = useMemo(() => {
    return dealersData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }, []);
  
  return (
    <section
      className="dealership-list"
      data-aos="fade-down"
      style={{ padding: "5% 10% 2.5% 10%" }}
    >
      <div
        className="dealers-list mb-4 fs-6 border rounded p-3"
        style={{ backgroundColor: "#F5F7FC" }}
      >
        <h2 className="text-center mb-4 text-muted">Dealers</h2>
        <div className="row">
          <ul className="accordion-box">
            <div className="accordion" id="dealersAccordion" style={{padding: "0 10%"}}>
              {regions.map((region, index) => (
                <div
                  className="accordion-item accordion block active-block"
                  key={index}
                >
                  <h2 className="accordion-header">
                    <button
                      className="acc-btn accordion-button "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${region.name
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      aria-expanded="true"
                    >
                      {region.name}
                    </button>
                  </h2>
                  <div
                    id={region.name.replace(/\s+/g, "-").toLowerCase()}
                    className={classnames("accordion-collapse collapse")}
                    aria-labelledby="headingOne"
                    data-bs-parent="#dealersAccordion"
                  >
                    <div className="accordion-body">
                      <div className="content">
                        {region.dealers.map((dealer, dealerIndex) => (
                          <div
                            className="company-block-four col-sm-12"
                            key={dealerIndex}
                          >
                            <div className="inner-box">
                              <div className="d-flex h-100">
                                <div className="content-inner d-flex flex-column justify-content-between">
                                  <h6 className="text-left mb-2">
                                    {dealer.name}
                                  </h6>
                                  <div className="d-flex flex-row align-items-baseline gap-2 text-left">
                                    {/* <label>Address: </label> */}
                                    <Link
                                      to={dealer.mapsLink}
                                      target="_blank"
                                      className="display-flex align-items-baseline text-decoration-none"
                                    >
                                      <FaMapMarkerAlt className="me-2 text-muted" />
                                      <span>{dealer.address}</span>
                                    </Link>
                                  </div>
                                  <div className="d-flex flex-row align-items-baseline gap-2 text-left">
                                    {/* <label className="">Phone #: </label> */}
                                    <p>
                                      {dealer.phoneNumbers.map((number) => {
                                        return (
                                          <span key={number}>
                                            <a
                                              href={`tel:${number}`}
                                              className="display-flex align-items-baseline text-decoration-none"
                                            >
                                              <RiPhoneFill className="me-2 text-muted" />
                                              <span>{number}</span>
                                            </a>
                                            <br />
                                          </span>
                                        );
                                      })}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DealersList;
