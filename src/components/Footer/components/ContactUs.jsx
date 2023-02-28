import React from "react";
import { Link } from "react-router-dom";

export const ContactUs = ({ contactHoverEffect }) => (
  <div className="mb-[12px]">
    <h3 className="text-white text-[18px] font-bold mb-[8px] ">Contact Us</h3>
    <ul>
      <li>Swoyambhu-15, Kathmandu</li>
      <li>
        <Link className={`${contactHoverEffect}`} href="tel:123456789">
          +01 12345 / +977980000 00000
        </Link>
      </li>
      <li>
        <Link
          className={`${contactHoverEffect}`}
          href="mailto:info@acegarage.com.np"
        >
          info@acegarage.com.np
        </Link>
      </li>
    </ul>
  </div>
);
