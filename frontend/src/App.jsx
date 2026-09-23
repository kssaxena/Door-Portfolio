import logo from "./assets/Logo.jpg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import AppRoutes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";
import { createContext, useState } from "react";
import PageTransition from "./components/ui/loader";
import { useLocation, useNavigate } from "react-router-dom";

export const TransitionContext = createContext(null);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const transitionTo = (path) => {
    if (path === location.pathname) return;

    setShowOverlay(true);
    setIsExiting(false);

    // Animate IN
    setTimeout(() => {
      navigate(path);
    }, 700);

    // Animate OUT
    setTimeout(() => {
      setIsExiting(true);
    }, 700);

    // Cleanup
    setTimeout(() => {
      setShowOverlay(false);
    }, 1400);
  };

  return (
    <TransitionContext.Provider value={transitionTo}>
      <div className="bg-[#F6F2EA] text-neutral-700 font-dosis text-[20px] selection:bg-neutral-500 selection:text-neutral-200">
        <Header />
        <ScrollToTop />
        {showOverlay && <PageTransition isExiting={isExiting} />}
        <AppRoutes />
        <Footer />
      </div>
    </TransitionContext.Provider>
  );
}

export default App;
