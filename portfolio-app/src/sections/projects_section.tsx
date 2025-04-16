import React, { useState, useMemo } from "react";
import "./projects_section.css";
import placeholderImage from "../assets/placeholder.avif";
import virtualTryOnImage from "../assets/sections_assets/projects_section_assets/virtual-try-on.jpeg";
import botZeroXImage from "../assets/sections_assets/projects_section_assets/botZeroX.png";
import portfolioImage from "../assets/sections_assets/projects_section_assets/portfolioWebsite.png";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  githubLink: string;
  demoLink?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "Traffic Sign Detector",
    description:
      "Convolutional Neural Network model for German Traffic Sign Recognition Benchmark (GTSRB) dataset",
    image:
      "https://raw.githubusercontent.com/Nandusss/GTSRB-Traffic-SIgn-CNN/refs/heads/master/images/Screenshot2.png",
    category: "Neural Networks",
    githubLink:
      "https://github.com/Nandusss/GTSRB-Traffic-SIgn-CNN?tab=readme-ov-file#gtsrb-traffic-sign-cnn",
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    title: "Virtual Cloth Try-on",
    description: "Personal portfolio website built with React and TypeScript",
    image: virtualTryOnImage,
    category: "Deep Learning",
    githubLink: "https://github.com/orgs/AI-capstone-project/repositories",
    technologies: ["PyTorch", "Tensorflow", "React", "Docker"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TypeScript",
    image: placeholderImage,
    category: "Web Development",
    githubLink: "https://github.com/Nanduss/portfolio-website",
    demoLink: "https://portfolio.com",
    technologies: ["React", "TypeScript", "NodeJS"],
  },
  {
    title: "CentBot",
    description:
      "Chatbot for Centennial College services using NLTK and AWS SDK, capable of answering questions and providing information about Centennial College's programs and services.",
    image: placeholderImage,
    category: "Natural Language Processing",
    githubLink: "https://github.com/Nandusss/CentBotAWS",
    technologies: ["NLTK", "AWS", "PIPENV"],
  },
  {
    title: "Bot Zero X",
    description: "Simple chatbot for discord using C# and .Net",
    image: botZeroXImage,
    category: "Natural Language Processing",
    githubLink: "https://github.com/Nandusss/bot-0x",
    technologies: [".Net", "C#", "Discord.Net"],
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ["All", ...new Set(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3); // Changed from 8 to 3

  const toggleShow = () => setShowAll(!showAll);

  return (
    <section id="projects" className="projects-section">
      <div className="content-wrapper">
        <h2>Projects</h2>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <button className="show-more-btn" onClick={toggleShow}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
