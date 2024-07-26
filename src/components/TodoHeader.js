import React, { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { GoPlusCircle } from "react-icons/go";
import { LuCheckCheck } from "react-icons/lu";

export default function TodoHeader() {
  
  const [text, setText] = useState("");

  const handleTextchange = (e) =>{
    setText(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(text);
    setText("")
  }

  return (
    <div className="w-[100%] rounded">
      <form onSubmit={handleSubmit} className="bg-zinc-200 p-2 flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <label htmlFor="textInput" className="text-[24px]">
            <LiaClipboardListSolid />
          </label>

          <input
            id="textInput"
            onChange={handleTextchange}
            className="bg-zinc-200 h-full md:w-[400px] p-2 outline-none"
            placeholder="Type your todo"
            value={text}
          />
        </div>
        <div className="text-[22px] font-bold">
          <button type="submit">
            <GoPlusCircle />
          </button>
        </div>
      </form>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-gray-800 md:text-[15px] text-[12px] cursor-pointer flex items-center justify-center gap-1"> <LuCheckCheck /> Complete All Taks</h3>
        <h3 className="text-gray-800 md:text-[15px] text-[12px] cursor-pointer">Clear completed</h3>
      </div>
      <hr className="mt-4"></hr>
    </div>
  );
} 
