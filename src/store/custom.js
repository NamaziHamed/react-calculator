import { useDisplayStore } from "./store";

export const useButtonHandler = () => {
  const { updateDisplay, resetDisplay, delChar, evaluateExpression } = useDisplayStore();

  const handleUpdate = (value) => {
    switch (value) {
      case "=":
        evaluateExpression();
        break;
      case "del":
        delChar();
        break;
      case "AC":
        resetDisplay();
        break;
      default:
        updateDisplay(value);
    }
  };

  return handleUpdate;
};
