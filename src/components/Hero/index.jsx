import HeroContent from "./components/HeroContent";
import HeroSlides from "./components/HeroSlides";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative">
        <HeroSlides />
        <div className="container section-padding grid items-center px-[8px] md:px-0 text-white  absolute inset-0">
          {/* content */}
          <HeroContent />
          {/* content */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
