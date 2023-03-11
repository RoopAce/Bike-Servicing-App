const Textarea = ({ className, children, placeholder, id }) => {
  return (
    <textarea
      className={`focus:outline-none border border-[#FAFAFB] bg-[#E8ECEF] rounded-lg 
     ${className ? className : ""}`}
      id={id}
      placeholder={placeholder}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
