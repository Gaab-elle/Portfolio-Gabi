import React from 'react';

const ModernHero = ({ sectionRefs, scrollToSection }) => {
  return (
    <section id="home" ref={(el) => (sectionRefs.current.home = el)} className="modern-hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/Img/Perfil.jpg" alt="Gabi Ribeiro" />
        </div>
        <h1>Gabi Ribeiro</h1>
        <p className="hero-subtitle">Full Stack Developer • Automation Specialist • Data Scientist</p>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Let's Talk
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
