import { useState } from "react";

import Input from "../../Form/Input";
import Textarea from "../../Form/Textarea";

import Button from "../../UI/Buttton";
import Row, { RowItem } from "../../UI/Row";

const Form = ({ className }) => {
  const [appointmentFormInfo, setAppointmentFormIno] = useState({
    fullname: "",
    mobile_num: "",
    email: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    return setAppointmentFormIno((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAppointmentForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h4 className="mb-8 text-lg font-bold text-center">Appointment Form</h4>
      <form
        onSubmit={handleAppointmentForm}
        className={`${className ? className : ""}`}
      >
        <Row>
          <RowItem className="w-6/12 mb-4">
            <Input
              className="w-full"
              onChange={handleChange}
              name="fullname"
              type="text"
              value={appointmentFormInfo.fullname}
              placeholder="Enter your full name"
              required
            />
          </RowItem>
          <RowItem className="w-6/12 mb-4">
            <Input
              className="w-full"
              onChange={handleChange}
              value={appointmentFormInfo.mobile_num}
              name="mobile_num"
              type="tel"
              placeholder="Enter Mobile Number"
              required
            />
          </RowItem>
          <RowItem className="w-6/12 mb-4">
            <Input
              onChange={handleChange}
              className="w-full"
              name="email"
              value={appointmentFormInfo.email}
              type="email"
              placeholder="Enter your email address"
              required
            />
          </RowItem>
          <RowItem className="w-6/12 mb-4">
            <Input
              className="w-full"
              onChange={handleChange}
              name="date"
              value={appointmentFormInfo.date}
              type="date"
              required
            />
          </RowItem>
          <RowItem className="w-full mb-full">
            <Textarea
              className="w-full min-h-[120px] p-4"
              onChange={handleChange}
              name="message"
              value={appointmentFormInfo.message}
              placeholder="Enter additional message(optional)"
            />
          </RowItem>
        </Row>
        <div className="flex justify-end">
          <Button className="primary-btn">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
