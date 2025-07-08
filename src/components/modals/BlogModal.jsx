import React from 'react';
import { X, Calendar, Clock, User, Tag, Github, Linkedin } from 'lucide-react';

const BlogModal = ({ isOpen, post, onClose }) => {
    if (!isOpen || !post) return null;

    const processMarkdownContent = (content) => {
        return content.split('\n').map((paragraph, index) => {
            // Processar markdown básico
            if (paragraph.startsWith('# ')) {
                return (
                    <h1 key={index} className="text-2xl font-bold text-white mb-4 mt-8">
                        {paragraph.substring(2)}
                    </h1>
                );
            }
            if (paragraph.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-xl font-semibold text-white mb-3 mt-6">
                        {paragraph.substring(3)}
                    </h2>
                );
            }
            if (paragraph.startsWith('### ')) {
                return (
                    <h3 key={index} className="text-lg font-semibold text-white mb-2 mt-4">
                        {paragraph.substring(4)}
                    </h3>
                );
            }
            if (paragraph.startsWith('```')) {
                return null; // Ignorar por simplicidade
            }
            if (paragraph.startsWith('- ')) {
                return (
                    <li key={index} className="text-gray-300 mb-1 ml-4">
                        {paragraph.substring(2)}
                    </li>
                );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                    <p key={index} className="text-white font-semibold mb-3">
                        {paragraph.substring(2, paragraph.length - 2)}
                    </p>
                );
            }
            if (paragraph.trim() === '') {
                return <br key={index} />;
            }

            // Processar código inline e links
            const processedParagraph = paragraph
                .replace(/`([^`]+)`/g, '<code class="bg-gray-700 px-2 py-1 rounded text-green-400">$1</code>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                .replace(/\*([^*]+)\*/g, '<em class="text-purple-300">$1</em>');

            return (
                <p
                    key={index}
                    className="text-gray-300 mb-4"
                    dangerouslySetInnerHTML={{ __html: processedParagraph }}
                />
            );
        });
    };
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
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-t-2xl"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white"
                        aria-label="Fechar modal"
                    >
                        <X size={20} />
                    </button>
                    <div className="absolute bottom-4 left-4">
                        <span className={`px-3 py-1 text-sm rounded-full font-medium border ${
                            post.category === 'React' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                            post.category === 'Security' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                            post.category === 'DevOps' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                            post.category === 'Career' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                            'bg-purple-500/20 text-purple-300 border-purple-500/30'
                        }`}>
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span><Calendar size={14} className="inline-block mr-1" />{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                            <span><Clock size={14} className="inline-block mr-1" />{post.readTime}</span>
                            <span><User size={14} className="inline-block mr-1" />Por {post.author}</span>
                        </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">{post.title}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded border bg-purple-500/10 text-purple-300 border-purple-500/20"
                            >
                                <Tag size={12} className="inline-block mr-1" />#{tag}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <div
                            className="text-gray-300 leading-relaxed"
                            style={{
                                lineHeight: '1.8',
                                fontSize: '16px'
                            }}
                        >
                            {processMarkdownContent(post.content)}
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
                                    <User size={24} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{post.author}</p>
                                    <p className="text-gray-400 text-sm">Full Stack Developer & Security Enthusiast</p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                {/* Links de redes sociais corrigidos */}
                                <a
                                    href="[https://github.com/Gaab-elle](https://github.com/Gaab-elle)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Perfil do GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="[https://linkedin.com/in/gabrielle.ribeiro10](https://linkedin.com/in/gabrielle.ribeiro10)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="Perfil do LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
