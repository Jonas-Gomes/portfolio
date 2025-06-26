import "./SkillsCarrousel.css";
import ptSkills from "../../skills/skills.pt.json";
import enSkills from "../../skills/skills.en.json";
import { useLanguage } from "../../context/LanguageContext";

export default function SkillsCarousel() {
  const { language } = useLanguage();
  const skillsData = language === "pt" ? ptSkills : enSkills;

  return (
    <div className="skills-scroll-container">
      {skillsData.map((category, index) => (
        <div key={index} className="skill-category-card">
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}