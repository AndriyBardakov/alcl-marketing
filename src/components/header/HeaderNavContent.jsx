

import { Link } from "react-router-dom";
import {
  shopNowItems,
  productsItems,
  videoItems,
  companyMenuItems
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
                  <Link to={item.routePath} target="_blank">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`${
              isActiveLink("/products", pathname) ? "current" : ""
            } dropdown`}
          >
            <Link to="/products">Products</Link>
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
              isActiveParentChaild(companyMenuItems, pathname) ||
              isActiveParentChaild(videoItems[0].items, pathname)
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Company</span>
            <ul>
              {companyMenuItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath}>
                    {item.name}
                  </Link>
                </li>
              ))}
              {videoItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(videoItems[0].items, pathname)
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath} target="_blank">
                          {menu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
