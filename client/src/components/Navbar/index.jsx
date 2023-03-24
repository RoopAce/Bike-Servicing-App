import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import { HiOutlineMenuAlt1, HiOutlineX } from "react-icons/hi";

import Container from "../UI/Container";
import Button from "../UI/Buttton";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggle = () => {
    return setToggleNav((prevValue) => !prevValue);
  };
  
  return (
    <nav className="shadow-lg sticky z-[99]">
      <Container className="py-[20px] px-[8px] flex justify-between items-center">
        <span className="uppercase text-[24px] font-semibold">
          <Link to="/">Ace Garage </Link>
        </span>
        <Button
          className="text-[32px] md:hidden"
          type="button"
          onClick={handleToggle}
        >
          {toggleNav ? <HiOutlineX /> : <HiOutlineMenuAlt1 />}
        </Button>
        <div className="hidden md:block">
          <ul className="flex space-x-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="services">Services</NavLink>
            </li>
            <li>
              <NavLink to="appointment">Appointment</NavLink>
            </li>
            <li>
              
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="signup">Signup</NavLink>
            </li>
          </ul>
        </div>

        {/* mobile-navigation */}
        <div
          className={clsx(
            `md:hidden`,
            `w-[250px] h-full`,
            `bg-blue-500`,
            `fixed top-0 bottom-0 ${toggleNav ? "left-0" : "left-[-250px]"}`,
            `ease-linear duration-300`
          )}
        >
          <ul className="text-white text-[18px] py-[75px] px-[16px] space-y-[12px]">
            <li>
              <NavLink onClick={handleToggle} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleToggle} to="services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleToggle} to="appointment">
                Appointment
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleToggle} to="login">
                login
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleToggle} to="signup">
                sinup
              </NavLink>
            </li>
          </ul>
        </div>
        {/* mobile-navigation */}
      </Container>
    </nav>
  );
};

export default Navbar;
