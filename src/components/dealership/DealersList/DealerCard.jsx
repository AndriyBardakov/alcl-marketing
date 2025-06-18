import classnames from "classnames";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";

const DealerCard = ({ dealer }) => {
  return (
    <div className="company-block-four col-sm-6">
      <div className="inner-box">
        <div className="d-flex h-100">
          <div className="content-inner d-flex flex-column justify-content-between">
            <h6 className="text-left mb-2">{dealer.name}</h6>
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
  );
}

export default DealerCard;