import React, { useState } from "react";
import "./app.css";
import Displaybtn from "./components/displaybtn";
import Btn1Page from "./pages/Btn1Page";
import Btn2Page from "./pages/Btn2Page";
import Btn3Page from "./pages/Btn3Page";
import Btn4Page from "./pages/Btn4Page";
import Btn5Page from "./pages/Btn5Page";
import Btn6Page from "./pages/Btn6Page";
import Btn7Page from "./pages/Btn7Page";
import { Element } from "react-scroll";

const HomePage = () => {
  const btn = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"];
  const [btnVal, setBtnVal] = useState("btn1");

  const stateChangeBtn = (ele) => {
    setBtnVal(ele);
  };

  return (
    <div className={"btndiv"}>
      <div className="btnNav">
        <Displaybtn btn={btn} stateChangeBtn={stateChangeBtn} btnVal={btnVal} />
      </div>
      <div className="left-placeholder"></div>
      <div className="btnContent">
        <Element name="btn1" className="element">
          <Btn1Page />
        </Element>
        <Element name="btn2" className="element">
          <Btn2Page />
        </Element>
        <Element name="btn3" className="element">
          <Btn3Page />
        </Element>
        <Element name="btn4" className="element">
          <Btn4Page />
        </Element>
        <Element name="btn5" className="element">
          <Btn5Page />
        </Element>
        <Element name="btn6" className="element">
          <Btn6Page />
        </Element>
        <Element name="btn7" className="element">
          <Btn7Page />
        </Element>
      </div>
    </div>
  );
};

export default HomePage;
