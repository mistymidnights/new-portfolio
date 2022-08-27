import React from "react";
import "./Style.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>@Christine Lopez - 2022</p>
        <div className="rrss">
          <a href="https://github.com/mistymidnights" target="_blank">
            <i>
              <BsGithub />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/cristina-l-165a9218a/"
            target="_blank"
          >
            <i>
              <BsLinkedin />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
