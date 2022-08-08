import React from "react";
import GitHubMark from "../../assets/icons/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png";
import emailMark from "../../assets/icons/email-12-32.png";
import linkedinMark from "../../assets/icons/linkedin-3-32.png";

function Footer() {
  return (
    <section class="w-100 footer-info">
      <div class="footer-info-content">
        <a
          class="text-xs"
          href="https://www.linkedin.com/in/tj-tieso/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin icon" src={linkedinMark} />
        </a>
        <a
          class=""
          href="https://github.com/tj-tieso"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github icon" src={GitHubMark} />
        </a>
        <a
          class=""
          href="mailto:tj.tieso@gmail.com "
          target="_blank"
          rel="noreferrer"
        >
          <img alt="email icon" src={emailMark} />
        </a>
        <div className="footer-bottom">
          <p className="text-xs">
            &copy;{new Date().getFullYear()} Trevor Tieso
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
