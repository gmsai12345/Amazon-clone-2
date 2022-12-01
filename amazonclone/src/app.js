import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home/Home";
import Navbar1 from "./Navbar1/Navbar1";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Navbar1 />
    <Home/>
    <Footer/>
  </StrictMode>
);
