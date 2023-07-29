import nodemailer from "nodemailer";
import Appointment from "../models/appointment.model.js";
import Category from "../models/category.model.js";
import APPError from "../utils/Error.js";
import { HttpResponse } from "../utils/HttpResponse.js";
import tryCatch from "../utils/tryCatch.js";

// Node mailer code

const appointmentStatus = {
  ACCEPTED: "ACCEPTED",
  DECLINED: "DECLINED",
};
const appointmentText = {
  ACCEPTED:
    "<p>Congratulation! your appointment has been approved. You are requested to show up in the scheduled time.</p><p>-Ace Garage</p>",
  DECLINED:
    "<p>Sorry, we had to deline your request due to some constraints. Please try to reschedule the appointment.</p><p>-Ace Garage</p>",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NM_MY_EMAIL,
    pass: process.env.NM_MY_PASS,
  },
});

const getMailOptions = (to_email, appointment_status) => {
  return {
    from: process.env.NM_MY_EMAIL,
    to: to_email,
    subject: "Appointment Status", // Will only be used for this purpose.
    html: appointmentText[appointment_status],
  };
};

// -------------------------------------------------------------------------------------------

export const createAppointment = tryCatch(async (req, res, next) => {
  const { name, category, date, details, address, phone } = req.body;

  if (!name || !category || !date || !details || !phone) {
    throw new APPError("Please submit all the fields", 400);
  }

  const appointment = new Appointment({
    name,
    category,
    date,
    details,
    address,
    phone,
    user: req.user,
  });

  await appointment.save();

  return res.send(new HttpResponse("Appointment Booked", 200, appointment));
});

export const getAppointment = tryCatch(async (req, res, next) => {
  const appointments = await Appointment.find({})
    .populate("user")
    .populate("category");

  return res.send(new HttpResponse("Appointments", 200, appointments));
});

export const acceptAppointment = tryCatch(async (req, res, next) => {
  const { id, to_email } = req.body;

  const mailOptions = getMailOptions(to_email, appointmentStatus.ACCEPTED);
  const response = await transporter.sendMail(mailOptions);

  const app = await Appointment.findByIdAndUpdate(
    { _id: id },
    { $set: { status: true } },
    { new: true }
  );
  console.log(app);

  if (app) {
    return res.send(
      new HttpResponse(
        `Appointments Approved, Email sent successfully to ${to_email}`,
        200
      )
    );
  } else {
    throw new APPError("No Appointment", 404);
  }
});

export const deleteAppointment = tryCatch(async (req, res, next) => {
  const { id, to_email } = req.body;
  console.log(id, to_email);

  const mailOptions = getMailOptions(to_email, appointmentStatus.ACCEPTED);
  const response = await transporter.sendMail(mailOptions);
  console.log("\n\n\n", response, "\n\n\n");

  const app = await Appointment.findByIdAndDelete(id);

  if (app) {
    return res.send(
      new HttpResponse(
        `Appointments Deleted, Email sent successfully to ${to_email}`,
        200
      )
    );
  } else {
    throw new APPError("No Appointment", 404);
  }
});

export const deleteCategory = tryCatch(async (req, res, next) => {
  const { id } = req.body;

  const app = await Category.findByIdAndDelete(id);

  if (app) {
    return res.send(new HttpResponse("Category deleted", 200));
  } else {
    throw new APPError("No Appointment", 404);
  }
});
