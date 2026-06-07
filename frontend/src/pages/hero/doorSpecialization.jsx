import { motion } from "framer-motion";
import { MdOutlineStyle } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { TbTexture } from "react-icons/tb";
import { GiDoorHandle } from "react-icons/gi";
import { useRef } from "react";
import { useParallax } from "../../components/hooks/ParallaxImage";

const DoorSpecialization = () => {
  const imageRef = useRef(null);
  const { y, scale } = useParallax(imageRef);

  const data = [
    {
      icon: <MdOutlineStyle />,
      category: "Door Style",
      description: "Regular, Regular Double, Pivot Doors and more...",
    },
    {
      icon: <FaDoorOpen />,
      category: "Door Type",
      description: "Main, Villa Doors and more...",
    },
    {
      icon: <TbTexture />,
      category: "Finish",
      description: "Wood, Copper, Texture Finish and more...",
    },
    {
      icon: <GiDoorHandle />,
      category: "Handles",
      description: "Morteese, Digital, Knob Handles and more...",
    },
  ];
  return (
    <div className="text-[#F3ECE9]">
      <div ref={imageRef} className="relative overflow-hidden h-[80vh] flex">
        <motion.img
          src="https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2001_30_02%20AM.png"
          style={{ y, scale }}
          className="w-full h-full object-cover will-change-transform absolute"
          alt="About portrait"
        />
        <div className="bg-black/50 w-full h-full absolute flex justify-between items-center px-20 ">
          <div>
            <h1 className="text-4xl">
              Your door <br /> Your choise{" "}
            </h1>
            <p>
              Use your interactive configuration for your door style, finish,
              handle and more.
            </p>
          </div>
          <div>
            {data.map((d, index) => (
              <div
                key={index}
                className={`flex justify-start items-center gap-10 px-20 py-5 border-b ${
                  index === data.length - 1 ? "border-none" : ""
                }`}
              >
                <span className="text-5xl">{d.icon}</span>
                <p className="flex flex-col justify-start items-start">
                  <span>{d.category}</span>
                  <span>{d.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
        <h1 className="text-4xl">
          Your door <br /> Your choise{" "}
        </h1>
        <p>
          Use your interactive configuration for your door style, finish, handle
          and more.
        </p>
      </div>
      <div>
        {data.map((d, index) => (
          <div
            key={index}
            className={`flex justify-start items-center gap-10 px-20 py-5 border-t ${
              index === data.length - 1 ? "border-b" : ""
            }`}
          >
            <span className="text-5xl">{d.icon}</span>
            <p className="flex flex-col justify-start items-start">
              <span>{d.category}</span>
              <span>{d.description}</span>
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DoorSpecialization;
