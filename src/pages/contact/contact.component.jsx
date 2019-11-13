import React from "react";
import "./contact.styles.scss";

function Contact() {
  const iconStyles = {
    marginRight: "10px",
    color: "black",
    fontSize: "30px"
  };
  const h2Styles = {
    color: "#9a9a3ec9",
    paddingTop: "0px",
    marginBottom: "1.5rem",
    fontSize: "2rem"
  };
  return (
    <div
      style={{ textAlign: "center", margin: "100px auto", maxWidth: "75vh" }}
    >
      <h2 style={h2Styles}>Don't be a stranger</h2>
      <p style={{ color: "#3e3e36ed", marginBottom: "26px" }}>
        Feel free to get in touch with me. I am always open to discussing new
        projects, createive ideas or opportunity to be a part of your visions.
      </p>
      <p
        style={{
          borderBottom: "1px solid black",
          color: "#BBBBBD",
          marginBottom: "15"
        }}
      >
        You can reach me on these platforms.
      </p>
      <a
        href="https://github.com/hereisfahad"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github grow" style={iconStyles}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/mrfahadjabbar/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin grow" style={iconStyles}></i>
      </a>
      <a
        href="https://www.twitter.com/hereisfahad"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-twitter grow" style={iconStyles}></i>
      </a>
      <a
        href="https://www.facebook.com/hereisfahad"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-facebook grow" style={iconStyles}></i>
      </a>
    </div>
  );
}

export default Contact;
