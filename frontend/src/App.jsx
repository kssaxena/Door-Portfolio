import logo from "./assets/Logo.jpg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import AppRoutes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#F6F2EA] text-neutral-700 font-dosis text-[20px]">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
