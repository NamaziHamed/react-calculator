import { useButtonHandler } from "../store/custom";
import React from "react";

const SmallButton = ({ text, className, key }) => {
  const handleUpdate = useButtonHandler();

  return (
    <div
      key={key}
      className={`flex items-center  justify-center 
    ${className ?? ""}`}
    >
      <button
        onClick={(e) => handleUpdate(e.target.innerText)}
        className="px-5 py-1 bg-slate-500 rounded-full shadow-md shadow-slate-400
         border border-slate-500 hover:border-slate-100 hover:bg-slate-600 hover:shadow-slate-500 text-2xl
        active:bg-slate-700 w-full h-full"
      >
        {text}
      </button>
    </div>
  );
};

export default SmallButton;
