import React, { useEffect } from "react";
import Interface from "./components/Interface";
import { useButtonHandler } from "./store/custom";
const list = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "/",
  "-",
  "+",
  "*",
  "Delete",
  "Enter",
  "Backspace",
];

const App = () => {
  const handleUpdate = useButtonHandler();

  useEffect(() => {
    const keypressListener = (e) => {
      const value = e.key;
      if (list.includes(value)) {
        switch (value) {
          case "Enter":
            handleUpdate("=");
            break;
          case "Delete":
            handleUpdate("AC");
            break;
          case "Backspace":
            handleUpdate("del");
            break;
          default:
            handleUpdate(value);
            break;
        }
      }
    };

    document.addEventListener("keydown", keypressListener);

    return () => {
      document.removeEventListener("keydown", keypressListener);
    };
  }, [handleUpdate]);

  return <Interface />;
};

export default App;
