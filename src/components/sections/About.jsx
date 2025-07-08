import React from 'react';

const About = ({ visibleSections, sectionRef }) => {
    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 px-4"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{
                    background: 'linear-gradient(45deg, #8b45ff, #39ff14)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Sobre Mim
                </h2>

                <div className={`glass-card p-8 md:p-12 transition-all duration-1000 ${
                    visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                Desenvolvedora Full Stack com foco em criar soluções eficientes e seguras. 
                                Tenho especial interesse em cibersegurança e estou sempre explorando novas 
                                tecnologias para expandir meu conhecimento.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Combino criatividade com código limpo para desenvolver aplicações web modernas. 
                                Meu objetivo é contribuir para um ecossistema digital mais seguro e inovador.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                                <span>Desenvolvimento Full Stack</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                                <span>Entusiasta de Cibersegurança</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <div className="w-3 h-3 bg-pink-500 rounded-full" />
                                <span>Aprendizado contínuo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;