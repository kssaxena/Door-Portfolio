import { data } from "../../constants/constants";

const DoorTypes = () => {
  return (
    <div className="px-5 md:px-40 py-20 relative">
      <p className="absolute top-20 right-10 md:left-20 text-xs ">POSITION</p>
      <div className="flex flex-col justify-start items-start gap-10">
        <h1 className="text-[46px] lg:text-[80px] leading-10 md:leading-20 font-instrumentRegular tracking-tighter font-extralight w-[60vw]">
          We believe every entrance should reflect,{" "}
          {/* <span className="font-instrumentItalic text-[#6A4F3B]">kept,</span> */}
          confidence{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            craftsmanship,
          </span>{" "}
          and{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            timeless design.
          </span>{" "}
        </h1>
        <div className="border-[0.5px] w-10" />
        <div className="flex flex-col md:flex-row justify-start items-start gap-5 md:gap-20 ">
          <p className="w-full md:w-72 leading-6">
            Every Aarcane door is engineered to withstand changing climates
            while preserving its finish and structural integrity. Built for
            modern lifestyles without compromising elegance.
          </p>
          <p className="w-full md:w-72 leading-6">
            From grand villa entrances to contemporary residences, our
            collections are designed to complement architecture rather than
            compete with it.
          </p>
        </div>
      </div>
      <div className="py-20 flex flex-col gap-10 italic">
        <div className="grid grid-cols-3 justify-center items-center w-full">
          {data.map((d, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center capitalize text-xl px-4 py-2 rounded-xl hover:shadow-2xl duration-300 ease-in-out"
            >
              <img className="w-32 tracking-wide" src={d.image} />
              <h1>{d.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorTypes;
