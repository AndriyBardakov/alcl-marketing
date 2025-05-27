

import { Link } from "react-router-dom";
import {
  shopNowItems,
  productsItems,
  videoItems,
} from "@/data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useLocation } from "react-router-dom";
const HeaderNavContent = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          <li
            className={`${
              isActiveLink("/home", pathname) ? "current" : ""
            } dropdown`}
          >
             <Link to="/home">Home</Link>
          </li>

          <li
            className={`${
              isActiveParent(shopNowItems, pathname) ? "current" : ""
            } dropdown`}
          >
            <span>Shop Now</span>
            <ul>
              {shopNowItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath} target="_blank">{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`${
              isActiveParent(shopNowItems, pathname) ? "current" : ""
            } dropdown`}
          >
            <span>Products</span>
            <ul>
              {productsItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`${
              isActiveLink("/dealership", pathname) ? "current" : ""
            } dropdown`}
          >
             <Link to="/dealership">Dealership</Link>
          </li>

          <li
            className={`${
              isActiveLink("/about", pathname) ? "current" : ""
            } dropdown`}
          >
             <Link to="/about">About</Link>
          </li>

          <li
            className={`${
              isActiveParent(shopNowItems, pathname) ? "current" : ""
            } dropdown`}
          >
            <span>Videos</span>
            <ul>
              {videoItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath} target="_blank">{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`${
              isActiveLink("/contact", pathname) ? "current" : ""
            } dropdown`}
          >
             <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
