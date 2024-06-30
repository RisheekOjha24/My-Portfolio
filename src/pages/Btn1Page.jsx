import React from "react";
import styles from "../styles/Btn1Page.module.css";
import myImage from "../assets/myImage.jpg";

function Btn1Page() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftPart}>
        <div className={styles.CentrePart}>
          <h1>
            Hello<span>,</span>
          </h1>
          <h2>I'm Risheek Ojha</h2>
          <br />
          <p>
            A passionate Full Stack developer, expertise in the MERN (MongoDB,
            Express.js, React.js, Node.js) stack. With a blend of frontend and
            backend skills, I thrive on creating dynamic and responsive web
            solutions. Here's a bit more about my journey and what I bring to
            the table.
          </p>
        </div>
      </div>

      <div className={styles.RightPart}>
        <div alt="big circle" className={styles.BigCircle}>
          <img src={myImage} alt="my image" className={styles.MyImage} />
        </div>
      </div>
    </div>
  );
}

export default Btn1Page;
