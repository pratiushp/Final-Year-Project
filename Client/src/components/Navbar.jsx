import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Bus", link: "/" },
    { name: "Tickets", link: "/" },
    { name: "Bookings", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      {/* <div className="flex justify-between bg-blue-500 p-5">
        <span className="text-white font-bold text-lg ">B.Y Bus Service</span>
        <div className="space-x-4">
          <NavLink
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            to="/login"
          >
            Log In
          </NavLink>
        </div>
      </div> */}

      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-gray py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-black mr-1 pt-2">
              <ion-icon name="bus-outline"></ion-icon>
            </span>
            B.Y Bus Service
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden
          "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            {Links.map((Link) => (
              <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={Link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {Link.name}
                </a>
              </li>
            ))}
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 duration-500 text-white font-bold py-2 px-4 rounded ml-10 m-2"
              to="/login"
            >
              Log In
            </NavLink>
            <NavLink
              className="bg-blue-500 hover:bg-blue-700 duration-500 text-white font-bold py-2 px-4 rounded"
              to="/register"
            >
              Register
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
