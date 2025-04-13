import React from "react";
import KeyPad from "./KeyPad";
import { useDisplayStore } from "../store/store";



const Interface = () => {
  const displayValue = useDisplayStore((state)=>state.display)

  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center">
      <div className="max-w-[600px] border bg-slate-950 text-white p-5">
        <h1 className="text-center text-4xl">React Calculator</h1>
        <div className="display w-full h-16 bg-slate-500 rounded-2xl mt-3
        flex items-center p-3">{displayValue}</div>
        <KeyPad />
        <p className="font-semibold">Codex by Hamed</p>
        <p>&reg; All rights reserved</p>
      </div>
    </main>
  );
};

export default Interface;
