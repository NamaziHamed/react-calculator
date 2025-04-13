import { create } from "zustand";


export const useDisplayStore = create((set)=>({
    display : "",
    updateDisplay: (amount)=>set(state=>({display: state.display + amount}))
}))
