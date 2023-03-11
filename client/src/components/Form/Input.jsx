const Input = ({
  className,
  type,
  placeholder,
  id,
  name,
  disabled,
  required,
}) => {
  return (
    <input
      className={`border border-[#FAFAFB] bg-[#E8ECEF] rounded-lg min-h-[40px] focus:outline-none px-2 w-full ${
        className ? className : ""
      }`}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;
