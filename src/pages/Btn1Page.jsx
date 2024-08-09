import React from "react";
import styles from "../styles/Btn1Page.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional: for blur effect
import myImage from "../assets/myImage.jpg";
import Spinner from "../components/Spinner"; // Import a Spinner component

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
        <div className={styles.BigCircle}>
          <LazyLoadImage
            src={myImage}
            alt="my image"
            className={styles.MyImage}
            effect="blur" // Optional: adds a blur effect while loading
            placeholder={<Spinner />} // Shows spinner while image is loading
          />
        </div>
      </div>
    </div>
  );
}

export default Btn1Page;
