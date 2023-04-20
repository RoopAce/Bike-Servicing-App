// import useFetch from "../../../assets/hooks/useFetch";

import ServiceData from "../data/ServiceData";

const Content = () => {

  // const { fetchedData } = useFetch(url);
  return (
    <>
      <h2 className="section-title">Two Wheeler Services</h2>
      <p className="mb-8">
        Get professional periodic bike service, bike repair, engine work, wheel
        and tyre care services bike insurance and much more done at best prices
        in Kathmandu, Bhaktapur & Lalitpur.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className="p-[30px] text-center border border-black"
          >
            <img src={item.imgSrc.mypicture} alt={item.desc} />
            <p className="mt-4"> {item.desc}</p>
          </div>
        ))}
        {/* {fetchedData.map((item) => (
          <div
            key={item.id}
            className="p-[30px] text-center border border-black"
          >
            <img src={item.desc} alt={item.desc} />
            <p> {item.desc}</p>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Content;
