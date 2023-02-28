import { NavLink } from "react-router-dom";

import Card from "../UI/Card";
import Container from "../UI/Container";

import ServicesData from "./data/ServicesData";

const RepairService = () => {
  return (
    <section className="section-padding">
      <Container className="text-center">
        <h2 className="section-title mb-[32px]">
          Repair Service
          <span className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h2>
        <div className="wrapper px-[15px] space-y-5 mb-[24px] md:space-y-0 md:flex md:justify-center md:items-center md:gap-3 lg:gap-5">
          {ServicesData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <NavLink
          className="primary-btn"
          role="button"
          type="button"
          to="services"
        >
          View all services
        </NavLink>
      </Container>
    </section>
  );
};

export default RepairService;
