import React from "react";
// import heroImg from "../../assets/cover/heroImg.jpg";

function Nav() {
  return (
    <header>
      <a data-testid="link" href="/">
        Tieso
      </a>
      <nav>
        <ul>
          <li>
            <a data-testid="about" href="#about">
              About
            </a>
          </li>
          <li>
            <a data-testid="portfolio" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a data-testid="contact" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
