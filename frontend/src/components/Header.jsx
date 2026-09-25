import { useEffect, useState } from "react";
import { headerNavigation } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import TransitionLink from "./hooks/TransitionHook";
import { IoClose, IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [clicked, onClicked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hamburger, setShowHamburger] = useState(false);

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

      {/* hamburger  */}
      <button
        onClick={() => setShowHamburger(true)}
        className="block lg:hidden"
      >
        <IoMenu className="text-2xl" />
      </button>
      <AnimatePresence>
        {hamburger && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-[80vw] h-screen bg-[#26211C] z-50 text-[#F6F2EA] flex justify-center items-center text-2xl"
          >
            <button
              onClick={() => setShowHamburger(false)}
              className="absolute top-10 left-10"
            >
              <IoClose />
            </button>
            <h1
              className="flex flex-col justify-center items-center gap-10"
              onClick={() => setShowHamburger(false)}
            >
              {headerNavigation.map((i, index) => (
                <TransitionLink to={i.url} key={index}>
                  {i.label}
                </TransitionLink>
              ))}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

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
