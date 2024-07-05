import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.Counter.value);

  // Calculate the total price including 15% VAT
  const totalPrice = data.price * 1.15;

  const done = () => {
    navigate("/order");
  };

  const back = () => {
    navigate("/laptop");
  };

  return (
    <>
      <div className="flex flex-col h-[100vh] justify-center items-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg ">
        <div>
          <h1 className="text-3xl font-Polksa font-bold p-3">
            Are you sure you want to buy {data.name}
          </h1>
          <h2 className="text-xl font-poppins font-bold p-3 flex justify-end">
            main price{" "}
            <span className="text-green-500 pl-1">{data.price}$</span>
          </h2>
          <h2 className="text-xl font-poppins font-bold p-3 flex justify-end">
            with <span className="text-red-700 px-1">15%</span> VAT total price
            is{" "}
            <span className="text-red-500 pl-1">{totalPrice.toFixed(2)}$</span>
          </h2>
        </div>
        <div>
          <button
            onClick={done}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Buy now
            </span>
          </button>
          <button
            onClick={back}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Not now
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirm;
