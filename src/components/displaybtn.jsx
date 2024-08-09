import React from "react";
import { Link } from "react-scroll";

function Displaybtn({ btn }) {
  return (
    <div className="btnContainer">
      {btn.map((ele, index) => (
        <Link
          key={index}
          to={ele}
          smooth={true}
          duration={500}
          offset={-50} // Adjust as needed
          spy={true} // Enable active class based on viewport
          activeClass="active" // Class to apply when the section is in view
        >
          <div className="btn">
            {index + 1}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Displaybtn;
