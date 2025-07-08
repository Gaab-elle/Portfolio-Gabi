import React from 'react';
import { X, Menu } from 'lucide-react';

const Navigation = ({ 
    activeSection, 
    isMenuOpen, 
    setIsMenuOpen, 
    scrollToSection 
}) => {
    return (
        <nav className="fixed top-0 w-full z-50" style={{
            background: 'rgba(30, 30, 30, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(139, 69, 255, 0.3)'
        }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold" style={{
                        background: 'linear-gradient(45deg, #8b45ff, #39ff14)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Gabi Ribeiro
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'skills', 'projects', 'blog', 'contact'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="capitalize transition-colors hover:text-white relative"
                                style={{
                                    color: activeSection === section ? '#8b45ff' : '#d1d5db'
                                }}
                            >
                                {section}
                                {activeSection === section && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-green-500 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-purple-500/20 rounded-b-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['home', 'about', 'skills', 'projects', 'blog', 'contact'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="block w-full text-left px-3 py-2 capitalize transition-colors font-medium rounded-md hover:bg-purple-500/10 hover:text-green-400 text-gray-200"
                                >
                                    {section}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;