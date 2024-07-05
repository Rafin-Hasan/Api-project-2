import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="flex w-full h-[100vh] flex-col justify-center items-center">
      <img
        src="https://cliply.co/wp-content/uploads/2020/03/422003450_404_UFO_400px.gif"
        alt="404 page not found"
      />
      <button
        onClick={goHome}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Buy now
        </span>
      </button>
    </div>
  );
};

export default NotFound;
