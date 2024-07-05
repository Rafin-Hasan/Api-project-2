import React from "react";
import Lottie from "lottie-react";
import ok from "../assets/Animation/let.json";

const Let = () => {
  return (
    <div className=" h-[100vh] flex flex-col justify-center items-center">
      <Lottie animationData={ok} loop={true} />
      <h2 className="font-Polksa font-bold text-4xl">We will let you soon!</h2>
    </div>
  );
};

export default Let;
