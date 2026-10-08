import TransitionLink from "./hooks/TransitionHook";

const Footer = () => {
  const LinkMap = ({ data }) => (
    <ul className="flex flex-col gap-2">
      {data.map((i, index) => (
        <li
          key={index}
          className="flex flex-col justify-start items-start truncate group cursor-pointer w-fit"
        >
          <TransitionLink
            to={i.url}
            target={i.targetBlank === true ? "blank" : ""}
            className="flex justify-start items-end truncate"
          >
            {i.label}
          </TransitionLink>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="h-fit lg:h-[50vh] bg-[#26211C] w-full flex flex-col justify-end items-center text-[#F6F2EA] text-[17px] px-5 lg:px-40 py-5 lg:py-10 gap-10">
      <div className="flex flex-col lg:flex-row justify-between items-start w-full">
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
          <LinkMap
            data={[
              { label: "About", url: "/about/aarcane-doors" },
              { label: "Contact Us", url: "/enquiry/say-hello" },
              { label: "Begin Enquiry", url: "/enquiry/say-hello" },
            ]}
          />
        </div>
        <div className=" flex flex-col justify-start items-start gap-2">
          <p>Showcase</p>
          <div className="border-[0.5px] w-5" />
          <LinkMap
            data={[
              { label: "Products", url: "/product/aarcane-doors" },
              { label: "Catalogue", url: "/product/aarcane-doors" },
              { label: "Terms of Service", url: "/tos/terms-of-service" },
            ]}
          />
        </div>
        <div className=" flex flex-col justify-start items-start gap-2">
          <p>Quick Links</p>
          <div className="border-[0.5px] w-5" />
          <LinkMap
            data={[
              {
                targetBlank: true,
                label: "aarcaneinternational@gmail.com",
                url: "https://mail.google.com/mail/?view=cm&fs=1&to=aarcaneinternational@gmail.com.com&su=Door%20Booking&body=",
              },
              {
                label: "Begin enquiry",
                url: "https://mail.google.com/mail/?view=cm&fs=1&to=ariserstradco@gmail.com&su=Door%20Booking&body=",
              },
            ]}
          />
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
