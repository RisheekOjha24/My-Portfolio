import React from "react";
import styles from "../styles/Btn4Page.module.css";
import typingImg from "../assets/typing-speed.png";
import resultImg from "../assets/result.png";
import hcjs from "../assets/hcjs.png";

function Btn4Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles["left-side"]}>
          <h1>Project 1</h1><h2>Typing Speed Test Website</h2>
          <img src={typingImg} alt="ok" className={styles["typing-img"]} />
          <div className={styles["btn-div"]}>
            <a
              href="https://risheekojha24.github.io/Typing_Speed_Test/"
              target="_blank"
            >
              <p className={styles["btn"]}>Visit Website</p>
            </a>
            <a
              href="https://github.com/RisheekOjha24/Typing_Speed_Test"
              target="_blank"
            >
              <p className={styles["btn"]}>View Code</p>
            </a>
          </div>
        </div>
        <div className={styles["right-side"]}>
          <img src={resultImg} alt="result" className={styles["result-img"]} />
          <div
            style={{ display: "flex", alignItems: "center",justifyContent:"flex-end", marginTop: "1rem" }}
          >
            <h2 style={{ margin: "4px" }}>Technology Used</h2>
            <img src={hcjs} alt="image" className={styles["hcjs-img"]} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Btn4Page;
