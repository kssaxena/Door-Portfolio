import ButtonWrapper from "../../components/Button";
import { mappingData4 } from "../../constants/constants";

const Process = () => {
  const Card = () => {
    return (
      <div className="grid lg:grid-cols-2 justify-center items-center h-full w-full">
        {mappingData4.map((data, index) => (
          <div
            key={index}
            className={`flex flex-col justify-start items-start border-[0.1px] border-neutral-300 gap-5 h-[20vh] lg:h-[35vh] w-full lg:w-[25vw] relative`}
          >
            <div className="flex flex-col h-full justify-end items-start gap-5 px-5 py-5">
              <p className="text-xs uppercase absolute top-5 left-5">
                {data.heading}
              </p>
              <h1 className="text-[40px] leading-10 font-instrumentRegular tracking-tighter font-extralight">
                {data.quotation}
              </h1>
              <div className="border-[0.5px] w-10" />
              <p className="text-[17px]">{data.description}</p>
              {/* <ButtonWrapper label={"continue reading"} /> */}
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="px-5 lg:px-40 py-20 relative">
      <p className="absolute top-20 right-10 lg:left-20 text-xs uppercase">
        process
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-start h-fit lg:h-[70vh]">
        <div className="flex flex-col justify-between items-start gap-10 h-full w-full lg:w-[20vw]">
          <h1 className="text-[36px] lg:text-[54px] leading-10 lg:leading-12 font-instrumentRegular tracking-tighter font-extralight flex flex-col ">
            A restrained{" "}
            <span className="font-instrumentItalic text-[#6A4F3B]">
              sequence
            </span>{" "}
            for considered work.
          </h1>
          <div className="hidden lg:flex justify-start items-center gap-5 text-sm">
            <div className="border-[0.5px] h-20" />
            <div className="flex flex-col gap-3">
              <p>Field Note</p>
              <p className="w-40 ">
                Nothing is added before something is understood.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Process;
