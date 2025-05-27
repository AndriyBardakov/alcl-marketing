import { Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Contact from "../pages/contact";
import Dealership from "../pages/dealership";
import About from "../pages/about";

export const routes = [
  { path: "/home", component: <Home /> },
  { path: "/contact", component: <Contact /> },
  { path: "/dealership", component: <Dealership /> },
  { path: "/about", component: <About /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
  { path: "*", component: <Navigate to="/home" /> },
];
