import logo from "./assets/Logo.jpg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import AppRoutes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/hooks/ScrollToTop";

function App() {
  return (
    <div className="bg-[#F6F2EA] text-neutral-700 font-dosis text-[20px] selection:bg-neutral-500 selection:text-neutral-200">
      <Header />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
