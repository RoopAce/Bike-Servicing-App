const Row = ({ className, children }) => {
  return (
    <div className={`flex flex-wrap -mx-4 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export const RowItem = ({ className, children }) => {
  return (
    <div className={`shrink-0 px-4 ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Row;
