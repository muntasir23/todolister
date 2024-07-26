import React from "react";
import { LuListTodo } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";

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
        <button className="font-semibold text-zinc-900 bg-yellow-300 border-2 border-yellow-200 px-5 py-1 rounded-3xl">
          <RxAvatar />
        </button>
      </div>
    </div>
  );
}
