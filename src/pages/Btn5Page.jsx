import React from "react";
import styles from "../styles/Btn5Page.module.css";
import chatImage from "../assets/chat.png";
import avatarImg from "../assets/avatar.png";
import hcjs from "../assets/mernImg.jpg";

function Btn5Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles["left-side"]}>
          <h1>Project 2</h1>
          <h2>Real Time Chat Application</h2>
          <img src={chatImage} alt="ok" className={styles["chat-img"]} />
          <div className={styles["btn-div"]}>
            <a href="https://live-line.vercel.app" target="_blank">
              <p className={styles["btn"]}>Visit Website</p>
            </a>
            <a
              href="https://github.com/RisheekOjha24/Real_TIme_ChatApp"
              target="_blank"
            >
              <p className={styles["btn"]}>View Code</p>
            </a>
          </div>
        </div>
        <div className={styles["right-side"]}>
          <img src={avatarImg} alt="result" className={styles["avatar-img"]} />
          <div className={styles["mern-box"]}>
            <h2>Technology Used</h2>
            <img src={hcjs} alt="image" className={styles["mern-img"]} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Btn5Page;
