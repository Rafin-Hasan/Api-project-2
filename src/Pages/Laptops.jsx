import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProductData } from "../Slice/CounterSlice";
import Aos from "aos";
import "aos/dist/aos.css";

const Laptops = () => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    axios("https://api.jsonbin.io/v3/b/667425e1e41b4d34e406309a").then((res) =>
      setProductData(res.data.record)
    );
  }, []);
  const handleadd = (add) => {
    navigate("/cart");
    dispatch(singleProductData(add));
  };
  const details = (send) => {
    navigate("/details");
    dispatch(singleProductData(send));
  };
  return (
    <>
      <div className="container p-5">
        <div className="main-row flex flex-wrap gap-5 justify-center">
          {productData.map((item, i) => (
            <div
              data-aos="fade-down"
              key={i}
              className="single-card w-[250px] h-[400px] bg-[#3FA2F6] rounded-tl-3xl rounded-br-3xl p-5 hover:bg-white hover:text-black border-solid hover:border-2 border-[#3FA2F6] hover:scale-90 shadow-[0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)]"
            >
              <div className="photo w-full h-[150px] overflow-hidden">
                <img className="w-full h-full" src={item.image} alt="photo" />
              </div>
              <div className=" mt-1 list-disc p-5 h-[200px] ">
                <h3 className=" font-poppins font-bold"> {item.name}</h3>
                <p>Brand : {item.brand}</p>
                <p>Display : {item.display_size}</p>

                <div className="btn flex gap-1 items-center mt-2 mb-2">
                  <button
                    onClick={() => details(item)}
                    className="w-full h-[40px] font-poppins font-semibold text-white bg-[#0F67B1] p-3 flex justify-center items-center gap-2 rounded-tl-3xl hover:bg-white hover:text-black border-solid border-[#0F67B1] hover:border-2"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleadd(item)}
                    className="w-full h-[40px] font-poppins font-semibold text-white bg-[#0F67B1] p-3 flex justify-center items-center gap-2 rounded-br-3xl hover:bg-white hover:text-black border-solid border-[#0F67B1] hover:border-2"
                  >
                    Add to cart
                  </button>
                </div>
                <h1 className="text-[22px] font-bold text-red-600 text-center mb-4">
                  Price :{item.price}$
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Laptops;
