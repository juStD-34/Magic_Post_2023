import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import Fast from "../assets/delivery-truck_758388.png";
import Save from "../assets/delivery_757863.png";
import SuperFast from "../assets/rocket_757879.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Fast}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Fast Delivery</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2-3 Days</p>
            <p className="py-2 border-b mx-8">Most Used</p>
            <p className="py-2 border-b mx-8">Standard</p>
          </div>
          <button className="bg-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <span>
              Start Trial
              <FaArrowRightLong className="inline-block ml-2" />
            </span>
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={SuperFast}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Lightning | Scheduled
          </h2>
          <p className="text-center text-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Highest Priority</p>
            <p className="py-2 border-b mx-8">Scheduled Timeline</p>
            <p className="py-2 border-b mx-8">Fastest</p>
          </div>
          <button className="bg-black text-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <span>
              Start Trial
              <FaArrowRightLong className="inline-block ml-2" />
            </span>
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Save}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Economic</h2>
          <p className="text-center text-4xl font-bold">$99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">No weight limited</p>
            <p className="py-2 border-b mx-8">Time-free</p>
            <p className="py-2 border-b mx-8">Low Cost</p>
          </div>
          <button className="bg-blue-400 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <span>
              Start Trial
              <FaArrowRightLong className="inline-block ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
