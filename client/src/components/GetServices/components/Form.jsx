import React from "react";

import Input from "../../Form/Input";

import Button from "../../UI/Buttton";
import Row, { RowItem } from "../../UI/Row";

const Form = () => {
  return (
    <>
      <h3 className="text-lg font-bold">Get our Services</h3>
      <p className="mb-8">Caught our 10% amazing offers</p>
      <form action="POST">
        <Row className="space-y-4">
          <RowItem className="w-full">
            <Input type="text" placeholder="Your Name" />
          </RowItem>
          <RowItem className="w-full">
            <Input type="text" placeholder="Phone Number" />
          </RowItem>
          <RowItem className="w-full">
            <Input type="email" placeholder="E-mail" />
          </RowItem>
          <RowItem className="w-full">
            <Input type="text" placeholder="City" />
          </RowItem>
          <RowItem className="w-full">
            <Input type="text" placeholder="Bike Model" />
          </RowItem>
          <RowItem className="w-full text-end">
            <Button className="primary-btn" type="submit">
              Book Now
            </Button>
          </RowItem>
        </Row>
      </form>
    </>
  );
};

export default Form;
