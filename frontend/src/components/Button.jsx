const Button = ({ label, onClick }) => {
  return (
    <button className="text-sm capitalize group" onClick={onClick}>
      {label}
      <div className="w-[10%] group-hover:w-[100%] border duration-500 ease-in-out" />
    </button>
  );
};

export default Button;
