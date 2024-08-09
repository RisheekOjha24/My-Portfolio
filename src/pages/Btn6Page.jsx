import React from "react";
import styles from "../styles/Btn6Page.module.css";
import movieFront from "../assets/movieFront.png";
import movieList from "../assets/movieList.png";
import hcjs from "../assets/mernImg.jpg";

function Btn6Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles["left-side"]}>
          <h1>Project 3</h1>
          <h2>Movies Library List</h2>
          <img src={movieFront} alt="ok" className={styles["movie-img"]} />
          <div className={styles["btn-div"]}>
            <a href="https://movie-library-red-phi.vercel.app/" target="_blank">
              <p className={styles["btn"]}>Visit Website</p>
            </a>
            <a
              href="https://github.com/RisheekOjha24/MovieLibrary.git"
              target="_blank"
            >
              <p className={styles["btn"]}>View Code</p>
            </a>
          </div>
        </div>
        <div className={styles["right-side"]}>
          <img src={movieList} alt="result" className={styles["list-img"]} />
          <div
            style={{ display: "flex",justifyContent:"flex-end",alignItems:"center" }}
          >
            <h2 style={{ margin: "4px" }}>Technology Used</h2>
            <img src={hcjs} alt="image" className={styles["mern-img"]} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Btn6Page;
