import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { useI18n } from '../../i18n/i18n.jsx';
import { projectTranslations } from '../../data/projects.i18n.js';

const ProjectModal = ({ isOpen, project, onClose }) => {
    if (!isOpen || !project) return null;
    
    const { t, lang } = useI18n();
    const langKey = (typeof lang === 'string' ? lang.toLowerCase() : lang) || 'pt';
    const i18n = (projectTranslations[langKey] && projectTranslations[langKey].items[project.id]) || {};
    const statusMap = (projectTranslations[langKey] && projectTranslations[langKey].status) || {};
    const statusLabel = statusMap[project.status] || project.status;
    const title = i18n.title || project.title;
    const description = i18n.description || project.description;
    const longDescription = i18n.longDescription || project.longDescription;
    const features = i18n.features || project.features;
    const challenges = i18n.challenges || project.challenges;
    const results = i18n.results || project.results;

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
                        alt={title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white"
                        aria-label={t('modal.close')}
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                        <h3 className="text-3xl font-bold text-white">{title}</h3>
                        <div className="flex gap-2">
                            <span className={`px-3 py-1 text-sm rounded-full border ${
                                statusLabel === (statusMap['Concluído'] || 'Concluído')
                                    ? 'text-green-400 bg-green-500/20 border-green-500/30'
                                    : 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30'
                            }`}>
                                {statusLabel}
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full border text-blue-400 bg-blue-500/20 border-blue-500/30">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* Descrição detalhada */}
                    {longDescription && (
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>
                                {t('modal.aboutProject')}
                            </h4>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {longDescription}
                            </div>
                        </div>
                    )}

                    {/* Funcionalidades */}
                    {features && (
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>
                                {t('modal.mainFeatures')}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {features.map((feature, index) => (
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
                        {challenges && (
                            <div>
                                <h4 className="text-lg font-semibold mb-2" style={{ color: '#8b45ff' }}>
                                    {t('modal.challenges')}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {challenges}
                                </p>
                            </div>
                        )}
                        {results && (
                            <div>
                                <h4 className="text-lg font-semibold mb-2" style={{ color: '#8b45ff' }}>
                                    {t('modal.results')}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {results}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>
                            {t('modal.technologies')}
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
                                <span>{t('modal.viewDemo')}</span>
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
                                <span>{t('modal.code')}</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
