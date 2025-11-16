import React from "react";
import { useI18n } from "../../i18n/i18n.jsx";

const Contact = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();
  return (
    <section id="contact" ref={sectionRef} className="modern-contact portfolio-contact">
      <div className="contact-content">
        <h2 className="section-subtitle">{t('contact.title')}</h2>
        <h3 className="section-title-large">{t('contact.subtitle')}</h3>
        <p className="contact-subtitle-large">{t('contact.subtitleLarge')}</p>
        <p className="contact-description">{t('contact.description')}</p>
        <div className="contact-links">
          <a href="mailto:contato.gabriellerib@gmail.com" className="contact-link">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" className="contact-icon" />
            <span>contato.gabriellerib@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/gabrielle-ribeiro10" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="contact-icon" />
            <span>{t('contact.linkedin')}</span>
          </a>
          <a href="https://github.com/Gaab-elle" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="contact-icon" />
            <span>{t('contact.github')}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
