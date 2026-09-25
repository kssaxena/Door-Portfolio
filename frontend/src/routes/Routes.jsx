import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Hero = lazy(() => import("../pages/hero/page"));
const About = lazy(() => import("../pages/about/page"));
const Enquiry = lazy(() => import("../pages/enquiry/page"));
const Products = lazy(() => import("../pages/product/page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about/aarcane-doors" element={<About />} />
      <Route path="/enquiry/say-hello" element={<Enquiry />} />
      <Route path="/product/aarcane-doors" element={<Products />} />
    </Routes>
  );
};

export default AppRoutes;
