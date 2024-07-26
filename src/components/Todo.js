import React, { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

export default function Todo({ text }) {
  const [cheacked, setCheaked] = useState(false);

  const handleCheacked = () => {
    setCheaked(!cheacked);
  };

  return (
    <div className="p-1 hover:bg-zinc-100">
      <h1
        className={`flex items-center gap-2 ${
          cheacked && "line-through"
        } md:text-[16px] text-[14px]`}
      >
        <span onClick={handleCheacked}>
          {" "}
          {!cheacked ? (
            <p className="text-black cursor-pointer">
              <RiCheckboxBlankCircleLine />
            </p>
          ) : (
            <p className="text-green-700 cursor-pointer">
              <RiCheckboxCircleFill />
            </p>
          )}{" "}
        </span>
        {text}
      </h1>

      <hr className="mt-2"></hr>
    </div>
  );
}
