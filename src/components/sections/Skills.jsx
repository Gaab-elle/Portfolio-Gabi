import React from 'react';
import DynamicLucideIcon from '../common/DynamicLucideIcon';
import { skillsData } from '../../data/skills';

const Skills = ({ visibleSections, sectionRef }) => {
    return (
        <section
            id="skills"
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
                    Habilidades
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <div
                            key={category}
                            className={`glass-card p-6 rounded-xl transition-all duration-1000 ${
                                visibleSections.has('skills')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#8b45ff' }}>
                                {category}
                            </h3>
                            <div className="space-y-3">
                                {skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="flex items-center space-x-2 text-gray-300">
                                                <DynamicLucideIcon iconName={skill.icon} size={20} color={skill.color} />
                                                <span className="text-sm">{skill.name}</span>
                                            </span>
                                            <span className="text-xs text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{
                                                    background: 'linear-gradient(45deg, #8b45ff, #39ff14)',
                                                    width: visibleSections.has('skills') ? `${skill.level}%` : '0%'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;