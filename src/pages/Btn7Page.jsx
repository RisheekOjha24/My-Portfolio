import React from "react";
import { AiFillLinkedin } from "react-icons/ai"; // Import LinkedIn icon from react-icons
import { MdEmail } from "react-icons/md";
import profileImage from "../assets/babyPanda.jpeg"; 
function Btn7Page() {
  const handleEmailClick = () => {
    window.location.href = "mailto:risheekojha@gmail.com";
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "40px" }}>Contact Me</h1>
        <p style={{ fontSize: "25px",fontFamily:"Montserrat" }}>
          Feel free to contact me via email or LinkedIn:
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px", // Add margin at the bottom for spacing
        }}
      >
        {/* Image */}
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: "340px", // Adjust image width as needed
            // height: "340px", // Adjust image height as needed
            borderRadius: "50%", // Make image circular
            marginRight: "20px", // Add margin between image and icons
          }}
        />
        {/* Icons */}
        <a
          href="https://www.linkedin.com/in/risheekojha/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "10px" }}
        >
          <AiFillLinkedin size={30} />
        </a>
        <MdEmail
          onClick={handleEmailClick}
          style={{ cursor: "pointer", fontSize: "30px" }}
        />
      </div>
      <div style={{ textAlign: "center", fontSize: "24px" }}></div>
    </div>
  );
}

export default Btn7Page;
