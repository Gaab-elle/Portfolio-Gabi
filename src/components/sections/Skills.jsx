import React from "react";
import DynamicLucideIcon from "../common/DynamicLucideIcon";
import { skillsData } from "../../data/skills";

const Skills = ({ visibleSections, sectionRef }) => {
  return (
    <section id="skills" ref={sectionRef} className="modern-skills">
      <div className="skills-container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(
            ([category, skills], categoryIndex) => (
              <div
                key={category}
                className={`skill-category ${
                  visibleSections.has("skills")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${categoryIndex * 200}ms`,
                }}
              >
                <h3>{category}</h3>
                <div className="skill-list">
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <span className="flex items-center space-x-2">
                        <DynamicLucideIcon
                          iconName={skill.icon}
                          size={16}
                          color={skill.color}
                        />
                        <span>{skill.name}</span>
                      </span>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{
                            width: visibleSections.has("skills")
                              ? `${skill.level}%`
                              : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
