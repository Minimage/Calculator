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

  const addition = () => {
    if (toggle == true) {
      setScreen(Number(screen) + Number(remember));
    } else {
      setRemember(screen);
      setScreen(0);
      setToggle(true);
      setAdd(true);
      setSub(false);
      setDiv(false);
      setMulty(false);
    }
  };

  const subtraction = () => {
    if (toggle == true) {
      setScreen(Number(screen) - Number(remember));
    } else {
      setRemember(screen);
      setScreen(0);
      setToggle(true);
      setAdd(false);
      setSub(true);
      setDiv(false);
      setMulty(false);
    }
  };

  const handleClick0 = () => {
    screen === 0 ? setScreen(0) : setScreen(String(screen) + 0);
    Number(Screen);
  };

  const handleClick1 = () => {
    screen === 0 ? setScreen(1) : setScreen(String(screen) + 1);
    Number(Screen);
  };

  const handleClick2 = () => {
    screen === 0 ? setScreen(2) : setScreen(String(screen) + 2);
    Number(Screen);
  };

  const handleClick3 = () => {
    if (toggle == true) {
      setScreen(3 + screen);
    } else {
      screen === 0 ? setScreen(3) : setScreen(String(screen) + 3);
      Number(Screen);
    }
  };

  const handleClick4 = () => {
    screen === 0 ? setScreen(4) : setScreen(String(screen) + 4);
    Number(Screen);
  };

  const handleClick5 = () => {
    screen === 0 ? setScreen(5) : setScreen(String(screen) + 5);
    Number(Screen);
  };

  const handleClick6 = () => {
    screen === 0 ? setScreen(6) : setScreen(String(screen) + 6);
    Number(Screen);
  };

  const handleClick7 = () => {
    screen === 0 ? setScreen(7) : setScreen(String(screen) + 7);
    Number(Screen);
  };

  const handleClick8 = () => {
    screen === 0 ? setScreen(8) : setScreen(String(screen) + 8);
    Number(Screen);
  };

  const handleClick9 = () => {
    screen === 0 ? setScreen(9) : setScreen(String(screen) + 9);
    Number(Screen);
  };

  return (
    <div className="App">
      <div className="container" style={{ maxWidth: "350px" }}>
        <div className="row">
          <div className="col screen">{screen}</div>
        </div>
        <div className="row functions">
          <div
            className="col btn main"
            onClick={() => {
              setScreen(0);
              setToggle(false);
            }}
          >
            AC
          </div>
          <div className="col btn main">-/+</div>
          <div className="col btn main">%</div>
          <div className="col btn operation">/</div>
        </div>
        <div className="row">
          <div
            className="col btn main"
            onClick={() => {
              handleClick7();
            }}
          >
            7
          </div>
          <div
            className="col btn main"
            onClick={() => {
              handleClick8();
            }}
          >
            8
          </div>
          <div
            className="col btn main"
            onClick={() => {
              handleClick9();
            }}
          >
            9
          </div>
          <div className="col btn operation">x</div>
        </div>

        <div className="row">
          <div
            className="col btn main"
            onClick={() => {
              handleClick4();
            }}
          >
            4
          </div>
          <div
            className="col btn main"
            onClick={() => {
              handleClick5();
            }}
          >
            5
          </div>
          <div
            className="col btn main"
            onClick={() => {
              handleClick6();
            }}
          >
            6
          </div>
          <div
            className="col btn operation"
            onClick={() => {
              subtraction();
            }}
          >
            -
          </div>
        </div>

        <div className="row">
          <div
            className="col btn main"
            onClick={() => {
              handleClick1();
            }}
          >
            1
          </div>

          <div
            className="col btn main"
            onClick={() => {
              handleClick2();
            }}
          >
            2
          </div>

          <div
            className="col btn main"
            onClick={() => {
              handleClick3();
            }}
          >
            3
          </div>
          <div
            className="col btn operation"
            onClick={() => {
              addition();
            }}
          >
            +
          </div>
        </div>

        <div className="row">
          <div
            className="col-6 btn main"
            onClick={() => {
              handleClick0();
            }}
          >
            0
          </div>
          <div className="col btn main">.</div>
          <div
            className="col btn operation"
            onClick={() => {
              if (add == true) {
                setRemember(setScreen(Number(screen) + Number(remember)));
                setAdd(false);
              } else if (sub == true) {
                setRemember(setScreen(Number(remember) - Number(screen)));
                setSub(false);
              }
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}
