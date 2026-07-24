import { MdDescription } from "react-icons/md";
import ButtonWrapper from "../Button";
import { mappingData } from "../../constants/constants";

const ProductCard = ({ data = mappingData }) => {
  return data.map((d, index) => (
    <div
      key={index}
      className={`h-fit lg:h-100 md:w-[80vw] w-full border-[0.2px] border-neutral-300 rounded overflow-hidden flex flex-col justify-center items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
    >
      <div className="w-full md:w-[50%] h-full">
        <img src={d.image} className="object-fill h-full w-full" />
      </div>
      <div className="w-full md:w-[50%] h-full md:px-10 flex flex-col justify-center items-start">
        <div className="h-[90%] lg:px-10 flex flex-col justify-between items-start gap-5 md:gap-0 py-10 px-2">
          <p className="text-sm">
            <span>0{index + 1} / </span>
            {d.heading}
          </p>
          <h1 className="text-[26px] md:text-[40px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
            {d.quotation}
          </h1>
          <p className="text-[18px]">{d.description}</p>
          <div className="border-[0.5px] w-10" />
          <ButtonWrapper label={"Explore Collection"} />
        </div>
      </div>
    </div>
  ));
};

const MaterialStudy = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-5 md:px-40 py-20 gap-5 relative">
      <p className="absolute top-20 left-20 text-xs uppercase ">
        MATERIAL STUDY
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start md:gap-60 py-10">
        <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight lg::w-[60%] w-full">
          Materials chosen for{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">strength</span>{" "}
          crafted for generations.
        </h1>
        <p className="w-[90%] lg:w-[40%] text-left lg:text-right">
          Engineered steel, premium finishes, advanced coatings, and precision
          manufacturing combine to create doors that resist corrosion, termites,
          moisture, and daily wear while maintaining exceptional beauty.{" "}
        </p>
      </div>
      <ProductCard />
    </div>
  );
};

export default MaterialStudy;
