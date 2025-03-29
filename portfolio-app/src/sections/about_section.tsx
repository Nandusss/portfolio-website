import React from "react";
import "./about_section.css";

// Import technology logos
import reactLogo from "../assets/react.svg";
import tensorflowLogo from "../assets/Tensorflow_logo.svg";
import nodejsLogo from "../assets/nodejs-horizontal.svg";

interface Skill {
  name: string;
  logo: string;
}

interface AboutContent {
  name: string;
  title: string;
  description: string;
  skills: Skill[];
}

const aboutContent: AboutContent = {
  name: "Nandagopan Dilip",
  title: "Full Stack Developer",
  description:
    "Passionate about creating web applications and solving complex problems",
  skills: [
    {
      name: "React",
      logo: reactLogo,
    },
    {
      name: "TensorFlow",
      logo: tensorflowLogo,
    },
    {
      name: "Node.js",
      logo: nodejsLogo,
    },
    // Add more skills here
  ],
};

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="intro">
          <h1>{aboutContent.name}</h1>
          <h3>{aboutContent.title}</h3>
          <p>{aboutContent.description}</p>
        </div>

        <div className="skills">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {aboutContent.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
