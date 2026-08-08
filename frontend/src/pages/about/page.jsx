import { useEffect, useRef } from "react";
import { useParallax } from "../../components/hooks/ParallaxImage";
import { aboutData } from "../../constants/constants";
import { motion } from "framer-motion";

const About = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);
  const imageRef2 = useRef(null);
  const { y: y2, scale: scale2 } = useParallax(imageRef2);

  const PatternText = ({ normalText, italicText }) => {
    return (
      <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight lg::w-[60%] w-full">
        {normalText}{" "}
        <span className="font-instrumentItalic text-[#6A4F3B]">
          {italicText}
        </span>
      </h1>
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-start gap-20 px-20 py-10 h-fit relative">
        {aboutData.map((data, index) => (
          <div className="flex flex-col w-full justify-start items-start gap-20">
            <div className="flex flex-col justify-center items-start gap-5 w-full my-20">
              <div
                className={`flex flex-row justify-center items-center gap-10 ${data?.image ? (index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse") : ""}`}
              >
                <div
                  className={`${data.image ? "flex flex-col justify-center items-center gap-5 w-1/2" : "w-full"}`}
                >
                  {/* <PatternText normalText={data.heading}/> */}
                  <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight lg::w-[60%] w-full">
                    {data.heading}
                  </h1>
                  <p className="leading-6 indent-8 py-10">{data?.paragraph}</p>
                </div>
                {data.image ? (
                  <div className="w-full lg:w-[650px] h-full lg:h-[500px] bg-[#6A4F3B]">
                    <img
                      className="w-full h-full object-cover"
                      src={data.image}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {data.background ? (
                <div
                  ref={imageRef2}
                  className="overflow-hidden h-[80vh] w-full"
                >
                  <motion.img
                    src={data.background}
                    style={{ y: y2, scale: scale2 }}
                    className="w-full h-full object-cover will-change-transform"
                    alt="About portrait"
                  />
                </div>
              ) : (
                ""
              )}
              {data.points ? (
                <div className="w-full grid grid-cols-3 gap-4">
                  {data.points.map((i) => (
                    <div className="w-72 border-[0.1px] border-neutral-300 px-5 py-5">
                      <p className="text-[30px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
                        {i.pHead}
                      </p>
                      <p className="text-[17px]">{i.pPara}</p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div
              className={`h-[1px] w-[50vw] bg-[#6A4F3B] ${index === 4 ? "hidden" : "block"}`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start items-start  px-20 py-10">
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
        <div ref={imageRef} className="overflow-hidden h-[80vh] w-full">
          <motion.img
            src="https://ik.imagekit.io/jarvisai/Arcane%20Doors/About.png"
            style={{ y, scale }}
            className="w-full h-full object-cover will-change-transform"
            alt="About portrait"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-20 px-20 py-40 bg-[#26211C] text-[#F6F2EA]">
        <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentItalic tracking-tighter font-extralight lg::w-[60%] w-full text-center ">
          Our Mission
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-5 w-full">
          {[
            "Create world-class engineered door solutions.",
            "Deliver exceptional craftsmanship in every product.",
            "Continuously innovate in design and engineering.",
            "Build lasting relationships through quality and trust.",
            // "Transform entrances into timeless architectural statements.",
          ].map((i, index) => (
            <ul className="border p-4 h-58 w-64 flex flex-col justify-between items-start ">
              <span>- M 0/{index + 1}</span>
              <li className="font-instrumentItalic tracking-widest font-extralight">
                {i}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-start items-start  px-20 py-40">
        <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight lg::w-[60%] w-full">
          Built for{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            Modern Living
          </span>
        </h1>
        <p className="leading-6 indent-8 py-5 w-full lg:w-1/2">
          Our flagship collection created for luxury residences and premium
          architectural spaces. The Imperial Collection combines sophisticated
          craftsmanship with commanding aesthetics, offering statement entrances
          that embody elegance, authority, and exceptional durability.
        </p>
        <p className="text-right w-full font-instrumentItalic ">
          - Aarcane Doors
        </p>
        <p className="leading-6">
          Engineered for Strength. <br /> Designed for Life. Built to Last.
        </p>
      </div>
    </div>
  );
};

export default About;
