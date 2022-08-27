import React from "react";
import "./Style.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo-container">
          <img src="src\assets\logo1.png" alt="logo-chris" />
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
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
      </nav>
    </div>
  );
}

export default Header;
