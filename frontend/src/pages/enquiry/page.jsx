import InputWrapper from "../../components/Input";
import ButtonWrapper from "../../components/Button";
import { useState, useEffect, useRef } from "react";

const formInputs = [
  { labelName: "Name", placeholder: "Please enter your name", type: "text" },
  {
    labelName: "Contact number",
    placeholder: "Please enter your contact number",
    type: "text",
  },
  {
    labelName: "Whatsapp",
    placeholder: "Please enter your whatsapp number",
    type: "text",
  },
  { labelName: "Email", placeholder: "Please enter your email", type: "email" },
  {
    labelName: "Description",
    placeholder: "Please enter your requirements or enquiry...",
    normalInput: false,
    type: "text",
  },
];

const Enquiry = () => {
  return (
    <div className="flex justify-between items-start w-full relative py-20 px-10">
      <div>
        <h1 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight sticky top-0 left-0">
          Reach Out
        </h1>
      </div>
      <div className="w-[60vw] bg-[#26211ce6] flex flex-col items-start gap-20 p-10 text-[#F6F2EA] rounded-md">
        <h1 className="text-[46px] lg:text-[80px] leading-10 lg:leading-20 font-instrumentRegular tracking-tighter font-extralight">
          Tell us what you desire...
        </h1>
        <form className="grid grid-cols-2 w-full gap-5">
          {formInputs.map((i, index) => (
            <div key={index}>
              <InputWrapper
                label={i.labelName}
                placeholder={i.placeholder}
                normalInput={i.normalInput}
              />
            </div>
          ))}
          <div className=" flex justify-end items-end gap-4">
            <ButtonWrapper label={"Submit"} />
            <ButtonWrapper label={"Reset"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
