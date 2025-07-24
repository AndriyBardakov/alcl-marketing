import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Dealership from "../pages/dealership";
import About from "../pages/about";
import Products from "../pages/products";
import ChefEmily from "@/pages/influencers/chefEmily";
import JosephVerallo from "@/pages/influencers/josephVerallo";
import ChefGerickManalo from "@/pages/influencers/chefGerickManalo";
import SofiaCartie from "@/pages/influencers/sofiaCartie";
import KimBulan from "@/pages/influencers/kimBulan";
import Jhunpig from "@/pages/influencers/jhunpig";
import HelloEatsNani from "@/pages/influencers/helloEatsNani";
import KristineCastillo from "@/pages/influencers/kristineCastillo";
import NicaEstuista from "@/pages/influencers/nicaEstuista";
import JoanaRamos from "@/pages/influencers/joanaRamos";
import ChefLhenDeCastro from "@/pages/influencers/chefLhenDeCastro";
import MamaJasmin from "@/pages/influencers/mamaJasmin";

export const routes = [
  { path: "/home", component: <Home /> },
  { path: "/contact", component: <Contact /> },
  { path: "/dealership", component: <Dealership /> },
  { path: "/about", component: <About /> },
  { path: "/products", component: <Products /> },
  { path: "/influencers/chef-emily-peralta", component: <ChefEmily /> },
  { path: "/influencers/joseph-verallo", component: <JosephVerallo /> },
  { path: "/influencers/chef-gerick-manalo", component: <ChefGerickManalo /> },
  { path: "/influencers/sophia-cartie", component: <SofiaCartie /> },
  { path: "/influencers/kim-bulan", component: <KimBulan /> },
  { path: "/influencers/jhunpig", component: <Jhunpig /> },
  { path: "/influencers/hello-eats-nani", component: <HelloEatsNani /> },
  { path: "/influencers/kristine-castillo", component: <KristineCastillo /> },
  { path: "/influencers/nika-estuista", component: <NicaEstuista /> },
  { path: "/influencers/joana-ramos", component: <JoanaRamos /> },
  { path: "/influencers/chef-lhen-de-castro", component: <ChefLhenDeCastro /> },
  { path: "/influencers/mama-jasmin", component: <MamaJasmin /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/home" />,
  },
  { path: "/influencers", component: <Navigate to="/influencers/chef-emily" /> },
  { path: "*", component: <Navigate to="/home" /> },
];
