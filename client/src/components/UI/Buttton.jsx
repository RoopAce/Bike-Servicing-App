const Button = ({ className, type, disabled, onClick, children }) => {
  return (
    <button
      className={`${className ? className : ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
