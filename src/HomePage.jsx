import React, { useEffect, useState } from "react";
import "./app.css";
import Displaybtn from "./components/displaybtn";
import ovalRing from "./assets/oval1.png";

import Btn1Page from "./pages/Btn1Page";
import Btn2Page from "./pages/Btn2Page";
import Btn3Page from "./pages/Btn3Page";
import Btn4Page from "./pages/Btn4Page";
import Btn5Page from "./pages/Btn5Page";
import Btn6Page from "./pages/Btn6Page";
import Btn7Page from "./pages/Btn7Page";

const HomePage = () => {
  const btn = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"];

  const [btnVal, setBtnVal] = useState();
  useEffect(() => {
    setBtnVal("btn1");
  }, []);

  function displaybtnData(ele) {
    switch (btnVal) {
      case "btn1":
        return <Btn1Page />;
      case "btn2":
        return <Btn2Page />;
      case "btn3":
        return <Btn3Page />;
      case "btn4":
        return <Btn4Page />;
      case "btn5":
        return <Btn5Page />;
      case "btn6":
        return <Btn6Page/>
      case "btn7":
        return <Btn7Page/>
      default:
        return null;
    }
  }

  const stateChangeBtn = (ele) => {
    setBtnVal(ele);
  };

  return (
    <>
      <div className={"btndiv"}>
        <div className="btnNav">
          <Displaybtn
            btn={btn}
            stateChangeBtn={stateChangeBtn}
            btnVal={btnVal}
          />
        </div>

        <div className="ring">
          <img src={ovalRing} alt="" />
        </div>

        <div className="btnContent">{displaybtnData(btnVal)}</div>
      </div>
    </>
  );
};

export default HomePage;
