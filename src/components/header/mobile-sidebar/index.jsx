import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { mobileMenuData } from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleNavigate = (menuItem) => {
    if (menuItem?.external) {
      window.open(menuItem.routePath, "_blank", "rel=noopener noreferrer");
      return;
    }
    navigate(menuItem.routePath);
  };

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      <Sidebar>
        <Menu>
          {mobileMenuData.map((item) =>
            item.items ? (
              <SubMenu
                className={
                  isActiveParentChaild(item.items, pathname)
                    ? "menu-active"
                    : ""
                }
                label={item.label}
                key={item.id}
              >
                {item.items.map((menuItem, i) => (
                  <MenuItem
                    onClick={() => handleNavigate(menuItem)}
                    className={
                      isActiveLink(menuItem.routePath, pathname)
                        ? "menu-active-link"
                        : ""
                    }
                    key={i}
                    // routerLink={<Link to={menuItem.routePath} />}
                  >
                    {menuItem.name}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                onClick={() => handleNavigate(item)}
                className={
                  isActiveLink(item.routePath, pathname)
                    ? "menu-active-link"
                    : ""
                }
                key={item.id}
                // routerLink={<Link to={item.routePath} />}
              >
                {item.label}
              </MenuItem>
            )
          )}
          {/* ))} */}
        </Menu>
      </Sidebar>

      {/* <SidebarFooter /> */}
    </div>
  );
};

export default Index;
