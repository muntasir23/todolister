import React from "react";
import { LuListTodo } from "react-icons/lu";
import avatar from "../assets/avatar.jpg";

export default function Nav() {
  return (
    <div className="bg-orange-500 w-[100%] grid place-items-center md:p-2 p-3 sticky top-0 z-50">
      <div className="md:w-[950px] w-[100%] flex justify-between">
        <h1 className="md:text-[20px]  text-[18px] font-bold text-orange-100 flex items-center justify-center gap-2">
          {" "}
          <span className="text-yellow-300">
            {" "}
            <LuListTodo />
          </span>
          Todo Lister
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <img
              alt=""
              src={avatar}
              className="h-[100%] w-[100%] rounded-full"
            />
          </div>
          <p className="text-[17px] font-semibold text-yellow-300 visible">
            Mahafuz Ahamed
          </p>
        </div>
      </div>
    </div>
  );
}
