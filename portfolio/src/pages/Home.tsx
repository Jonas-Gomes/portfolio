import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import ExperienceCard from "../components/experienceCard/ExperienceCard";
import experiencesPT from "../experiences/experiences.pt.json";
import experiencesEN from "../experiences/experiences.en.json";
import educationsPT from "../educations/educations.pt.json";
import educationsEN from "../educations/educations.en.json";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import brFlag from "/assets/brflag.png";
import usFlag from "/assets/usflag.png";
import { useState } from "react";
import SkillsCarrousel from "../components/skillsCarrousel/SkillsCarrousel";
import EducationCard from "../components/educationCards/EducationCard";
import { FiMenu, FiX } from "react-icons/fi";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const experiences = language === "pt" ? experiencesPT : experiencesEN;
  const educations = language === "pt" ? educationsPT : educationsEN;
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <div className="body">
      <div className="floating-menu">
        <div className="mobile-menu-button" onClick={toggleMenu}>
        <div className="icon-wrapper">
          <FiMenu size={24} className={`menu-icon ${!isMenuOpen ? "visible" : "hidden"}`} />
          <FiX size={24} className={`menu-icon ${isMenuOpen ? "visible" : "hidden"}`} />
        </div>
      </div>
      
      <div className={`side-drawer ${isMenuOpen ? "open" : ""}`}>
        <a href="#about" onClick={toggleMenu}>{t.about}</a>
        <a href="#experiences" onClick={toggleMenu}>{t.experiences}</a>
        <a href="#skills" onClick={toggleMenu}>{t.skills}</a>
        <a href="#education" onClick={toggleMenu}>{t.education}</a>
      </div>

        <div className="desktop-view">
          <a href="#about">{t.about}</a>
          <a href="#experiences">{t.experiences}</a>
          <a href="#skills">{t.skills}</a>
          <a href="#education">{t.education}</a>
        </div>
        
        <div onClick={toggleLanguage} className="language-switch">
          <img src={brFlag} alt="Português" />
          <div className={`switch-toggle-div`}>
            <div className={`switch-toggle ${language === "en" ? "right" : "left"}`} />
          </div>
          <img src={usFlag} alt="English" />
        </div>
      </div>
      <div id="about" className="presentation">
        <img className="profile" />
        <div className="title">
          <p>{t.greeting} <br />{t.role}</p>
          <p className="subtitle">{t.description}</p>
        </div>
        <div className="socials">
          <a href="https://github.com/Jonas-Gomes" target="_blank"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/josé-jonas-gomes-b755441b9/" target="_blank"><BsLinkedin /></a>
          <a href="https://www.instagram.com/jonas_gcavalcante/" target="_blank"><BsInstagram /></a>
          <a href="mailto:jonaszd99@gmail.com" target="_blank"><GoMail /></a>
        </div>
        <p id="experiences" className="section">{t.experiences}</p>
        <div className="experiences">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
        <p id="skills" className="section">{t.skills}</p>
        <div className="skills">
          <SkillsCarrousel />
        </div>
        <p id="education" className="section">{t.education}</p>
        <div className="educations">
          {educations.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </div>
  );
}
