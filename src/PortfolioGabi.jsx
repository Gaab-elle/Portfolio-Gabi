import React, { useState, useEffect, useCallback } from 'react';
import DynamicLucideIcon from './components/common/DynamicLucideIcon';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { techIcons } from './data/techIcons';

// Importar componentes das seções
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

// Importar modais
import ProjectModal from './components/modals/ProjectModal';
import BlogModal from './components/modals/BlogModal';

// Importar estilos
import './styles/globals.css';

const PortfolioGabi = () => {
    // Estados
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [fallingIcons, setFallingIcons] = useState([]);

    // Hook customizado para Intersection Observer
    const sectionRefs = useIntersectionObserver(setVisibleSections, setActiveSection);

    // Função para criar ícones caindo
    const createFallingIcon = useCallback(() => {
        const randomTech = techIcons[Math.floor(Math.random() * techIcons.length)];
        const newIcon = {
            id: Math.random(),
            iconName: randomTech.icon,
            color: randomTech.color,
            left: Math.random() * 90 + 5,
            animationDuration: 4 + Math.random() * 3,
            delay: Math.random() * 1
        };

        setFallingIcons(prev => [...prev, newIcon]);

        setTimeout(() => {
            setFallingIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
        }, (newIcon.animationDuration + newIcon.delay + 1) * 1000);
    }, []);

    // Effect para gerar ícones caindo
    useEffect(() => {
        const interval = setInterval(() => {
            setFallingIcons(prev => {
                if (prev.length > 12) {
                    return prev.slice(-8);
                }
                return prev;
            });
            createFallingIcon();
        }, 1500);

        return () => clearInterval(interval);
    }, [createFallingIcon]);

    // Handlers para modais de projetos
    const openModal = useCallback((project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = '';
    }, []);

    // Handlers para modais do blog
    const openBlogModal = useCallback((post) => {
        setSelectedPost(post);
        setIsBlogModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeBlogModal = useCallback(() => {
        setIsBlogModalOpen(false);
        setSelectedPost(null);
        document.body.style.overflow = '';
    }, []);

    // Função para scroll suave entre seções
    const scrollToSection = useCallback((sectionId) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    }, [sectionRefs]);

    return (
        <div className="min-h-screen text-white font-sans" style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)'
        }}>
            {/* Container para ícones caindo */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'hidden'
            }}>
                {fallingIcons.map(iconData => (
                    <DynamicLucideIcon
                        key={iconData.id}
                        iconName={iconData.iconName}
                        size={40}
                        color={iconData.color}
                        className="absolute"
                        style={{
                            left: `${iconData.left}%`,
                            top: '-50px',
                            animation: `fall ${iconData.animationDuration}s linear ${iconData.delay}s forwards`,
                            opacity: 0.8
                        }}
                    />
                ))}
            </div>

            {/* Navegação */}
            <Navigation
                activeSection={activeSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                scrollToSection={scrollToSection}
            />

            {/* Seção Hero */}
            <Hero
                scrollToSection={scrollToSection}
                sectionRef={el => sectionRefs.current.home = el}
            />

            {/* Seção About */}
            <About
                visibleSections={visibleSections}
                sectionRef={el => sectionRefs.current.about = el}
            />

            {/* Seção Skills */}
            <Skills
                visibleSections={visibleSections}
                sectionRef={el => sectionRefs.current.skills = el}
            />

            {/* Seção Projects */}
            <Projects
                visibleSections={visibleSections}
                sectionRef={el => sectionRefs.current.projects = el}
                openModal={openModal}
            />

            {/* Seção Blog */}
            <Blog
                visibleSections={visibleSections}
                sectionRef={el => sectionRefs.current.blog = el}
                openBlogModal={openBlogModal}
            />

            {/* Seção Contact */}
            <Contact
                visibleSections={visibleSections}
                sectionRef={el => sectionRefs.current.contact = el}
            />

            {/* Footer */}
            <footer className="py-8 px-4" style={{ borderTop: '1px solid rgba(139, 69, 255, 0.2)' }}>
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 Gabi Ribeiro. Desenvolvido com 💜 e ☕
                    </p>
                </div>
            </footer>

            {/* Modais */}
            <ProjectModal
                isOpen={isModalOpen}
                project={selectedProject}
                onClose={closeModal}
            />

            <BlogModal
                isOpen={isBlogModalOpen}
                post={selectedPost}
                onClose={closeBlogModal}
            />
        </div>
    );
};

export default PortfolioGabi;