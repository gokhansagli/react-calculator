import { useState } from "react";

import "./App.css";
import Indicator from "./components/Indicator";
import Numbers from "./components/Numbers";

function App() {
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState(number);
  const [operation, setOperation] = useState();

  const buttons = [
    9,
    8,
    7,
    "del",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "*",
    "reset",
    "=",
  ];

  const calculator = (num) => {
    if (number === "0" && typeof num === "string" && num !== ".") {
      if (num === "reset") resetCalculator();
      return;
    }

    if (number == "0" && num != ".") {
      setNumber(String(num));
      return;
    }

    if (typeof num == "number" || num == ".") {
      if (number.includes(".") && num == ".") {
        return;
      } else {
        setNumber(String(number) + String(num));
      }

      return;
    }

    if (typeof num == "string") {
      switch (num) {
        case "+":
          setPreviousNumber(number);
          setOperation("+");
          setNumber("0");
          return;

        case "-":
          setPreviousNumber(number);
          setOperation("-");
          setNumber("0");
          return;

        case "*":
          setPreviousNumber(number);
          setOperation("*");
          setNumber("0");
          return;

        case "/":
          setPreviousNumber(number);
          setOperation("/");
          setNumber("0");
          return;

        case "=":
          if (operation === "+")
            setNumber(Number(previousNumber) + Number(number));
          if (operation === "-")
            setNumber(Number(previousNumber) - Number(number));
          if (operation === "*")
            setNumber(Number(previousNumber) * Number(number));
          if (operation === "/")
            setNumber(Number(previousNumber) / Number(number));

          setOperation(null);
          return;

        case "del": {
          const deleteNum = number.slice(0, -1);
          if (deleteNum === "") {
            setNumber("0");
          } else {
            setNumber(deleteNum);
          }

          return;
        }

        case "reset":
          resetCalculator();
          return;

        default:
          break;
      }
    }
  };

  const resetCalculator = () => {
    setNumber("0");
    setPreviousNumber(0);
  };

  return (
    <div className="container">
      <div className="calculator">
        <Indicator total={number} previousNumber={previousNumber} />
        <Numbers
          buttons={buttons}
          calculator={calculator}
          reset={resetCalculator}
        />
      </div>
    </div>
  );
}

export default App;
