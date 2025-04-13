import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar_component";
import Home from "./sections/home_section";
import About from "./sections/about_section";
import Experience from "./sections/experience_section";
import ThemeToggle from "./components/theme_toggle_component";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Experience />
        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </main>
    </>
  );
}

export default App;
