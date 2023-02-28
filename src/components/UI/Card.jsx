const Card = ({ name, img }) => {
  return (
    <div className=" bg-[#f8f9fa] p-[30px] shadow-md rounded-md">
      <picture>
        <img src={img} alt={name} />
      </picture>
      <h4 className="font-[500] mt-[16px]">{name}</h4>
    </div>
  );
};

export default Card;
