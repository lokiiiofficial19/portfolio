import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <h3>Hello, I'm Lokesh Kumar 👋</h3>
          <p>
            I am a Front-End Developer passionate about building clean, 
            responsive, and user-friendly websites. I enjoy turning ideas 
            into beautiful digital experiences using HTML, CSS, JavaScript, 
            and React.
          </p>

          <p>
            I love learning new technologies and improving my skills every day.
            My goal is to become a professional front-end developer in the 
            software industry.
          </p>

          <a href="#contact" className="about-btn">Contact Me</a>
        </div>

        <div className="about-image">
          <img src="src/assets/IMG_20251129_121652.jpg" alt="About" />
        </div>
      </div>
    </section>
  );
}
