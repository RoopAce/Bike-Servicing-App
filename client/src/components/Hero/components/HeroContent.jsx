import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold capitalize mb-[8px] text-[30px] md:w-8/12 md:mx-auto md:text-[40px]">
        Get your bike in top condition with our innovative
        <span className="text-[#0066ff]"> bike servicing</span> management
        system
      </h1>

      <p className="mb-[24px] text-[16px] text-[#7d7c83] md:max-w-[80%] md:mx-auto">
        Experience stress-free scheduling, quick turnaround time and
        professional servicing with our trained technicians. Keep your bike on
        the road and enjoy the ride with our comprehensive bike servicing
        solutions.
      </p>
      <Link className="primary-btn" type="button" role="button" to="services">
        Book your service today!
      </Link>
    </div>
  );
};

export default HeroContent;
