import { NavLink } from "react-router-dom";

import Container from "../UI/Container";
import Row, { RowItem } from "../UI/Row";

const MakeAppointment = () => {
  return (
    <section className="section-padding bg-light-blue">
      <Container className="text-center">
        <Row>
          <RowItem className="w-full mb-4 md:w-8/12">
            <h2 className="capitalize section-title">
              Make an appointment now with our online form
            </h2>
          </RowItem>
          <RowItem className="w-full md:w-4/12 md:justify-self-center">
            <NavLink
              className="primary-btn"
              type="button"
              role="button"
              to="appointment"
            >
              Make an appointment
            </NavLink>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default MakeAppointment;
