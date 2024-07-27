import React, { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

import { toggled, colorselected, deleted } from "../redux/todos/action";

import { FaRegCircle } from "react-icons/fa6";
import { BsCircleFill } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const { text, id, color, completed } = todo;

  const dispatch = useDispatch();

  const handleStatusChange = (todoId) => {
    dispatch(toggled(todoId));
  };

  const handleColorChanged = (todoId, color) => {
    dispatch(colorselected(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleted(todoId));
  };

  return (
    <div className=" hover:bg-zinc-100 ">
      <div className="flex items-center justify-between w-full p-1">
        <h1
          className={`flex items-center gap-2 ${
            completed && "line-through"
          } md:text-[16px] text-[14px]`}
        >
          <span onClick={() => handleStatusChange(id)}>
            {" "}
            {completed ? (
              <p className="text-green-700 cursor-pointer">
                <RiCheckboxCircleFill />
              </p>
            ) : (
              <p className="text-black cursor-pointer">
                <RiCheckboxBlankCircleLine />
              </p>
            )}{" "}
          </span>
          {text}
        </h1>

        <div>
          <ul className="flex items-center justify-center gap-1 text-[12px] md:text-[14px]">
            <li
              onClick={() => handleColorChanged(id, "green")}
              className="text-green-600 cursor-pointer"
            >
              {color === "green" ? <BsCircleFill /> : <FaRegCircle />}
            </li>
            <li
              onClick={() => handleColorChanged(id, "yellow")}
              className="text-yellow-500 cursor-pointer"
            >
              {color === "yellow" ? <BsCircleFill /> : <FaRegCircle />}
            </li>
            <li
              onClick={() => handleColorChanged(id, "red")}
              className="text-red-600 cursor-pointer"
            >
              {color === "red" ? <BsCircleFill /> : <FaRegCircle />}
            </li>
            <li onClick={() => handleDelete(id)} className="cursor-pointer">
              <RxCrossCircled />
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-2"></hr>
    </div>
  );
}
