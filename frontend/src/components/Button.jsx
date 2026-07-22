import { IoIosArrowRoundForward } from "react-icons/io";

const ButtonWrapper = ({ label, onClick, type = "" }) => {
  return (
    <button className="text-sm capitalize group" onClick={onClick} type={type}>
      <h1 className="flex justify-center items-end truncate">
        {label}{" "}
        <IoIosArrowRoundForward className="text-xl group-hover:-rotate-45 duration-700 ease-in-out" />
      </h1>

      <div className="w-[10%] group-hover:w-[100%] border duration-500 ease-in-out" />
    </button>
  );
};

export default ButtonWrapper;
