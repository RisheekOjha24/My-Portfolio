import React from 'react'
import styles from "../styles/Btn3Page.module.css";
import elephant from "../assets/elephant.jpeg";
import {NavLink} from "react-router-dom";

function Btn3Page() {
  return (
    <div className={styles.Box}>
      <div className={styles["left-part"]}>
        <div className={styles["centre-part"]}>
          <h1>Experience</h1>
          <div className={styles["exp-div"]}>
            <div>
              <h2>Training Experience</h2>
              <h2>
                Job Oriented Value-Added Course, GLA University,
                <br />
                June 2023 - August 2023
              </h2>

              <ul>
                Trainee
                <li>Learnt basics SQL, MongoDB with security Assurance</li>
                <li>
                  Post Completing the training, Developed Personal Portfolio
                  Website
                </li>
              </ul>
              <div className={styles["link-style"]}>
                <NavLink
                  to="/certificate"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    padding: "8px",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </NavLink>
              </div>
            </div>

            <div>
              <h2>Experience with MERN Stack</h2>
              <p>
                During my journey in web development, I have immersed myself in
                the world of modern technologies, particularly focusing on the
                MERN stack, through various projects and hands-on experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["right-part"]}>
        <img
          src={elephant}
          alt="elephant img"
          className={styles["ele-img"]}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Btn3Page