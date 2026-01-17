import { Navigate } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Dealership from "../pages/dealership";
import About from "../pages/about";
import Products from "../pages/products";
import ChefEmily from "@/pages/influencers/chefEmily";
import JosephVerallo from "@/pages/influencers/josephVerallo";
import ChefGerickManalo from "@/pages/influencers/chefGerickManalo";
import SophiaCartie from "@/pages/influencers/SophiaCartie";
import KimBulan from "@/pages/influencers/kimBulan";
import Jhunpig from "@/pages/influencers/jhunpig";
import HelloEatsNani from "@/pages/influencers/helloEatsNani";
import KristineCastillo from "@/pages/influencers/kristineCastillo";
import NicaEstuista from "@/pages/influencers/nicaEstuista";
import JoanaRamos from "@/pages/influencers/joanaRamos";
import ChefLhenDeCastro from "@/pages/influencers/chefLhenDeCastro";
import MamaJasmin from "@/pages/influencers/mamaJasmin";
import ElaineMarieBasmayor from "@/pages/influencers/elaineMarieBasmayor";
import MicaEllaValdez from "@/pages/influencers/micaEllaValdez";
import CarwinAnnNavarro from "@/pages/influencers/carwinAnnNavarro";
import GoodCheats from "@/pages/influencers/goodCheats";
import AngelicaReyes from "@/pages/influencers/angelicaReyes";
import MayenComia from "@/pages/influencers/mayenComia";
import AprilynMorales from "@/pages/influencers/aprilynMorales";
import DeeKayeSanLuis from "@/pages/influencers/deeKayeSanLuis";
import JesaLinatoc from "@/pages/influencers/jesaLinatoc";
import LorendaRamosFailano from "@/pages/influencers/lorendaRamosFailano";
import GlaissaJoyAlbelar from "@/pages/influencers/glaissaJoyAlbelar";
import ApplezOrcine from "@/pages/influencers/applezOrcine";
import CaseyGuadalupe from "@/pages/influencers/caseyGuadalupe";

export const routes = [
  { path: "/home", component: <Home /> },
  { path: "/contact", component: <Contact /> },
  { path: "/dealership", component: <Dealership /> },
  { path: "/about", component: <About /> },
  { path: "/products", component: <Products /> },
  { path: "/influencers/chef-emily-peralta", component: <ChefEmily /> },
  { path: "/influencers/joseph-verallo", component: <JosephVerallo /> },
  { path: "/influencers/chef-gerick-manalo", component: <ChefGerickManalo /> },
  { path: "/influencers/sophia-cartie", component: <SophiaCartie /> },
  { path: "/influencers/kim-bulan", component: <KimBulan /> },
  { path: "/influencers/jhunpig", component: <Jhunpig /> },
  { path: "/influencers/hello-eats-nani", component: <HelloEatsNani /> },
  { path: "/influencers/kristine-castillo", component: <KristineCastillo /> },
  { path: "/influencers/nika-estuista", component: <NicaEstuista /> },
  { path: "/influencers/joana-ramos", component: <JoanaRamos /> },
  { path: "/influencers/chef-lhen-de-castro", component: <ChefLhenDeCastro /> },
  { path: "/influencers/mama-jasmin", component: <MamaJasmin /> },
  { path: "/influencers/elaine-marie-basmayor", component: <ElaineMarieBasmayor /> },
  { path: "/influencers/mica-ella-valdez", component: <MicaEllaValdez /> },
  { path: "/influencers/carwin-ann-navarro", component: <CarwinAnnNavarro /> },
  { path: "/influencers/good-cheats", component: <GoodCheats /> },
  { path: "/influencers/angelica-reyes", component: <AngelicaReyes /> },
  { path: "/influencers/mayen-comia", component: <MayenComia /> },
  { path: "/influencers/aprilyn-morales", component: <AprilynMorales /> },
  { path: "/influencers/dee-kaye-san-luis", component: <DeeKayeSanLuis /> },
  { path: "/influencers/jesa-linatoc", component: <JesaLinatoc /> },
  { path: "/influencers/lorenda-ramos-failano", component: <LorendaRamosFailano /> },
  { path: "/influencers/glaissa-joy-albelar", component: <GlaissaJoyAlbelar /> },
  { path: "/influencers/applez-orcine", component: <ApplezOrcine /> },
  { path: "/influencers/casey-guadalupe", component: <CaseyGuadalupe /> },

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
