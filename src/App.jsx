import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import { Provider } from "react-redux";
// import { store } from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/index";
import store from "./redux/store";

if (typeof window !== "undefined") {
  import("bootstrap");
}
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
