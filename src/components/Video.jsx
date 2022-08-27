import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <>
      <div id="video" className="video-gallery">
        <div className="title-container">
          <h1 className="video-title">Video</h1>
        </div>
        <div className="video-container">
          <iframe
            width="720"
            height="315"
            src="https://www.youtube.com/embed/ya5HKsf3lGk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="720"
            height="315"
            src="https://www.youtube.com/embed/MyS8F-2-3es"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="720"
            height="315"
            src="https://www.youtube.com/embed/CNwqbdKlHn0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="720"
            height="315"
            src="https://www.youtube.com/embed/LhsKwWJ7bJM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="720"
            height="315"
            src="https://www.youtube.com/embed/pPRT3Ybtu8M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="720"
            height="315"
            src="https://www.youtube.com/embed/kuK_m3mXM1I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
