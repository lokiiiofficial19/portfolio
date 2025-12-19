import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Todo List App",
      desc: "A simple and clean task manager built with HTML, CSS, and JavaScript.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lokiiofficial1337.neocities.org/demo"
    },
    {
      title: "E-Commerce Website",
      desc: "Front-end product listing page with cart and responsive UI.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lokiiofficial1337.neocities.org/loki.html/"
    },
     {
      title: "House Rent & Sell Management System",
      desc: "Front-end product listing page with cart and responsive UI.",
      tech: "HTML • CSS • JavaScript",
      link: "https://lokiiofficial1337.neocities.org/house%20&%20rent/"
    },
   {
      title: "Portfolio Website",
      desc: "Your own professional portfolio created using React.",
      tech: "React • CSS",
      link: "#"
    }
  ];

  return (
     <div className="projects-section" id="projects">

      <h2 className="project-title">Projects</h2>

      <div className="project-grid">
        {projectList.map((pro, index) => (
          <div className="project-card" key={index}>
            <h3>{pro.title}</h3>
            <p>{pro.desc}</p>
            <span className="tech">{pro.tech}</span>
            <a href={pro.link} className="btn">View Projcdect</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
