const OurMission = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center gap-20 px-20 py-10 lg:py-40 bg-[#26211C] text-[#F6F2EA]">
        <h1 className="text-[36px] lg:text-[56px] leading-10 lg:leading-12 font-instrumentItalic tracking-tighter font-extralight lg::w-[60%] w-full text-center ">
          Our Mission
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 w-full">
          {[
            "Create world-class engineered door solutions.",
            "Deliver exceptional craftsmanship in every product.",
            "Continuously innovate in design and engineering.",
            "Build lasting relationships through quality and trust.",
            // "Transform entrances into timeless architectural statements.",
          ].map((i, index) => (
            <ul className="border-[0.1px] rounded-sm p-4 h-58 w-64 flex flex-col justify-between items-start ">
              <span>- M 0/{index + 1}</span>
              <li className="font-instrumentItalic font-extralight">{i}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMission;
