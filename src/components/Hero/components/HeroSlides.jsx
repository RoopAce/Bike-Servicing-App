import HeroBg1 from "../../../assets/images/hero-bg-1.jpg";
import HeroBg2 from "../../../assets/images/hero-bg-2.jpg";
import HeroBg3 from "../../../assets/images/bike-repairing.jpeg";
import SlickSlider from "react-slick";

//css files for slick-carousel
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

const HeroSlides = () => {
  //slick-carousel settings
  const SliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //item-background property
  const backgroundProperty = {
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  //item-after-property
  const itemsAfterOverlayProperty =
    "relative after:absolute after:w-full after:h-full after:bg-black after:opacity-[0.7]";

  return (
    <SlickSlider {...SliderSettings}>
      {/* item-1 */}
      <div className="item">
        <div
          className={`min-h-[600px] ${itemsAfterOverlayProperty}`}
          style={{ backgroundImage: `url(${HeroBg1})`, ...backgroundProperty }}
        ></div>
      </div>
      {/* item-2 */}
      <div className="item">
        <div
          className={`min-h-[600px] ${itemsAfterOverlayProperty}`}
          style={{ backgroundImage: `url(${HeroBg2})`, ...backgroundProperty }}
        ></div>
      </div>
      {/* item-3 */}
      <div className="item">
        <div
          className={`min-h-[600px] ${itemsAfterOverlayProperty}`}
          style={{ backgroundImage: `url(${HeroBg3})`, ...backgroundProperty }}
        ></div>
      </div>
    </SlickSlider>
  );
};

export default HeroSlides;
