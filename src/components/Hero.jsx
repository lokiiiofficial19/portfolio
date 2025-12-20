import React from "react";
import profileImg from "../assets/IMG_20251129_121652.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hi, I’m <span>Lokesh Kumar</span> 👋
        </h1>

        <h2>Frontend Developer</h2>

        <p>
          I build modern, responsive, and user-friendly web applications using
          HTML, CSS, JavaScript, and React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">See Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImg} alt="Lokesh Kumar" />
      </div>
    </section>
  );
}
