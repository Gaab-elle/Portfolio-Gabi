import React from "react";
import { useI18n } from "../../i18n/i18n";

const Contact = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();
  return (
    <section id="contact" ref={sectionRef} className="modern-contact">
      <div className="contact-content">
        <h2 className="section-title">{t('sections.contactTitle')}</h2>
        <p>{t('sections.contactSubtitle')}</p>
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
