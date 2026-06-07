import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={
          "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%206,%202026,%2011_40_23%20PM.png"
        }
      />
      <div className="absolute top-0 left-0 h-full flex justify-center items-center flex-col w-full bg-black/70 text-[#F3ECE9] text-sm gap-10">
        <h1 className="font-gunter uppercase text-xl lg:text-8xl tracking-widest flex flex-col justify-center items-center ">
          aarcane doors{" "}
          <span className="text-base font-dosis">
            Crafted Doors Designed for Generations.
          </span>
        </h1>
        <p className="w-full justify-center items-center flex text-center">
          Exceptional craftmanship, Premium materiais, Timeless design. <br />{" "}
          Discover doors that define luxury living.
        </p>
        <div className="capitalize flex justify-center items-center gap-10">
          <div className="relative w-[2px] h-10 overflow-hidden">
            <motion.span
              className="absolute inset-0 bg-[#DF3F33]"
              animate={{ y: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
          scroll for browsing premium & luxury solution
        </div>
      </div>
    </div>
  );
};

export default Landing;
