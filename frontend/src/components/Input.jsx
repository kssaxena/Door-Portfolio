const InputWrapper = ({
  index,
  labelClassName = "",
  inputClassName = "",
  label = "",
  placeholder = "",
  type = "",
  value,
  required = true,
  disabled = false,
  normalInput = true,
}) => {
  return (
    <div className="flex justify-start items-start flex-col w-full">
      <label className={`${labelClassName} capitalize text-xs`}>
        {label}
        {required === true ? "*" : ""}
      </label>
      {normalInput === true ? (
        <input
          key={index}
          className={`${inputClassName} focus:border-b-neutral-900 border-b-neutral-300 px-1 py-3 focus:ring-transparent outline-none w-full border-b-[0.1px]`}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      ) : (
        <textarea
          key={index}
          className={`${inputClassName} focus:border-b-neutral-900 border-b-neutral-300 px-1 py-3 focus:ring-transparent outline-none w-full border-b-[0.1px]`}
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          rows="3"
        />
      )}
    </div>
  );
};

export default InputWrapper;
