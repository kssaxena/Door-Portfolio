const Header = () => {
  const headerNavigation = [
    { label: "Home", url: "#" },
    { label: "About", url: "#" },
    { label: "Products", url: "#" },
    { label: "Enquiry", url: "#" },
  ];
  return (
    <div className="flex justify-between items-center w-full px-20 py-4 text-sm  border-b-[0.2px] border-neutral-400">
      <h1 className="capitalize text-lg">aarcane internaltional</h1>
      <div>
        <h1 className="flex justify-center items-center gap-10">
          {headerNavigation.map((i, index) => (
            <a key={index}>{i.label}</a>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default Header;
