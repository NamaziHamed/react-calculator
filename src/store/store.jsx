import { create } from "zustand";
import { evaluate } from "mathjs";

const operators = ["+", "-", "*", "/"];

export const useDisplayStore = create((set) => ({
  display: "",

  updateDisplay: (amount) =>
    set((state) => {
      const lastChar = state.display.slice(-1);

      const isLastCharOperator = operators.includes(lastChar);

      if (isLastCharOperator && lastChar !== "-" && amount === "-") {
        return { display: state.display + amount };
      }

      if (isLastCharOperator && operators.includes(amount)) {
        return state;
      }

      return { display: state.display + amount };
    }),

  resetDisplay: () => set(() => ({ display: "" })),
  delChar: () => set((state) => ({ display: state.display.slice(0, -1) })),
  evaluateExpression: () =>
    set((state) => {
      try {
        const result = evaluate(state.display);
        return { display: result.toString() };
      } catch (error) {
        console.error("Invalid expression:", error);
        return state;
      }
    }),
}));



