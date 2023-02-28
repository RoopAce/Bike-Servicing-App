import Form from "./components/Form";
import MapLocation from "./components/MapLocation";

import Container from "../UI/Container";
import Row, { RowItem } from "../UI/Row";

const ScheduleAppointment = () => {
  return (
    <section className="section-padding">
      <Container className="text-center">
        <h2 className="mb-2 section-title">Schedule an Appointment</h2>
        <p className="mb-8 md:max-w-[80%] mx-auto">
          Thank you for your interest in our services. We are dedicated to
          providing the highest quality care for our patients, and we look
          forward to the opportunity to serve you.
        </p>
        <Row className="text-left ">
          <RowItem className="w-full md:w-1/2">
            <MapLocation
              className="max-w-full rounded-lg"
              title="appointment-location"
              style={{ border: 0 }}
            />
          </RowItem>
          <RowItem className="md:p-[30px] mt-6 md:mt-0 md:w-1/2 w-full">
            <Form />
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default ScheduleAppointment;
