import React from "react";
import "./about_section.css";
import highlight1Image from "../assets/sections_assets/about_section_assets/Engg-Excellence.png";
import hightlight2Image from "../assets/sections_assets/about_section_assets/ai-innovation.webp";
import highlight3Image from "../assets/sections_assets/about_section_assets/full-stack.webp";
import highlight4Image from "../assets/sections_assets/about_section_assets/problem-solving.webp";

const aboutContent = {
  summary:
    "Pushing the boundaries of ***full-stack development*** and ***AI***, crafting ***innovative solutions*** that drive impact.",
  highlights: [
    {
      image: highlight1Image,
      heading: "Engineering Excellence",
      subtext: "Building robust, scalable solutions",
    },
    {
      image: hightlight2Image,
      heading: "AI Innovation",
      subtext: "Advancing ML and AI technologies",
    },
    {
      image: highlight3Image,
      heading: "Full Stack",
      subtext: "End-to-end development expertise",
    },
    {
      image: highlight4Image,
      heading: "Problem Solving",
      subtext: "Turning challenges into solutions",
    },
  ],
};

const About: React.FC = () => {
  // Function to format text with accents
  const formatText = (text: string) => {
    return text.split("***").map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} className="accent-text">
          {part}
        </span>
      )
    );
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="summary-section">
          <div className="summary-text">{formatText(aboutContent.summary)}</div>
        </div>

        <div className="highlights-grid">
          {aboutContent.highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="image-container">
                <img src={highlight.image} alt={highlight.heading} />
              </div>
              <div className="card-content">
                <h3>{highlight.heading}</h3>
                <p>{highlight.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
