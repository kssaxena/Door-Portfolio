import { headerNavigation } from "../constants/constants";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-20 py-4 text-sm  border-b-[0.2px] border-neutral-400">
      <h1 className="capitalize text-2xl font-instrumentRegular">
        aarcane{" "}
        <span className="font-instrumentItalic text-base capitalize">
          internaltional
        </span>
      </h1>
      <div>
        <h1 className="flex justify-center items-center gap-10">
          {headerNavigation.map((i, index) => (
            <a key={index}>{i.label}</a>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Header;
