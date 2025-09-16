import React from "react";
import DynamicLucideIcon from "../common/DynamicLucideIcon";
import { skillsData } from "../../data/skills";
import { useI18n } from "../../i18n/i18n.jsx";

const Skills = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();
  return (
    <section id="skills" ref={sectionRef} className="modern-skills">
      <div className="skills-container">
        <h2 className="section-title">{t('sections.skillsTitle')}</h2>
        {/* Debug info */}
        <div style={{color: 'white', fontSize: '12px', marginBottom: '10px'}}>
          DEBUG: visibleSections.has("skills") = {visibleSections.has("skills") ? 'true' : 'false'}
        </div>
        <div className="skills-grid">
          {Object.entries(skillsData).map(
            ([category, skills], categoryIndex) => (
              <div
                key={category}
                className={`skill-category ${
                  visibleSections.has("skills")
                    ? "opacity-100 translate-y-0"
                    : "opacity-100 translate-y-0"
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
                              : `${skill.level}%`,
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
