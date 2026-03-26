import React from "react";
import "./about.css";
import profileImg from "../assets/IMG_20251129_121652.jpg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <h3>Hello, I'm Lokesh Kumar 👋</h3>
          <p>
            I am a passionate Software Developer currently learning Java and Data Structures.  
I enjoy solving problems and building applications that improve real-world systems.

Currently focusing on:
- Java Programming
- Data Structures & Algorithms
- Problem Solving
          </p>

          <p>
            I love learning new technologies and improving my skills every day.
            My goal is to start my career as a Software Developer
          </p>

          <a href="#contact" className="about-btn">Contact Me</a>
        </div>

        <div className="about-image">
            <img src={profileImg} alt="My photo" />
        </div>
      </div>
    </section>
  );
}
