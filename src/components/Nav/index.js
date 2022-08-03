import React from "react";

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
            <a data-testid="my-work" href="#my-work">
              My Work
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
