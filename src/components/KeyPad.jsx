import React from "react";
import SmallButton from "./SmallButton";

const btnNames = [
  "AC",
  "del",
  "/",
  "*",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  ".",
  "0",
  "=",
];

const handleclass = (num)=>{
  switch(num){
    case "+": return "row-span-2"
    case "=":return "col-span-2"
    default: return ""
  }
}

const KeyPad = () => {
  return (
    <div className="p-3 m-3 grid grid-cols-4 grid-rows-5 gap-3 h-full">
      {btnNames.map((number,id) => (
        <SmallButton
          text={number}
          key={id}
          className={handleclass(number)}
        />
      ))}
    </div>
  );
};

export default KeyPad;
