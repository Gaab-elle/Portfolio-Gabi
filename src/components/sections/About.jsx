import React from "react";

const About = ({ visibleSections, sectionRef }) => {
  return (
    <section id="about" ref={sectionRef} className="modern-about">
      <div className="about-container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Sou Desenvolvedora Full Stack e adoro transformar ideias em
              soluções práticas e funcionais. Tenho um interesse especial em
              automações, porque acredito que a tecnologia deve simplificar a
              vida das pessoas e tornar processos mais leves.
            </p>
            
            <p>
              Combino criatividade com código limpo para desenvolver
              aplicações web modernas. Meu objetivo é criar soluções que
              automatizem processos, tragam praticidade e contribuam para um
              ecossistema digital mais eficiente e inovador.
            </p>

            <h3 className="specialties-title">Minhas Especialidades</h3>
            <div className="highlights">
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
                React
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="tech-icon" />
                Python
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="tech-icon" />
                PHP
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="tech-icon" />
                Tailwind
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="tech-icon" />
                PostgreSQL
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-icon" />
                TypeScript
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tech-icon" />
                Git
              </span>
              <span className="highlight-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon" />
                Node.js
              </span>
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-placeholder">
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
              </div>
              <div className="floating-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
