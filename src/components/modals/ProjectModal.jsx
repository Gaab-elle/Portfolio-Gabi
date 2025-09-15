import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ isOpen, project, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-animation"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white"
                        aria-label="Fechar modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                        <div className="flex gap-2">
                            <span className={`px-3 py-1 text-sm rounded-full border ${
                                project.status === 'Concluído'
                                    ? 'text-green-400 bg-green-500/20 border-green-500/30'
                                    : 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                            }`}>
                                {project.status}
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full border text-blue-400 bg-blue-500/20 border-blue-500/30">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Descrição detalhada */}
                    {project.longDescription && (
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>
                                Sobre o Projeto
                            </h4>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </div>
                        </div>
                    )}

                    {/* Funcionalidades */}
                    {project.features && (
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>
                                Principais Funcionalidades
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-300">
                                        <span className="text-green-400">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Desafios e Resultados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {project.challenges && (
                            <div>
                                <h4 className="text-lg font-semibold mb-2" style={{ color: '#8b45ff' }}>
                                    Desafios
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>
                        )}
                        {project.results && (
                            <div>
                                <h4 className="text-lg font-semibold mb-2" style={{ color: '#8b45ff' }}>
                                    Resultados
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {project.results}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>
                            Tecnologias Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-2 rounded-lg border text-sm bg-purple-500/20 text-purple-300 border-purple-500/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {project.demoLink && project.demoLink !== '#' && (
                            <a
                                href={project.demoLink} // Corrigido: project.demoLink
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary group"
                            >
                                <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                                <span>Ver Demo</span>
                            </a>
                        )}
                        {project.codeLink && project.codeLink !== '#' && (
                            <a
                                href={project.codeLink} // Corrigido: project.codeLink
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary group"
                            >
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                                <span>Código</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
