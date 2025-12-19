import React from "react";
import Projects from "./Projects";
import profileImg from "../assets/IMG_20251129_121652.jpg";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h4>LOKESHKUMAR MANIKANDAN</h4>
        <p>“Hi, I’m Lokesh Kumar Manikandan, a front-end developer. I create responsive websites using HTML, CSS, JavaScript, and React.</p>
        <p>This is my portfolio website. At the top, you can see my name and navigation menu which links to my projects, skills, about, and contact sections.</p>
        <p>Here in the main section, you see my name, a short description of my skills, and buttons like See Projects to check out my work, and Contact Me to get in touch.</p>
        <p>I’ve designed it with a modern look – dark hero section, clean white header, and interactive buttons to make navigation simple and attractive.</p>
        <p>Later, I’ve added sections to showcase my projects, skills, and a contact form so potential employers or clients can learn more about me and reach out easily.”</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">See Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
            <img src={profileImg} alt="My photo" />
      </div>
    </section>
  );
}
