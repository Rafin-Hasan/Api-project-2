import { isAction } from "@reduxjs/toolkit";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <div className=" bg-[#0F67B1] p-5 ">
        <div className="main_manu container flex justify-between">
          <div className="logo">
            <img
              className="w-10"
              src="https://cdn.dribbble.com/users/46315/screenshots/2080616/open-uri20150527-11-j5oul2"
              alt="Logo"
            />
          </div>
          <div className="manu">
            <ul className="flex flex-wrap gap-4 font-poppins font-semibold text-white ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#3FA2F6] to-[#0F67B1] text-black hover:text-white"
                      : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#3FA2F6] to-[#0F67B1] text-black hover:text-white"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#3FA2F6] to-[#0F67B1] text-black hover:text-white"
                      : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#3FA2F6] to-[#0F67B1] text-black hover:text-white"
                  }
                  to="/employees"
                >
                  Employees
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#3FA2F6] to-[#0F67B1] text-black hover:text-white"
                      : "px-[19px] gap-[3px] h-10 rounded-lg bg-[#fff] flex items-center hover:bg-gradient-to-r from-[#3FA2F6] to-[#0F67B1] text-black hover:text-white"
                  }
                  to="/laptop"
                >
                  Laptop
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navber;
