import React from "react";
import "./Style.css";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="logo-container">
<<<<<<< HEAD
          <img src="public/images/logo1.png" alt="logo-chris" />
=======
          <img src="public\logo1.png" alt="logo-chris" />
>>>>>>> 390a91341aac26427ce75bfca2777afa07817692
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
