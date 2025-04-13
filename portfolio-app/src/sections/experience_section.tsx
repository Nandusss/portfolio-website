import React, { useState, useEffect } from "react";
import "./experience_section.css";
import reactLogo from "../assets/sections_assets/experience_section_assets/react.svg";
import typescriptLogo from "../assets/sections_assets/experience_section_assets/typescript.svg";
import nodejsLogo from "../assets/sections_assets/experience_section_assets/nodejs.svg";
import kerasLogo from "../assets/sections_assets/experience_section_assets/keras.svg";
import tensorflowLogo from "../assets/sections_assets/experience_section_assets/tensorflow.svg";
import pythonLogo from "../assets/sections_assets/experience_section_assets/python.svg";
import javaLogo from "../assets/sections_assets/experience_section_assets/java.svg";
import csharpLogo from "../assets/sections_assets/experience_section_assets/csharp.svg";
import gitLogo from "../assets/sections_assets/experience_section_assets/git.svg";
import pytorchLogo from "../assets/sections_assets/experience_section_assets/pytorch.svg";
import awsLogo from "../assets/sections_assets/experience_section_assets/aws.svg";
import dockerLogo from "../assets/sections_assets/experience_section_assets/docker.svg";
import mongodbLogo from "../assets/sections_assets/experience_section_assets/mongodb.svg";
import postgresqlLogo from "../assets/sections_assets/experience_section_assets/postgresql.svg";
import jenkinsLogo from "../assets/sections_assets/experience_section_assets/jenkins.svg";
import jiraLogo from "../assets/sections_assets/experience_section_assets/jira.svg";

interface Skill {
  name: string;
  logo: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

interface YearGroup {
  year: number;
  experiences: Experience[];
}

const skills: Skill[] = [
  { name: "React", logo: reactLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "Keras", logo: kerasLogo },
  { name: "Tensorflow", logo: tensorflowLogo },
  { name: "Python", logo: pythonLogo },
  { name: "Java", logo: javaLogo },
  { name: "C#", logo: csharpLogo },
  { name: "Git", logo: gitLogo },
  { name: "PyTorch", logo: pytorchLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "PostgreSQL", logo: postgresqlLogo },
  { name: "Jenkins", logo: jenkinsLogo },
  { name: "Jira", logo: jiraLogo },
  // Add more skills as needed
];

const experiences: YearGroup[] = [
  {
    year: 2024,
    experiences: [
      {
        role: "Student Researcher - Backend Development",
        company: "WIMTACH - Centennial College",
        duration: "Jul 2024 - Oct 2024",
        description: [
          "Built Node.js & Spring Boot APIs on AWS EC2",
          "Developed PySpark pipelines for data processing",
          "Optimized database performance on AWS",
        ],
      },
    ],
  },
  {
    year: 2023,
    experiences: [
      {
        role: "COOP - Junior Programmer",
        company: "Treasury Board of Canada Secretariat",
        duration: "Sep 2023 - Dec 2023",
        description: [
          "Built Node.js APIs with Python microservices",
          "Automated cloud data migration processes",
        ],
      },
      {
        role: "COOP - Junior Software Engineer",
        company: "Scotiabank",
        duration: "Jan 2023 - Apr 2023",
        description: [
          "Developed MERN stack test management app",
          "Implemented Jenkins CI/CD pipelines",
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switching functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === experiences.length - 1 ? 0 : current + 1
      );
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate marker positions
  const getMarkerPosition = (index: number) => {
    return `${(index / (experiences.length - 1)) * 100}%`;
  };

  return (
    <section className="experience-section">
      <div className="content-wrapper">
        <div className="skills-container">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-circle">
                  <img src={skill.logo} alt={skill.name} />
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-container">
          <h2>Experience</h2>
          <div className="timeline">
            {/* Year markers */}
            {experiences.map((yearGroup, index) => (
              <div
                key={yearGroup.year}
                className={`year-marker ${
                  index === activeIndex ? "active" : ""
                }`}
                style={{ top: getMarkerPosition(index) }}
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className={`year-label ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  {yearGroup.year}
                </span>
              </div>
            ))}

            {/* Experience cards */}
            <div className="timeline-items-container">
              {experiences.map((yearGroup, index) => (
                <div
                  key={yearGroup.year}
                  className={`timeline-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <div className="timeline-content">
                    {yearGroup.experiences.map((exp, expIndex) => (
                      <div key={expIndex} className="experience-entry">
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                        <span className="duration">{exp.duration}</span>
                        <ul>
                          {exp.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
