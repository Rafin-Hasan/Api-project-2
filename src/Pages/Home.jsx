import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import sell from "../assets/Animation/discount.json";

function animation() {
  useEffect(() => {
    Aos.init();
  });
}
const Home = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("/laptop");
  };
  return (
    <>
      <div className="container w-96">
        <Lottie animationData={sell} loop={true} />
        <div className="btn container flex justify-end">
          <button
            onClick={change}
            className="bg-[#0F67B1] text-white p-3 font-poppins font-bold rounded-tl-3xl rounded-br-3xl hover:bg-white hover:text-black border-solid border-black hover:border-2 active:scale-105"
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
