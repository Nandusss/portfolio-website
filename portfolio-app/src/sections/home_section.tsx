import React from "react";
import "./home_section.css";

// Import technology logos
import reactLogo from "../assets/react.svg";
import tensorflowLogo from "../assets/Tensorflow_logo.svg";
import nodejsLogo from "../assets/nodejs-icon.svg";
import kerasLogo from "../assets/Keras_logo.svg";

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
  title: "Full Stack Developer | AI/ML Engineer | Software Engineer",
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
    {
      name: "Keras",
      logo: kerasLogo,
    },
    // Add more skills here
  ],
};

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="bubbles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>

      <div className="content-wrapper">
        <div className="home-content">
          <div className="intro">
            <h1>{homeContent.name}</h1>
            <h3>{homeContent.title}</h3>
          </div>
        </div>

        <div className="skills-container">
          <div className="skill-bubbles">
            {homeContent.skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="skill-bubble">
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
