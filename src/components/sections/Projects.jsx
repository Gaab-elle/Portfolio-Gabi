import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { useI18n } from '../../i18n/i18n.jsx';

const Projects = ({ visibleSections, sectionRef, openModal }) => {
    const { t } = useI18n();
    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-20 px-4"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{
                    background: 'linear-gradient(45deg, #8b45ff, #39ff14)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {t('sections.projects')}
                </h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
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
                                    alt={project.title}
                                />
                                <div className="project-overlay">
                                    <span className={`project-status ${
                                        project.status === 'Concluído' ? 'status-completed' : 'status-development'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">
                                    {project.description}
                                </p>
                                <div className="project-tech">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="tech-tag tech-more">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>
                                <div className="project-links">
                                    {project.demoLink && project.demoLink !== '#' && (
                                        <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                    {project.codeLink && project.codeLink !== '#' && (
                                        <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;