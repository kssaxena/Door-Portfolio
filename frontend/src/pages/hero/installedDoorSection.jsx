import { motion } from "framer-motion";
import { useParallax } from "../../components/hooks/ParallaxImage";
import { useRef } from "react";
import Button from "../../components/Button";
import { mappingData2 } from "../../constants/constants";

const InstalledDoorSection = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);

  const Card = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-5">
        {mappingData2.map((data, index) => (
          <div
            key={index}
            className={`flex justify-center items-center border-[0.2px] border-neutral-800 px-10 py-5 gap-5 ${index % 2 ? "flex-row" : "flex-row-reverse"}`}
          >
            <div className="w-[30%] flex flex-col justify-start items-start gap-10 h-full">
              <p className="text-xs uppercase ">{data.heading}</p>
              <h1 className="text-[40px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
                {data.quotation}
              </h1>
              <div className="border-[0.5px] w-10" />
              <p>{data.description}</p>
              <Button label={"view study"} />
            </div>
            <div
              className="w-[70%] h-full overflow-hidden rounded-sm bg-red-400 justify-center items-center flex"
              //   ref={imageRef}
            >
              <div className="w-full h-full">
                <motion.img
                  //   style={{ y, scale }}
                  className="w-full h-full object-cover"
                  src={data.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-end w-fit px-40 py-20 gap-10 bg-[#26211C] text-[#F6F2EA]">
      <h1 className="text-[56px] leading-12 font-instrumentRegular tracking-tighter font-extralight indent-8">
        Collections engineered for{" "}
        <span className="font-instrumentItalic text-[#6A4F3B]">
          security, elegance,
        </span>{" "}
        <br /> and longevity.
      </h1>
      <Card />
    </div>
  );
};

export default InstalledDoorSection;
