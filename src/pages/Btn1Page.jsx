import React from 'react'
import styles from "../styles/Btn1Page.module.css";
import solidCircle from "../assets/solidCircle.png"
import arc from "../assets/arc.png"
import bigCircle from "../assets/bigCircle.png";
import myImage from "../assets/my-image-Photoroom.png";

function Btn1Page() {
  return (
    <div className={styles.Box}>
      <div className={styles["left-part"]}>
        <div className={styles["centre-part"]}><h1>Hello<span>,</span>
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

      <div className={styles["right-part"]}>
        <img
          src={bigCircle}
          alt="big circle"
          className={styles["big-circle"]}
        />
        <img
          src={solidCircle}
          alt="image of circle"
          className={styles["solid-circle"]}
        />
        <img src={myImage} alt="my image" className={styles["my-image"]} />
        <img src={arc} alt="an arc" className={styles["arc"]} />
        <img src={arc} alt="an arc" className={`${styles["arc"]} ${styles["arc2"]}`} />
      </div>
    </div>
  );
}

export default Btn1Page