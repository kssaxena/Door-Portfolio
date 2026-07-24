import { motion } from "framer-motion";
import { useParallax } from "../../components/hooks/ParallaxImage";
import { useRef } from "react";
import ButtonWrapper from "../../components/Button";

const Landing = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full lg:px-40 px-5 py-20 relative">
      {/* <p className="absolute top-20 left-20 text-xs uppercase ">obs 01</p> */}
      <div className="w-full lg:w-[40%] flex flex-col justify-start items-start gap-10">
        <h1 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
          Doors that define the first impression{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            impression
          </span>
          .
        </h1>
        <div className="border-[0.5px] w-10" />
        <h1 className="text-[16px] lg:text-[17px]">
          Every entrance is the beginning of a story. Crafted with precision
          engineering and refined detailing, Aarcane Doors combine security,
          durability, and timeless design for homes that deserve an
          extraordinary welcome.
        </h1>
        <ButtonWrapper label={"Explore Collection"} />
      </div>
      <div
        className="w-full lg:w-[60%]"
        ref={imageRef}
        className="overflow-hidden rounded-sm"
      >
        <div className="w-full lg:w-[650px] h-full lg:h-[500px]">
          <motion.img
            style={{ y, scale }}
            className="w-full h-full object-cover"
            src={
              "https://ik.imagekit.io/jarvisai/Arcane%20Doors/Hero_landing.png"
            }
          />
        </div>
        <p className="w-full text-right text-sm py-2">
          Range of external doors
        </p>
      </div>
    </div>
  );
};

export default Landing;
