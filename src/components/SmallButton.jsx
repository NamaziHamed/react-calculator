import React from "react";
import { useDisplayStore } from "../store/store";
import { evaluate } from 'mathjs';

const SmallButton = ({ text, className, key }) => {
  const display = useDisplayStore((state) => state.display);
  const updateDisplay = useDisplayStore((state) => state.updateDisplay);

  const handleUpdate = (e) => {
    const value = e.target.innerText;
    switch (value) {
      case "=": {
        try {
          const result = evaluate(display);
          updateDisplay(result);
          break
        } catch {
          updateDisplay("Wrong entry");
        }
      }
      case "AC":
        return "";
      case "del":
        return "";
      default:
        updateDisplay(value);
    }
  };

  return (
    <div
      key={key}
      className={`flex items-center  justify-center 
    ${className ?? ""}`}
    >
      <button
        onClick={handleUpdate}
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
