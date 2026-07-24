import { useState } from "react";
import { headerNavigation } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [clicked, onClicked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center w-full md:px-20 px-5 py-4 text-sm  border-b-[0.2px] border-neutral-400">
      <button
        onClick={() => navigate("/")}
        className="capitalize text-2xl font-instrumentRegular"
      >
        aarcane{" "}
        <span className="font-instrumentItalic text-base capitalize">
          internaltional
        </span>
      </button>
      <div>
        <h1 className="hidden lg:flex justify-center items-center gap-10">
          {headerNavigation.map((i, index) => (
            <a href={i.url} key={index}>
              {i.label}
            </a>
          ))}
        </h1>
      </div>
      <div className="block lg:hidden">
        <div
          className="flex flex-col gap-1"
          onClick={() => {
            clicked ? onClicked(false) : onClicked(true);
          }}
        >
          <div
            className={`w-5 border ${clicked ? "rotate-45 translate-x-0.5 duration-500 ease-in-out" : ""}`}
          />
          <div
            className={`w-5 border ${clicked ? "-rotate-45 -translate-y-1.5 duration-500 ease-in-out" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
