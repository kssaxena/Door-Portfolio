import { motion } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "../../components/hooks/ParallaxImage";

const ImperialCollection = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);

  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-start px-5 lg:px-20 py-10">
        <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight lg::w-[60%] w-full">
          Imperial{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            Collection
          </span>
        </h1>
        <p className="leading-6 indent-8 py-5 w-full lg:w-1/2">
          Our flagship collection created for luxury residences and premium
          architectural spaces. The Imperial Collection combines sophisticated
          craftsmanship with commanding aesthetics, offering statement entrances
          that embody elegance, authority, and exceptional durability.
        </p>
        <p className="text-right w-full font-instrumentItalic ">
          "Built to Impress. Built to Last."
        </p>
        <div
          ref={imageRef}
          className="overflow-hidden h-[80vh] w-full rounded-xl"
        >
          <motion.img
            src="https://ik.imagekit.io/jarvisai/Arcane%20Doors/About.png"
            style={{ y, scale }}
            className="w-full h-full object-cover will-change-transform"
            alt="About portrait"
          />
        </div>
      </div>
    </div>
  );
};

export default ImperialCollection;
