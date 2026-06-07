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
    <div className="px-40 py-20 flex flex-col gap-10">
      <h1 className="text-5xl uppercase tracking-tight border-b-2 pb-2">
        Doors for every need
      </h1>
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
  );
};

export default DoorTypes;
