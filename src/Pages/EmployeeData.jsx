import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmployeeData = () => {
  const data = useSelector((state) => state.Counter.value);
  const navigate = useNavigate();
  const ok = () => {
    navigate("/let");
  };
  return (
    <>
      <div className="container p-4">
        <div>
          <div className="w-full rounded-full">
            <img
              className="w-full h-full rounded-full"
              src={data.photo_url}
              alt="photo"
            />
          </div>
          <h1 className="text-center font-Polksa font-black text-3xl p-3">
            Employee Data
          </h1>
          <div className="font-poppins text-xl text-center font-medium">
            <p>Employee Name: {data.name}</p>
            <p>Employee Position: {data.position}</p>
            <p>Employee Salary: ${data.salary}</p>
            <p>Employee address: {data.address}</p>
            <p>Employee phone: {data.mobile_no}</p>
            <button
              onClick={ok}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact him
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeData;
