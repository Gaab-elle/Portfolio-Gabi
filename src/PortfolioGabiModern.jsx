import React, { useState, useEffect, useCallback } from "react";
import { useI18n } from "./i18n/i18n.jsx";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

// Importar componentes das seções
import ModernHero from "./components/sections/ModernHero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import AboutMe from "./components/sections/AboutMe";
// import Testimonials from "./components/sections/Testimonials"; // Temporarily disabled
import FAQ from "./components/sections/FAQ";
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
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); setIsMenuOpen(false); }} className={activeSection === 'home' ? 'active' : ''}>{t('nav.home')}</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); setIsMenuOpen(false); }} className={activeSection === 'services' ? 'active' : ''}>Serviços</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setIsMenuOpen(false); }} className={activeSection === 'projects' ? 'active' : ''}>{t('nav.projects')}</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsMenuOpen(false); }} className={activeSection === 'contact' ? 'active' : ''}>{t('nav.contact')}</a></li>
          </ul>
          <div>
            <select
              aria-label={t('langLabel')}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="lang-select"
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

        {/* Services Section */}
        <Services visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.services = el)} />

        {/* Projects Section */}
        <Projects
          visibleSections={visibleSections}
          sectionRef={(el) => (sectionRefs.current.projects = el)}
          openModal={openModal}
        />

        {/* About Me Section */}
        <AboutMe visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current['about-me'] = el)} />

        {/* Testimonials Section - Temporarily disabled */}
        {/* <Testimonials visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.testimonials = el)} /> */}

        {/* FAQ Section */}
        <FAQ visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.faq = el)} />

        {/* Contact Section */}
        <Contact visibleSections={visibleSections} sectionRef={(el) => (sectionRefs.current.contact = el)} />
      </main>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-top">
            <p className="footer-address">{t('footer.address')}</p>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-title">{t('footer.aboutTitle')}</h4>
              <ul className="footer-links">
                <li><a href="#contact" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('footer.contact')}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">{t('footer.servicesTitle')}</h4>
              <ul className="footer-links">
                <li><a href="#services" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>{t('footer.services')}</a></li>
                <li><a href="#projects" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>{t('footer.projects')}</a></li>
                <li><a href="https://instagram.com" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">{t('footer.moreTitle')}</h4>
              <ul className="footer-links">
                <li><a href="#projects" className="footer-link" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>{t('footer.projects')}</a></li>
                <li><a href="https://twitter.com" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">{t('footer.copyright')}</p>
          </div>
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
