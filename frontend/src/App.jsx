import logo from "./assets/Logo.jpg";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function App() {
  return (
    <div className="font-light flex flex-col justify-center items-center w-full h-screen bg-[#F2F1EF] gap-5">
      <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl">
        <img src={logo} className="w-full h-full object-cover " />
      </div>
      <h1 class="text-3xl font-semibold uppercase tracking-widest">
        welcome to aarcane doors
      </h1>
      <p>We apologize for the inconvenience. This site in under maintenance.</p>
      <div className="flex justify-center items-center gap-10">
        <a
          href="tel:+916204365007"
          target="blank"
          className="flex justify-center items-center "
        >
          <IoCall />
          Contact
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=aarcaneinternational@gmail.com"
          target="blank"
          className="flex justify-center items-center "
        >
          <IoMdMail />
          Mail
        </a>
      </div>
    </div>
  );
}

export default App;
