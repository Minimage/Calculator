import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = useState(0);
  const [second, setSecond] = useState(0);
  const [remember, setRemember] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [add, setAdd] = useState(false);
  const [sub, setSub] = useState(false);
  const [multy, setMulty] = useState(false);
  const [div, setDiv] = useState(false);

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
  ];

  // const addition = () => {
  //   if (toggle == true) {
  //     setScreen(Number(screen) + Number(remember));
  //   } else {
  //     setRemember(screen);
  //     setScreen(0);
  //     setToggle(true);
  //     setAdd(true);
  //     setSub(false);
  //     setDiv(false);
  //     setMulty(false);
  //   }
  // };

  // const subtraction = () => {
  //   if (toggle == true) {
  //     setScreen(Number(screen) - Number(remember));
  //   } else {
  //     setRemember(screen);
  //     setScreen(0);
  //     setToggle(true);
  //     setAdd(false);
  //     setSub(true);
  //     setDiv(false);
  //     setMulty(false);
  //   }
  // };

  return (
    <div className="App">
      <div className="container" style={{ maxWidth: "350px" }}>
        <div className="row">
          {/* <div className="col screen">{screen}</div> */}
        </div>
        <div className="row functions">
          <div
            className="col btn main"
            onClick={() => {
              setScreen(0);
              setToggle(false);
            }}
          ></div>
        </div>

        {btnValues.flat().map((btn, i) => {
          return (
            <div>
              <div
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              ></div>

              <div>{btn}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
