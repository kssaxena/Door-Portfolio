import { FormInputs } from "../constants/constants";
import ButtonWrapper from "./Button";
import InputWrapper from "./Input";

const EnquiryForm = () => {
  
  return (
    <div className="flex justify-between items-center lg:px-40 py-20 h-[95vh]">
      <div className="w-full lg:w-[60%]" className="overflow-hidden rounded-sm">
        <div className="w-full lg:w-[650px] h-full lg:h-[500px]">
          <img
            className="w-full h-full object-cover"
            src={
              "https://ik.imagekit.io/jarvisai/Arcane%20Doors/Hero_landing.png"
            }
          />
        </div>
      </div>
      <div className="relative flex flex-col w-[40%] h-full justify-center items-start gap-5">
        <p className="absolute top-5 left-5 text-xs uppercase">INVITATION</p>
        <h1 className="text-[54px] leading-12 font-instrumentRegular">
          <span className="font-instrumentItalic text-[#6A4F3B]">Begin</span>{" "}
          with the room as it is.
        </h1>
        <p className="w-96 leading-6 text-left">
          For residences, hospitality spaces, and projects guided by material,
          light, proportion, and use.
        </p>
        <form className="w-full flex flex-col justify-start items-start gap-3">
          {FormInputs.map((i, index) => (
            <InputWrapper
              key={index}
              label={i.label}
              normalInput={i.normalInput}
              type={i.type}
            />
          ))}
          <ButtonWrapper label={"begin enquiry"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
