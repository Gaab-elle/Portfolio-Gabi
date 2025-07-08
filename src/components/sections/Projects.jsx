import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';

const Projects = ({ visibleSections, sectionRef, openModal }) => {
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
                    Projetos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => openModal(project)}
                            className={`project-card glass-card cursor-pointer transition-all duration-300 hover:scale-105 ${
                                visibleSections.has('projects')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="relative overflow-hidden rounded-t-xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className={`px-2 py-1 text-xs rounded-full border ${
                                        project.status === 'Concluído'
                                            ? 'text-green-400 bg-green-500/20 border-green-500/30'
                                            : 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded border bg-purple-500/20 text-purple-300 border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium" style={{ color: '#8b45ff' }}>
                                        {project.category}
                                    </span>
                                    <ExternalLink size={16} className="text-gray-400" />
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