const DoorTypes = () => {
  const data = [
    {
      image:
        "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2004_42_06%20PM.png",
      label: "villa doors",
    },
    {
      image:
        "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2004_28_18%20PM.png",
      label: "main doors",
    },
    {
      image:
        "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2004_39_51%20PM.png",
      label: "designer doors",
    },
    {
      image:
        "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2004_32_49%20PM.png",
      label: "bedroom doors",
    },
    {
      image:
        "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2004_35_25%20PM.png",
      label: "flush doors",
    },

    {
      image:
        "https://ik.imagekit.io/jarvisai/Arcane%20Doors/ChatGPT%20Image%20Jun%207,%202026,%2004_45_26%20PM.png",
      label: "bathroom doors",
    },
  ];
  return (
    <div className="px-40 py-20 relative">
      <p className="absolute top-20 left-20 text-xs ">POSITION</p>
      <div className="flex flex-col justify-start items-start gap-10">
        <h1 className="text-[80px] leading-20 font-instrumentRegular tracking-tighter font-extralight w-[60vw]">
          We think of an interior as a record of decisions: what was{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">kept,</span>
          what was{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">
            softened,
          </span>{" "}
          and where the{" "}
          <span className="font-instrumentItalic text-[#6A4F3B]">light</span>{" "}
          was asked to stay.
        </h1>
        <div className="border-[0.5px] w-10" />
        <div className="flex justify-start items-start gap-20 ">
          <p className="w-72 leading-6">
            Rooms are not assembled at once. They emerge through a sequence of
            small choices: a material retained, an opening widened, a surface
            left quiet enough for light to matter.
          </p>
          <p className="w-72 leading-6">
            The most considered spaces rarely announce themselves. Their
            character emerges through proportion, atmosphere, and the evidence
            of use.
          </p>
        </div>
      </div>
      <div className="py-20 flex flex-col gap-10 italic">
        <div className="grid grid-cols-3 justify-center items-center w-full">
          {data.map((d, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center capitalize text-xl px-4 py-2 rounded-xl hover:shadow-2xl duration-300 ease-in-out"
            >
              <img className="w-32 tracking-wide" src={d.image} />
              <h1>{d.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoorTypes;
