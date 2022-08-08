import React from "react";

// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

function Footer() {
  return (
    <section class="contact-info" id="contact-me">
      <div>
        <h2>Contact Me</h2>
      </div>

      <div class=" contact-info-content">
        <a
          href="https://www.linkedin.com/in/tj-tieso/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin icon" src="" />
        </a>
        <a href="https://github.com/tj-tieso" target="_blank" rel="noreferrer">
          <img alt="github icon" src="" />
        </a>
        <a href="mailto:tj.tieso@gmail.com " target="_blank" rel="noreferrer">
          <img alt="email icon" src="" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
