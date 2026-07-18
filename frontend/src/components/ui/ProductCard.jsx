import { MdDescription } from "react-icons/md";
import Button from "../Button";
import { mappingData } from "../../constants/constants";

const ProductCard = ({ data = mappingData }) => {
  return data.map((d, index) => (
    <div
      key={index}
      className={`h-100 w-[80vw] border-[0.2px] border-neutral-300 rounded overflow-hidden flex justify-center items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className="w-[50%] h-full">
        <img src={d.image} className="object-fill h-full w-full" />
      </div>
      <div className="w-[50%] h-full px-10 flex flex-col justify-center items-start">
        <div className="h-[90%] px-10 flex flex-col justify-between items-start">
          <p className="text-sm">
            <span>0{index + 1} / </span>
            {d.heading}
          </p>
          <h1 className="text-[40px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
            {d.quotation}
          </h1>
          <p className="text-[18px]">{d.description}</p>
          <div className="border-[0.5px] w-10" />
          <Button label={"view details"} />
        </div>
      </div>
    </div>
  ));
};

const MaterialStudy = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-40 py-20 gap-5 relative">
      <p className="absolute top-20 left-20 text-xs uppercase ">
        MATERIAL STUDY
      </p>
      <div className="flex justify-between items-start gap-60 py-10">
        <h1 className="text-[56px] leading-12 font-instrumentRegular tracking-tighter font-extralight w-[60%]">
          A{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            vocabulary
          </span>{" "}
          of surfaces, weight, and touch.
        </h1>
        <p className="w-[40%] text-right">
          Materials are presented as studies rather than samples. Observed,
          narrated, and placed in relation to the rooms they shape.
        </p>
      </div>
      <ProductCard />
    </div>
  );
};

export default MaterialStudy;
