import React from "react";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <section>
      <h1 id="resume">Technical Skills</h1>
      <p>
        JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL,
        Express, React, Node, Handlebars, jQuery, Bootstrap. Object Oriented
        Programming (OOP) Model-View-Controller (MVC), Test Driven Development
        (TDD).
      </p>
      <a
        href={require("../../assets/tieso-resume.pdf")}
        download="tieso-resume.pdf"
      >
        <Button>Download Resume Here</Button>
      </a>
    </section>
  );
}

export default Resume;
