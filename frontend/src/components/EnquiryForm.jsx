import { FormInputs } from "../constants/constants";
import ButtonWrapper from "./Button";
import InputWrapper from "./Input";

const EnquiryForm = () => {
  return (
    <div className="flex justify-between items-center lg:px-40 px-5 py-5 lg:py-20 h-[95vh] relative">
      <div className="hidden lg:flex w-full lg:w-[60%] overflow-hidden rounded-sm">
        <div className="w-full lg:w-[650px] h-full lg:h-[500px]">
          <img
            className="w-full h-full object-cover"
            src={
              "https://ik.imagekit.io/jarvisai/Arcane%20Doors/Hero_landing.png"
            }
          />
        </div>
      </div>
      <div className=" flex flex-col lg:w-[40%] h-[90vh] lg:h-full justify-center items-start gap-5">
        <p className="absolute top-5 left-5 text-xs uppercase">INVITATION</p>
        <h1 className="text-[36px] w-full lg:text-[54px] leading-10 lg:leading-12 font-instrumentRegular">
          <span className="font-instrumentItalic text-[#6A4F3B]">Begin</span>{" "}
          with the room as it is.
        </h1>
        <p className="w-96 leading-6 text-left">
          For residences, hospitality spaces, and projects guided by material,
          light, proportion, and use.
        </p>
        <form className="w-full flex flex-col justify-start items-start gap-2 lg:gap-3">
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
