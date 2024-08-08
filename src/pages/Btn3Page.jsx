import React from 'react'
import styles from "../styles/Btn3Page.module.css";
import elephant from "../assets/elephant.jpeg";
import {NavLink} from "react-router-dom";
import certificate from "../assets/certificate.pdf"

function Btn3Page() {
  return (
    <div className={styles.Box}>
      <div class="left-placeholder2"></div>
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
                <a
                  href={certificate}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    padding: "8px",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </div>
            </div>

            <div>
              <h2>
                Amazon ML Summer School <br />
                July 6, 2024 – July 28, 2024
              </h2>
              <p>
                During my training with Amazon Data Scientists, I learned the
                fundamentals of machine learning and how to apply them to
                practical techniques like supervised learning, deep neural
                networks, probabilistic graphical models, dimensionality
                reduction, unsupervised learning, and sequential models
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