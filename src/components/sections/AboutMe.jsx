import React from "react";
import { useI18n } from "../../i18n/i18n.jsx";

const AboutMe = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();
  
  return (
    <section id="about-me" ref={sectionRef} className="modern-about-me">
      <div className="about-me-container">
        <div className="about-me-header">
          <div className="about-me-title-wrapper">
            <h2 className="about-me-subtitle">{t('aboutMe.subtitle')}</h2>
            <h3 className="about-me-title">{t('aboutMe.title')}</h3>
            <div className="about-me-description">
              <p>
                {t('aboutMe.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="about-me-images">
          <div className="about-me-image-item">
            <img 
              src="/Img/slide.png" 
              alt="Projeto de IA" 
              className="about-me-img"
            />
          </div>
          <div className="about-me-image-item">
            <img 
              src="/Img/gemini.png" 
              alt="Gabi Ribeiro trabalhando" 
              className="about-me-img"
            />
          </div>
          <div className="about-me-image-item">
            <img 
              src="/Img/foto.png" 
              alt="Workspace" 
              className="about-me-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

