import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";

export default function TodoFooter() {
  const [color, setColor] = useState("");

  const handleColorChange = (color, uid) => {
    setColor(color);
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-[12px] md:text-[15px] text-gray-800">2 tasks left</p>
      <div className="flex items-center justify-center gap-2">
        <ul className="flex items-center justify-center gap-[5px] text-[12px] md:text-[15px] text-gray-800">
          <li className="font-semibold">All</li>
          <li>|</li>
          <li className="cursor-pointer">Incomplete</li>
          <li>|</li>
          <li className="cursor-pointer">Complete</li>
        </ul>
        {/* color */}
        <div>
          <ul className="flex items-center justify-center gap-[5px] text-[12px] md:text-[15px] ">
            <li
              onClick={() => handleColorChange("green")}
              className="cursor-pointer"
            >
              <span className="text-green-700">
                {color === "green" ? <BsCircleFill /> : <FaRegCircle />}
              </span>
            </li>
            <li
              onClick={() => handleColorChange("red")}
              className="cursor-pointer text-red-700"
            >
              {color === "red" ? <BsCircleFill /> : <FaRegCircle />}
            </li>
            <li
              onClick={() => handleColorChange("yellow")}
              className="cursor-pointer text-yellow-500"
            >
              {color === "yellow" ? <BsCircleFill /> : <FaRegCircle />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
