import React from "react";
import "./home_section.css";

// Import technology logos
import reactLogo from "../assets/react.svg";
import tensorflowLogo from "../assets/Tensorflow_logo.svg";
import nodejsLogo from "../assets/nodejs-horizontal.svg";

interface Skill {
  name: string;
  logo: string;
}

interface HomeContent {
  name: string;
  title: string;
  skills: Skill[];
}

const homeContent: HomeContent = {
  name: "Nandagopan Dilip",
  title: "Full Stack Developer, AI/ML Engineer",
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

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="intro">
          <h1>{homeContent.name}</h1>
          <h3>{homeContent.title}</h3>
        </div>

        <div className="skills">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {homeContent.skills.map((skill, index) => (
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

export default Home;
