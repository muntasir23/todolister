import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChange, statusChange } from "../redux/filters/aciton";

const numberOfTodos = (noOfTodos) => {
  switch (noOfTodos) {
    case 0:
      return "task";
    case 1:
      return "task";

    default:
      return "tasks";
  }
};

export default function TodoFooter() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const { status, colors } = filters;

  const todosRemaning = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChange(color, "removed"));
      // console.log(colors)
    } else {
      dispatch(colorChange(color, "added"));
      // console.log(colors)
    }
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <p className="text-[12px] md:text-[15px] text-gray-800">
        {todosRemaning} {numberOfTodos(todosRemaning)} left
      </p>
      <div className="flex items-center justify-center gap-2">
        <ul className="flex items-center justify-center gap-[5px] text-[12px] md:text-[15px] text-gray-800">
          <li
            onClick={() => handleStatusChange("All")}
            className={`${status === "All" && "font-semibold"} cursor-pointer`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("Incomplete")}
            className={`${
              status === "Incomplete" && "font-semibold"
            } cursor-pointer`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("Complete")}
            className={`${
              status === "Complete" && "font-semibold"
            } cursor-pointer`}
          >
            Complete
          </li>
        </ul>
        {/* color */}
        <div>
          <ul className="flex items-center justify-center gap-[5px] text-[12px] md:text-[15px] ">
            <li
              onClick={() => handleColorChange("green")}
              className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                colors.includes("green") && "bg-green-500"
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("red")}
              className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
                colors.includes("red") && "bg-red-500"
              }`}
            ></li>
            <li
              onClick={() => handleColorChange("yellow")}
              className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
                colors.includes("yellow") && "bg-yellow-500"
              }`}
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
