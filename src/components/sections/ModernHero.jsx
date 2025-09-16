import React from 'react';
import { useI18n } from '../../i18n/i18n.jsx';

const ModernHero = ({ sectionRefs, scrollToSection }) => {
  const { t } = useI18n();

  return (
    <section id="home" ref={(el) => (sectionRefs.current.home = el)} className="modern-hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/Img/Perfil.jpg" alt="Gabi Ribeiro" />
        </div>
        <h1>Gabi Ribeiro</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            {t('hero.talk')}
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('projects')}
          >
            {t('hero.viewProjects')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
