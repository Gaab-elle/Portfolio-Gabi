import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { projectTranslations } from '../../data/projects.i18n.js';
import { useI18n } from '../../i18n/i18n.jsx';

const Projects = ({ visibleSections, sectionRef, openModal }) => {
    const { t, lang } = useI18n();
    const langKey = (typeof lang === 'string' ? lang.toLowerCase() : lang) || 'pt';
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            window.addEventListener('resize', checkScrollButtons);
            return () => {
                container.removeEventListener('scroll', checkScrollButtons);
                window.removeEventListener('resize', checkScrollButtons);
            };
        }
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="modern-projects"
        >
            <div className="projects-container">
                <h2 className="section-subtitle">{t('projects.title')}</h2>
                <h3 className="section-title-large">
                    {t('projects.subtitle')}
                </h3>

                <div className="projects-carousel-wrapper">
                    <div 
                        className="projects-carousel"
                        ref={scrollContainerRef}
                    >
                        {projectsData.map((project, index) => {
                        const i18n = (projectTranslations[langKey] && projectTranslations[langKey].items[project.id]) || {};
                        const statusMap = (projectTranslations[langKey] && projectTranslations[langKey].status) || {};
                        const statusLabel = statusMap[project.status] || project.status;
                        const title = i18n.title || project.title;
                        const description = i18n.description || project.description;
                        return (
                        <div
                            key={project.id}
                            className={`project-card ${
                                visibleSections.has('projects')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={title}
                                />
                            </div>
                            <div className="project-content">
                                <div className="project-category">{i18n.category || project.category || 'PROJETO'}</div>
                                <h3 className="project-title">{title}</h3>
                                <div className="project-links">
                                    <a 
                                        href={project.demoLink || project.codeLink || '#'} 
                                        className="project-link" 
                                        onClick={(e) => {
                                            if (!project.demoLink && !project.codeLink) {
                                                e.preventDefault();
                                                openModal(project);
                                            }
                                        }}
                                        target={project.demoLink || project.codeLink ? "_blank" : undefined}
                                        rel={project.demoLink || project.codeLink ? "noopener noreferrer" : undefined}
                                    >
                                        {t('projects.viewProject')} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    );})}
                    </div>
                    <div className="carousel-nav">
                        <button 
                            className={`carousel-btn ${!canScrollLeft ? 'disabled' : ''}`}
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            aria-label="Projetos anteriores"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button 
                            className={`carousel-btn ${!canScrollRight ? 'disabled' : ''}`}
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            aria-label="Próximos projetos"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;