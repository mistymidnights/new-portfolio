import React from "react";
import "./Style.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo-container">
          <img
            src="https://media.discordapp.net/attachments/701164137081733201/1028511560366293053/mininlogo.png"
            alt="logo-chris"
          />
        </div>
        <div id="menuToggle">
          <input type="checkbox" />
          <span className="span-position"></span>
          <span className="span-position"></span>
          <span className="span-position"></span>
          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#gallery" className="gallery">
                Gallery
              </a>
            </li>
            <li>
              <a href="#video">Video</a>
            </li>
            <li>
              <a href="#develop">Develop</a>
            </li>
            <li>
              <a href="https://mycv-react.vercel.app" target="_blank">
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
