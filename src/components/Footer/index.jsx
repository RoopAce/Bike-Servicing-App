import { Newsletter } from "./components/Newsletter";
import { Company } from "./components/Company";
import { ContactUs } from "./components/ContactUs";

import Container from "../UI/Container";

const Footer = () => {
  const contactHoverEffect =
    "hover:text-white hover:ease-linear hover:duration-300 ";

  return (
    <footer className="bg-[#123D8A] text-gray-400">
      <Container className="px-4">
        <div className="py-[30px] sm:flex sm:justify-between sm:flex-wrap sm:gap-[16px]">
          <ContactUs contactHoverEffect={contactHoverEffect} />
          <Company contactHoverEffect={contactHoverEffect} />
          <Newsletter />
        </div>
      </Container>
      {/* copyright-text */}
      <Container className="px-4">
        <div className="text-center flex justify-center items-center py-[15px]">
          <p className="text-[15px] text-white ">
            Copyright &copy; Ace Garage - All rights reserved - 2023{" "}
          </p>
        </div>
      </Container>
      {/* copyright-text */}
    </footer>
  );
};

export default Footer;
