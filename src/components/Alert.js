import React from "react";
import { RxCrossCircled } from "react-icons/rx";

export default function Alert({ peep, handleRemove }) {
  return (
    <button onClick={handleRemove} className="flex items-center gap-4 bg-green-500 p-3 rounded-md text-zinc-900 font-semibold absolute top-1 right-0 shadow-md z-50">
      {peep}{" "}
      <span  className="text-red-600">
        {" "}
        <RxCrossCircled />
      </span>
    </button>
  );
}
