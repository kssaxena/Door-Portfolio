import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Hero = lazy(() => import("../pages/hero/page"));
const About = lazy(() => import("../pages/about/page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about/aarcane-doors" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
