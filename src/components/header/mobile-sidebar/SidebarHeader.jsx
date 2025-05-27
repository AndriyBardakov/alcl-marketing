
import { Link } from "react-router-dom";
import Logo from "public/images/source/logo.png";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <Link to="/">
        <img  src={Logo} width={50} alt="brand" />
      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
