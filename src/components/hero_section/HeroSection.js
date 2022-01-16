import React from "react";
import "../../App.css";
import { Button } from "../button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={require("../../videos/video-1.mp4")} autoPlay loop muted />
      <h1>MACERA BEKLİYOR</h1>
      <p>Ne için bekliyorsun?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          HAYDİ BAŞLA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          FRAGMANI İZLE <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
