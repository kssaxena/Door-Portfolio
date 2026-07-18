import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  const LinkMap = ({ data }) => (
    <ul className="flex flex-col gap-2">
      {data.map((i, index) => (
        <li
          key={index}
          className="flex flex-col justify-start items-start truncate group cursor-pointer w-fit"
        >
          <span className="flex justify-start items-end">
            {i}
            <IoIosArrowRoundForward className="text-xl group-hover:-rotate-45 duration-700 ease-in-out" />
          </span>
          <span className="w-[50%] group-hover:w-[100%]  duration-500 ease-in-out border-[0.01px]" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="h-[50vh] bg-[#26211C] w-full flex flex-col justify-end items-center text-[#F6F2EA] text-[17px] px-40 py-10 gap-10">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="capitalize text-[24px] font-instrumentRegular">
            aarcane{" "}
            <span className="font-instrumentItalic text-base capitalize">
              internaltional
            </span>
          </h1>
          <p className="w-1/2">
            An interior design practice attentive to material, light, and the
            passage of time.
          </p>
          <div className="border-[0.5px] w-10" />
          <div className="text-xs">
            <p>MATERIALS REFERENCED</p>
            <p>Travertine / Oak / Linen / Brass / Limestone</p>
          </div>
        </div>
        <div className=" flex flex-col justify-start items-start gap-2">
          <p>Quick Links</p>
          <div className="border-[0.5px] w-5" />
          <LinkMap data={["About", "Contact Us", "Begin Enquiry"]} />
        </div>
        <div className=" flex flex-col justify-start items-start gap-2">
          <p>Showcase</p>
          <div className="border-[0.5px] w-5" />
          <LinkMap data={["Products", "Catalogue", "Terms of Service"]} />
        </div>
        <div className=" flex flex-col justify-start items-start gap-2">
          <p>Quick Links</p>
          <div className="border-[0.5px] w-5" />
          <LinkMap data={["aarcaneinternational@gmail.com", "Begin Enquiry"]} />
        </div>
      </div>
      <div className="border-t w-full flex justify-between items-center pt-5 text-xs">
        <p>©️ 2026 AARCANE INTERNATIONAL All rights reserved.</p>
        <a target="blank" href="https://mrsaxena.arisertradco.com">
          Made by Kshitij Saxena
        </a>
      </div>
    </div>
  );
};

export default Footer;
