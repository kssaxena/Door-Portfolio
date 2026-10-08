import { AnimatePresence, motion } from "framer-motion";
import ButtonWrapper from "../../components/Button";
import { mappingData3 } from "../../constants/constants";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const Observation = () => {
  const Card = () => {
    const [selected, setSelected] = useState(null);

    return (
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 h-full">
        {mappingData3.map((data, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-start border-[0.2px] border-neutral-800 gap-5 w-fit h-[60vh] md:h-[70vh]`}
          >
            <div className="overflow-hidden justify-center items-center flex h-[50%] w-full">
              <div className="w-full h-full">
                <img className="w-full h-full object-cover" src={data.image} />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-5 px-5 py-5 h-[50%]">
              <p className="text-xs uppercase ">{data.heading}</p>
              <h1 className="text-[30px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
                {data.quotation}
              </h1>
              <div className="border-[0.5px] w-10" />
              <p className="text-[17px]">{data.description}</p>
              <ButtonWrapper
                label={"continue reading"}
                onClick={() => setSelected(data)}
              />
            </div>
          </div>
        ))}
        <AnimatePresence>
          {selected && (
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ type: "spring", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-full flex justify-center items-center z-50 "
            >
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setSelected(null);
                  }
                }}
              >
                <div className="relative grid max-h-[90vh] w-full max-w-5xl overflow-auto bg-[#f5f2ed] md:grid-cols-2">
                  {/* CLOSE */}

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center bg-black/70 text-white"
                  >
                    <FiX />
                  </button>

                  {/* IMAGE */}

                  <div className="min-h-[400px] bg-[#dedbd5]">
                    <img
                      src={selected.image}
                      alt={selected.heading}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-black">
                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14 lg:gap-3">
                      <div className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#9b7840]">
                        {selected.heading}
                      </div>
                      <h2 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
                        {selected.quotation}
                      </h2>
                      <div className="mt-3 text-xs text-[#1d1a17]/45">
                        {selected.description}
                      </div>
                      <div className="my-2 h-px bg-[#1d1a17]/10" />
                      <p className="leading-7 text-sm">{selected.paragraph}</p>
                    </div>
                  </div>

                  {/* INFO */}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  return (
    <div className="px-5 lg:px-40 py-20 relative">
      <p className="absolute top-20 right-10 lg:left-20 text-xs uppercase">
        studio notes
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <h1 className="text-[54px] leading-12 font-instrumentRegular tracking-tighter font-extralight flex flex-col ">
          <span className="font-instrumentItalic text-[#6A4F3B]">
            Observations
          </span>{" "}
          gathered through material, light, and use.
        </h1>
        {/* <div className="border-[0.5px] w-10" /> */}
        <div className="w-full">
          <p className="w-full md:w-72 leading-6 text-right">
            Explore handcrafted collections designed for modern homes, luxury
            villas, architects, and interior designers.
          </p>
        </div>
      </div>
      <div className="py-20">
        <Card />
      </div>
    </div>
  );
};

export default Observation;
