import React from "react";
import "./skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Git / GitHub", icon: "📁" },
    { name: "Java(OOPS)", icon: "🅱️" },
    { name: "MS Excel", icon: "📊" },
    { name: "Responsive Design", icon: "📱" }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
