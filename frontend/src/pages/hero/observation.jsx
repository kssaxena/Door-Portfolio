import ButtonWrapper from "../../components/Button";
import { mappingData3 } from "../../constants/constants";

const Observation = () => {
  const Card = () => {
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
              <ButtonWrapper label={"continue reading"} />
            </div>
          </div>
        ))}
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
