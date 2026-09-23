import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Enquiry from "../pages/enquiry/page";

const Hero = lazy(() => import("../pages/hero/page"));
const About = lazy(() => import("../pages/about/page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about/aarcane-doors" element={<About />} />
      <Route path="/enquiry/say-hello" element={<Enquiry />} />
    </Routes>
  );
};

export default AppRoutes;
