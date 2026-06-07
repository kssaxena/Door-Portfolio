import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const Hero = lazy(() => import("../pages/hero/page"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default AppRoutes;
