import React from "react";
import { NavLink } from "react-router-dom";

export const Company = ({ contactHoverEffect }) => (
  <div className="mb-[12px]">
    <h3 className="text-white text-[18px] font-bold mb-[8px]">Company</h3>
    <ul>
      <li>
        <NavLink className={`${contactHoverEffect}`} to="services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className={`${contactHoverEffect}`} to="appointment">
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink className={`${contactHoverEffect}`} to="shop">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink className={`${contactHoverEffect}`} to="contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);
