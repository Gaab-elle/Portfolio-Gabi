import React, { useState, useEffect, useCallback } from "react";
import { useI18n } from "./i18n/i18n.jsx";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

// Importar componentes das seções
import ModernHero from "./components/sections/ModernHero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

// Importar modais
import ProjectModal from "./components/modals/ProjectModal";

// Importar estilos
import "./styles/globals.css";
import "./styles/modern.css";

const PortfolioGabiModern = () => {
  // Estados
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Hook customizado para Intersection Observer
  const sectionRefs = useIntersectionObserver(
    setVisibleSections,
    setActiveSection
  );

  // Mouse tracking para efeito cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handlers para modais
  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "";
  }, []);

  // Função para scroll suave entre seções
  const scrollToSection = useCallback(
    (sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    },
    [sectionRefs]
  );

  const { t, lang, setLang } = useI18n();

  return (
    <div className="modern-portfolio">
      {/* Animated Background */}
      <div className="bg-animation"></div>
      
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      ></div>

      {/* Navigation */}
      <nav className="modern-nav">
        <div className="nav-container">
          <div className="logo">Gabi Ribeiro</div>
          <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className={activeSection === 'home' ? 'active' : ''}>{t('nav.home')}</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={activeSection === 'about' ? 'active' : ''}>{t('nav.about')}</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className={activeSection === 'skills' ? 'active' : ''}>{t('nav.skills')}</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={activeSection === 'projects' ? 'active' : ''}>{t('nav.projects')}</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={activeSection === 'contact' ? 'active' : ''}>{t('nav.contact')}</a></li>
          </ul>
          <div>
            <select
              aria-label={t('langLabel')}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border border-purple-500/40 rounded-md px-2 py-1 text-sm text-gray-200"
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="modern-main">
        {/* Hero Section */}
        <ModernHero sectionRefs={sectionRefs} scrollToSection={scrollToSection} />

        {/* Stats Section */}
        <Stats />

        {/* About Section */}
        <About visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.about = el)} />

        {/* Skills Section */}
        <Skills visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.skills = el)} />

        {/* Projects Section */}
        <Projects
          visibleSections={visibleSections}
          sectionRef={(el) => (sectionRefs.current.projects = el)}
          openModal={openModal}
        />

        {/* Contact Section */}
        <Contact visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.contact = el)} />
      </main>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>

      {/* Floating Particles */}
      <div className="particles-container"></div>

      {/* Modais */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default PortfolioGabiModern;
