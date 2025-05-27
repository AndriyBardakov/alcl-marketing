import React from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from "./publicRoutes";
import PageLayout from "../layouts";

//Layouts
// import VerticalLayout from "../Layouts/index";


const AllRoutes = () => {
    return (
      <React.Fragment>
        <Routes>
          <Route>
            {routes.map((route, idx) => (
              <Route
                path={route.path}
                // element={<VerticalLayout>{route.component}</VerticalLayout>}
                element={<PageLayout>{route.component}</PageLayout>}
                key={idx}
                exact={true}
              />
            ))}
          </Route>
        </Routes>
      </React.Fragment>
    );
};

export default AllRoutes;