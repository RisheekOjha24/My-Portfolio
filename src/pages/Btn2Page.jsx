import React from 'react'; 
import styles from "../styles/Btn2Page.module.css";
import Tilt from "react-parallax-tilt";
import transCircle from "../assets/transCircle.png";
import boyStudy from "../assets/studyBoy.png";

function Btn2Page() {

   return (
    
    <div className={styles.Box}>
      <div className={styles["left-part"]}>
        <div className={styles["centre-part"]}>
          <h1>Education</h1>
          <div className={styles["education-content"]}>
            <div>
              <h2 className="timeline1">
                B.tech (Computer Science) <span>2021-2025</span>
              </h2>
              <h2>GLA University, Mathura, Uttar Pradesh</h2>
              <p>Percentage: 81.5%</p>
            </div>

            <br />

            <div>
              <h2>
                Intermediate <span>2020-2021</span>
              </h2>
              <h2>Jay Jyoti School, Rewa, Madhya Pradesh</h2>
              <p>Percentage: 85.2%</p>
            </div>

            <br />

            <div>
              <h2>
                High School <span>2018-2019</span>
              </h2>
              <h2>Jay Jyoti School, Rewa, Madhya Pradesh</h2>
              <p>Percentage: 87.2%</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["right-part"]}>
        <Tilt
          className={styles["tilt"]}
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
        >
          <img src={boyStudy} alt="done" className={styles["boy-img"]} />
        </Tilt>
      </div>
    </div>
  );
}

export default Btn2Page