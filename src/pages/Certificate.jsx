import React from "react";
import pdfURL from "../assets/certificate.pdf";

const Certificate = () => {
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={pdfURL}
        title="Certificate PDF"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default Certificate;
