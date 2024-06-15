import React from 'react'

function Displaybtn(obj) {

const {btn,stateChangeBtn,btnVal}=obj;

  return (
    <div className="btnContainer">
      {btn.map((ele, index) => {
        return (
          <div
            className={btnVal === ele ? "active" : "btn"}
            key={index}
            id={ele}
            onClick={() => stateChangeBtn(ele)}
          >
         
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}

export default Displaybtn