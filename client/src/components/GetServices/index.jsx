import React from "react";

import Container from "../UI/Container";
import Row, { RowItem } from "../UI/Row";

import Content from "./components/Content";
import Form from "./components/Form";

const GetServices = () => {
  return (
    <section className="section-padding">
      <Container>
        <Row>
          <RowItem className="w-full md:w-7/12">
            <Content />
          </RowItem>
          <RowItem className="w-full mt-8 md:w-5/12 md:mt-0">
            <Form />
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default GetServices;
