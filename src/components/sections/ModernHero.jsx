import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useI18n } from '../../i18n/i18n.jsx';

const ModernHero = ({ sectionRefs, scrollToSection }) => {
  const { t } = useI18n();

  return (
    <section id="home" ref={(el) => (sectionRefs.current.home = el)} className="modern-hero portfolio-hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="gradient-text-purple-pink">{t('hero.title1')}</span>{' '}
            <span className="gradient-text-pink-orange">{t('hero.title2')}</span>
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-book-call"
              onClick={() => scrollToSection('contact')}
            >
              {t('hero.bookCall')}
              <ArrowRight size={20} />
            </button>
            <button 
              className="btn-download-cv"
              onClick={() => scrollToSection('about-me')}
            >
              {t('hero.viewCV')}
              <Download size={20} />
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src="/Img/fotoperfil.png" alt="Gabi Ribeiro" className="hero-profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
