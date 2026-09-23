import { useEffect, useState } from "react";
import { headerNavigation } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import TransitionLink from "./hooks/TransitionHook";

const Header = () => {
  const [clicked, onClicked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      // Show button when user reaches the bottom of the page
      if (scrollPosition >= pageHeight - 10) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial position as well
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full md:px-20 px-5 py-4 text-sm border-b-[0.2px] border-neutral-400">
      {/* Logo */}
      <TransitionLink
        to={"/"}
        className="capitalize text-2xl font-instrumentRegular"
      >
        aarcane{" "}
        <span className="font-instrumentItalic text-base capitalize">
          internaltional
        </span>
      </TransitionLink>
      <div>
        <h1 className="hidden lg:flex justify-center items-center gap-10">
          {headerNavigation.map((i, index) => (
            <TransitionLink to={i.url} key={index}>
              {i.label}
            </TransitionLink>
          ))}
        </h1>
      </div>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            clicked ? onClicked(false) : onClicked(true);
          }}
        >
          <div
            className={`w-5 border ${
              clicked
                ? "rotate-45 translate-x-0.5 duration-500 ease-in-out"
                : ""
            }`}
          />

          <div
            className={`w-5 border ${
              clicked
                ? "-rotate-45 -translate-y-1.5 duration-500 ease-in-out"
                : ""
            }`}
          />
        </div>
      </div>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-10 right-10 bg-[#6A4F3B] p-2 rounded-xl z-50"
        >
          <IoIosArrowRoundUp className="text-2xl text-white" />
        </button>
      )}
    </div>
  );
};

export default Header;
