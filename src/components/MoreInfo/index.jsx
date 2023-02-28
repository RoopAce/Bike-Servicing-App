import ScooterServicing from "../../assets/images/scooter-servicing.jpeg";
import Container from "../UI/Container";
import Row, { RowItem } from "../UI/Row";

const MoreInfo = () => {
  return (
    <section className="section-padding">
      <Container>
        <Row>
          <RowItem className="w-full mb-[32px] md:w-5/12 md:mr-auto md:mb-0">
            <picture>
              <img
                className="max-w-[100%] rounded-lg object-cover"
                src={ScooterServicing}
                alt="a man fixing the scooter"
              />
            </picture>
          </RowItem>
          <RowItem className="w-full md:w-6/12 ">
            <span className="text-[16px] font-[500] text-[#0066ff] uppercase mb-[12px]">
              About Ace garage
            </span>
            <h2 className="section-title mb-[16px] capitalize">
              Our company is dedicated to providing top-notch bike management
              services to riders and bike enthusiasts all over the world.
            </h2>
            <p className="mb-[8px]">
              With years of experience and a passion for the two-wheeled
              lifestyle, we are committed to making your biking experience as
              seamless and enjoyable as possible.We believe that biking is more
              than just a mode of transportation; it's a lifestyle, a passion,
              and a way to explore and experience the world around us.
            </p>
            <p>
              That's why we are dedicated to offering the best in bike
              maintenance and repair services, as well as a wide range of
              top-quality gear and accessories to help you get the most out of
              your ride.
            </p>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default MoreInfo;
