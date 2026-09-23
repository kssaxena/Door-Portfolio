import { useEffect, useRef } from "react";
import { useParallax } from "../../components/hooks/ParallaxImage";
import { aboutData } from "../../constants/constants";
import { motion } from "framer-motion";
import OurMission from "./ourMission";
import ModernLiving from "./modernLiving";
import ImperialCollection from "./imperialCollection";

const About = () => {
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

  const AboutDataMap = () => {
    return (
      <div className="flex flex-col justify-start items-start gap-5 lg:gap-20 px-4 lg:px-20 py-10 h-fit relative">
        {aboutData.map((data, index) => (
          <div className="flex flex-col w-full justify-start items-start gap-5 lg:gap-20">
            <div className="flex flex-col justify-center items-start gap-5 w-full my-5 lg:my-20">
              <div
                className={`flex justify-center items-center gap-10 ${data?.image ? (index % 2 === 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col") : ""}`}
              >
                <div
                  className={`${data.image ? "flex flex-col justify-center items-center gap-5 w-full lg:w-1/2" : "w-full"}`}
                >
                  {/* <PatternText normalText={data.heading}/> */}
                  <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight lg:w-[60%] w-full ">
                    {data.heading}
                  </h1>
                  <p className="leading-6 indent-8 py-10 w-full">
                    {data?.paragraph}
                  </p>
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
                  className="overflow-hidden h-[80vh] w-full rounded-xl"
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
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
                  {data.points.map((i) => (
                    <div className="w-full lg:w-72 border-[0.1px] border-neutral-300 px-5 py-5">
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
    );
  };

  return (
    <div className="w-full">
      <AboutDataMap />
      <ImperialCollection />
      <OurMission />
      <ModernLiving />
    </div>
  );
};

export default About;
