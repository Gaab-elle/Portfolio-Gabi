import React, { useEffect, useRef, useState, useCallback } from 'react';

import { ChevronDown, ExternalLink, Github, Mail, Phone, Linkedin, X, Menu } from 'lucide-react';



// Dados dos projetos

const projectsData = [

    {

        id: 'realEstate',

        title: 'Sistema de Gestão Imobiliária',

        image: './src/Img/Nereus.png',

        description: 'Plataforma web desenvolvida para otimizar o controle de imóveis e residenciais, substituindo processos manuais por uma solução digital intuitiva e eficiente. Interface moderna em dark mode, responsiva e com foco na experiência do usuário.',

        technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Context API'],

        category: 'Full Stack',

        demoLink: 'https://exemplo.com',

        codeLink: 'https://github.com/exemplo',

        status: 'Concluído'

    },

    {

        id: 'osManagement',

        title: 'Sistema de Gestão OS',

        image: './src/Img/YggOS.png',

        description: 'Sistema focado em técnicos de manutenção de hardware para organizar e gerenciar ordens de serviço. Permite registrar atendimentos, clientes, equipamentos e status de conserto.',

        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],

        category: 'Full Stack',

        demoLink: 'https://exemplo.com',

        codeLink: 'https://github.com/exemplo',

        status: 'Em desenvolvimento'

    },

    {

        id: 'builderWebsite',

        title: 'Site para Empreiteiro',

        image: './src/Img/cm.jpeg',

        description: 'Site institucional desenvolvido para um empreiteiro, com foco em apresentar serviços de construção civil, portfólio de obras e formas de contato.',

        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],

        category: 'Frontend',

        demoLink: 'https://exemplo.com',

        codeLink: 'https://github.com/exemplo',

        status: 'Concluído'

    },

    {

        id: 'cybersecurity',

        title: 'Análise de Vulnerabilidades',

        image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&crop=center',

        description: 'Projeto de análise e correção de vulnerabilidades em aplicações web, implementando práticas de segurança e auditoria de código.',

        technologies: ['Python', 'OWASP', 'Kali Linux', 'Burp Suite'],

        category: 'Security',

        demoLink: null,

        codeLink: 'https://github.com/exemplo',

        status: 'Concluído'

    }

];



const skillsData = {

    'Frontend': [

        { name: 'React', level: 90, icon: 'fab fa-react', color: '#61DAFB' },

        { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', color: '#F7DF1E' },

        { name: 'TypeScript', level: 80, icon: 'fas fa-code', color: '#3178C6' },

        { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: '#E34F26' },

        { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: '#1572B6' },

        { name: 'Tailwind CSS', level: 85, icon: 'fas fa-wind', color: '#06B6D4' }

    ],

    'Backend': [

        { name: 'Node.js', level: 85, icon: 'fab fa-node-js', color: '#339933' },

        { name: 'Python', level: 80, icon: 'fab fa-python', color: '#3776AB' },

        { name: 'Express', level: 80, icon: 'fas fa-server', color: '#ffffff' },

        { name: 'Django', level: 75, icon: 'fas fa-horse', color: '#092E20' },

        { name: 'PostgreSQL', level: 85, icon: 'fas fa-database', color: '#336791' },

        { name: 'MongoDB', level: 80, icon: 'fas fa-database', color: '#47A248' }

    ],

    'Security': [

        { name: 'OWASP', level: 85, icon: 'fas fa-shield-alt', color: '#8b45ff' },

        { name: 'Pentesting', level: 80, icon: 'fas fa-search', color: '#39ff14' },

        { name: 'Network Security', level: 75, icon: 'fas fa-network-wired', color: '#8b45ff' },

        { name: 'Linux Hardening', level: 80, icon: 'fab fa-linux', color: '#FCC624' },

        { name: 'AWS Security', level: 70, icon: 'fab fa-aws', color: '#FF9900' },

        { name: 'Cryptography', level: 75, icon: 'fas fa-lock', color: '#8b45ff' }

    ],

    'Tools': [

        { name: 'Git', level: 90, icon: 'fab fa-git-alt', color: '#F05032' },

        { name: 'Docker', level: 75, icon: 'fab fa-docker', color: '#2496ED' },

        { name: 'AWS', level: 70, icon: 'fab fa-aws', color: '#FF9900' },

        { name: 'Figma', level: 80, icon: 'fab fa-figma', color: '#F24E1E' },

        { name: 'VS Code', level: 95, icon: 'fas fa-code-branch', color: '#007ACC' },

        { name: 'Postman', level: 85, icon: 'fas fa-paper-plane', color: '#FF6C37' }

    ]

};



// Dados dos ícones de tecnologias para a animação de chuva (ícones originais)

const techIcons = [

    { icon: 'fab fa-react', name: 'React', color: '#61DAFB' },

    { icon: 'fab fa-js-square', name: 'JavaScript', color: '#F7DF1E' },

    { icon: 'fas fa-code', name: 'TypeScript', color: '#3178C6' },

    { icon: 'fab fa-html5', name: 'HTML5', color: '#E34F26' },

    { icon: 'fab fa-css3-alt', name: 'CSS3', color: '#1572B6' },

    { icon: 'fas fa-wind', name: 'Tailwind', color: '#06B6D4' },

    { icon: 'fab fa-node-js', name: 'Node.js', color: '#339933' },

    { icon: 'fab fa-python', name: 'Python', color: '#3776AB' },

    { icon: 'fas fa-server', name: 'Express', color: '#ffffff' },

    { icon: 'fas fa-horse', name: 'Django', color: '#092E20' },

    { icon: 'fas fa-database', name: 'PostgreSQL', color: '#336791' },

    { icon: 'fas fa-database', name: 'MongoDB', color: '#47A248' },

    { icon: 'fas fa-shield-alt', name: 'Security', color: '#8b45ff' },

    { icon: 'fas fa-search', name: 'Pentesting', color: '#39ff14' },

    { icon: 'fas fa-network-wired', name: 'Network', color: '#8b45ff' },

    { icon: 'fab fa-linux', name: 'Linux', color: '#FCC624' },

    { icon: 'fab fa-aws', name: 'AWS', color: '#FF9900' },

    { icon: 'fas fa-lock', name: 'Crypto', color: '#8b45ff' },

    { icon: 'fab fa-git-alt', name: 'Git', color: '#F05032' },

    { icon: 'fab fa-docker', name: 'Docker', color: '#2496ED' },

    { icon: 'fas fa-code-branch', name: 'VS Code', color: '#007ACC' },

    { icon: 'fas fa-paper-plane', name: 'Postman', color: '#FF6C37' },

    { icon: 'fab fa-figma', name: 'Figma', color: '#F24E1E' },

    { icon: 'fab fa-github', name: 'GitHub', color: '#ffffff' },

    { icon: 'fas fa-terminal', name: 'Terminal', color: '#39ff14' }

];



const PortfolioGabi = () => {

    const [activeSection, setActiveSection] = useState('home');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [visibleSections, setVisibleSections] = useState(new Set());

    const [fallingIcons, setFallingIcons] = useState([]);



    const sectionRefs = useRef({});

    const observerRef = useRef(null);

    const fallingIconsRef = useRef([]);



    // Função para criar ícones caindo

    const createFallingIcon = useCallback(() => {

        const randomTech = techIcons[Math.floor(Math.random() * techIcons.length)];

        const newIcon = {

            id: Math.random(),

            icon: randomTech.icon,

            color: randomTech.color,

            left: Math.random() * 100,

            animationDuration: 3 + Math.random() * 4, // 3-7 segundos

            delay: Math.random() * 2

        };



        setFallingIcons(prev => [...prev, newIcon]);



        // Remove o ícone após a animação

        setTimeout(() => {

            setFallingIcons(prev => prev.filter(icon => icon.id !== newIcon.id));

        }, (newIcon.animationDuration + newIcon.delay) * 1000);

    }, []);



    // Effect para gerar ícones caindo

    useEffect(() => {

        const interval = setInterval(() => {

            createFallingIcon();

        }, 800); // Novo ícone a cada 800ms



        return () => clearInterval(interval);

    }, [createFallingIcon]);



    // Intersection Observer para animações

    const setupIntersectionObserver = useCallback(() => {

        observerRef.current = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setVisibleSections(prev => new Set([...prev, entry.target.id]));

                        setActiveSection(entry.target.id);

                    }

                });

            },

            { threshold: 0.3, rootMargin: '-50px' }

        );



        Object.values(sectionRefs.current).forEach(ref => {

            if (ref) observerRef.current.observe(ref);

        });

    }, []);



    useEffect(() => {

        setupIntersectionObserver();

        return () => {

            if (observerRef.current) {

                observerRef.current.disconnect();

            }

        };

    }, [setupIntersectionObserver]);



    // Handlers

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



    const scrollToSection = useCallback((sectionId) => {

        const element = sectionRefs.current[sectionId];

        if (element) {

            element.scrollIntoView({ behavior: 'smooth' });

            setIsMenuOpen(false);

        }

    }, []);



    return (

        <div className="min-h-screen text-white" style={{

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

                    <i

                        key={iconData.id}

                        className={iconData.icon}

                        style={{

                            position: 'absolute',

                            left: `${iconData.left}%`,

                            top: '-50px',

                            fontSize: '2.5rem',

                            color: iconData.color,

                            animation: `fall ${iconData.animationDuration}s linear ${iconData.delay}s forwards`,

                            opacity: 0.8,

                            textShadow: '0 2px 4px rgba(0,0,0,0.5)'

                        }}

                    ></i>

                ))}

            </div>

            {/* Navigation */}

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

                       

                        {/* Desktop Menu */}

                        <div className="hidden md:flex space-x-8">

                            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (

                                <button

                                    key={section}

                                    onClick={() => scrollToSection(section)}

                                    className={`capitalize transition-colors hover:text-white`}

                                    style={{

                                        color: activeSection === section ? '#8b45ff' : '#d1d5db'

                                    }}

                                >

                                    {section}

                                </button>

                            ))}

                        </div>



                        {/* Mobile Menu Button */}

                        <button

                            className="md:hidden"

                            onClick={() => setIsMenuOpen(!isMenuOpen)}

                        >

                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}

                        </button>

                    </div>



                    {/* Mobile Menu */}

                    {isMenuOpen && (

                        <div className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-purple-500/20">

                            <div className="px-2 pt-2 pb-3 space-y-1">

                                {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (

                                    <button

                                        key={section}

                                        onClick={() => scrollToSection(section)}

                                        className="block w-full text-left px-3 py-2 capitalize transition-colors font-medium"

                                        style={{

                                            color: '#e0e0e0'

                                        }}

                                        onMouseEnter={(e) => {

                                            e.target.style.backgroundColor = 'rgba(139, 69, 255, 0.1)';

                                            e.target.style.color = '#39ff14';

                                        }}

                                        onMouseLeave={(e) => {

                                            e.target.style.backgroundColor = 'transparent';

                                            e.target.style.color = '#e0e0e0';

                                        }}

                                    >

                                        {section}

                                    </button>

                                ))}

                            </div>

                        </div>

                    )}

                </div>

            </nav>



            {/* Hero Section */}

            <section

                id="home"

                ref={el => sectionRefs.current.home = el}

                className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"

            >

                {/* Animated Background Elements */}

                <div className="absolute inset-0 overflow-hidden">

                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                </div>



                <div className="text-center z-10 px-4">

                    {/* Profile Image */}

                    <div className="w-40 h-40 mx-auto mb-8 relative">

                        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-green-500 p-1 animate-pulse">

                            <img

                                src="./src/Img/Perfil.jpg"

                                alt="Gabi Ribeiro"

                                className="w-full h-full rounded-full object-cover"

                            />

                        </div>

                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-bounce"></div>

                    </div>



                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in" style={{

                        background: 'linear-gradient(45deg, #8b45ff, #ae81ff, #39ff14)',

                        backgroundClip: 'text',

                        WebkitBackgroundClip: 'text',

                        WebkitTextFillColor: 'transparent'

                    }}>

                        Gabi Ribeiro

                    </h1>

                   

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">

                        Full Stack Developer • Cybersecurity Entusiasta • Empresaria

                    </p>



                    <div className="flex flex-wrap justify-center gap-4 mb-12">

                        <a href="mailto:ribeiro.gabrielle989@gmail.com" className="btn-primary">

                            <Mail size={20} />

                            <span>Contact Me</span>

                        </a>

                        <a href="https://github.com/Gaab-elle" target="_blank" rel="noopener noreferrer" className="btn-secondary">

                            <Github size={20} />

                            <span>GitHub</span>

                        </a>

                        <a href="https://linkedin.com/in/gabrielle.ribeiro10" target="_blank" rel="noopener noreferrer" className="btn-secondary">

                            <Linkedin size={20} />

                            <span>LinkedIn</span>

                        </a>

                    </div>



                    <button

                        onClick={() => scrollToSection('about')}

                        className="animate-bounce"

                    >

                        <ChevronDown size={32} style={{ color: '#8b45ff' }} />

                    </button>

                </div>

            </section>



            {/* About Section */}

            <section

                id="about"

                ref={el => sectionRefs.current.about = el}

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

                        visibleSections.has('about') ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'

                    }`}>

                        <div className="grid md:grid-cols-2 gap-8 items-center">

                            <div>

                                <p className="text-lg text-gray-300 leading-relaxed mb-6">

                                    Sou uma desenvolvedora apaixonada por tecnologia com experiência em criar

                                    soluções inovadoras e eficientes, especialmente em aplicações web e

                                    segurança da informação.

                                </p>

                                <p className="text-lg text-gray-300 leading-relaxed">

                                    Minha abordagem Full Stack me permite construir sistemas robustos e seguros

                                    de ponta a ponta, sempre com foco em aprender novas tecnologias e aplicar

                                    as melhores práticas em segurança e desenvolvimento ágil.

                                </p>

                            </div>

                            <div className="space-y-4">

                                <div className="flex items-center space-x-3">

                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                                    <span>2+ anos de experiência</span>

                                </div>

                                <div className="flex items-center space-x-3">

                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>

                                    <span>10+ projetos concluídos</span>

                                </div>

                                <div className="flex items-center space-x-3">

                                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>

                                    <span>Foco em segurança e performance</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* Skills Section */}

            <section

                id="skills"

                ref={el => sectionRefs.current.skills = el}

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

                                className={`glass-card p-6 transition-all duration-1000 ${

                                    visibleSections.has('skills')

                                        ? 'animate-slide-up opacity-100'

                                        : 'opacity-0 translate-y-10'

                                }`}

                                style={{ animationDelay: `${categoryIndex * 200}ms` }}

                            >

                                <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#8b45ff' }}>

                                    {category}

                                </h3>

                                <div className="space-y-3">

                                    {skills.map((skill, index) => (

                                        <div key={skill.name} className="skill-item">

                                            <div className="flex items-center justify-between mb-1">

                                                <span className="flex items-center space-x-2">

                                                    <i className={skill.icon} style={{ color: skill.color }}></i>

                                                    <span className="text-sm">{skill.name}</span>

                                                </span>

                                                <span className="text-xs text-gray-400">{skill.level}%</span>

                                            </div>

                                            <div className="w-full bg-gray-700 rounded-full h-2">

                                                <div

                                                    className="h-2 rounded-full transition-all duration-1000 ease-out"

                                                    style={{

                                                        background: 'linear-gradient(45deg, #8b45ff, #39ff14)',

                                                        width: visibleSections.has('skills') ? `${skill.level}%` : '0%',

                                                        animationDelay: `${(categoryIndex * 200) + (index * 100)}ms`

                                                    }}

                                                ></div>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>



            {/* Projects Section */}

            <section

                id="projects"

                ref={el => sectionRefs.current.projects = el}

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



                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {projectsData.map((project, index) => (

                            <div

                                key={project.id}

                                onClick={() => openModal(project)}

                                className={`project-card cursor-pointer transition-all duration-1000 ${

                                    visibleSections.has('projects')

                                        ? 'animate-slide-up opacity-100'

                                        : 'opacity-0 translate-y-10'

                                }`}

                                style={{ animationDelay: `${index * 200}ms` }}

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

                                                ? 'text-green-400'

                                                : 'text-yellow-400'

                                        }`} style={{

                                            backgroundColor: project.status === 'Concluído'

                                                ? 'rgba(57, 255, 20, 0.2)'

                                                : 'rgba(251, 191, 36, 0.2)',

                                            borderColor: project.status === 'Concluído'

                                                ? 'rgba(57, 255, 20, 0.3)'

                                                : 'rgba(251, 191, 36, 0.3)'

                                        }}>

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

                                        {project.technologies.slice(0, 3).map((tech) => (

                                            <span

                                                key={tech}

                                                className="px-2 py-1 text-xs rounded border"

                                                style={{

                                                    backgroundColor: 'rgba(139, 69, 255, 0.2)',

                                                    color: '#ae81ff',

                                                    borderColor: 'rgba(139, 69, 255, 0.3)'

                                                }}

                                            >

                                                {tech}

                                            </span>

                                        ))}

                                        {project.technologies.length > 3 && (

                                            <span className="px-2 py-1 text-xs bg-gray-600/50 text-gray-400 rounded">

                                                +{project.technologies.length - 3}

                                            </span>

                                        )}

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



            {/* Contact Section */}

            <section

                id="contact"

                ref={el => sectionRefs.current.contact = el}

                className="py-20 px-4"

            >

                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{

                        background: 'linear-gradient(45deg, #8b45ff, #39ff14)',

                        backgroundClip: 'text',

                        WebkitBackgroundClip: 'text',

                        WebkitTextFillColor: 'transparent'

                    }}>

                        Vamos Conversar?

                    </h2>

                   

                    <div className={`glass-card p-8 md:p-12 transition-all duration-1000 ${

                        visibleSections.has('contact') ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'

                    }`}>

                        <p className="text-xl text-gray-300 mb-8">

                            Estou sempre aberta a novas oportunidades e projetos interessantes.

                            Entre em contato comigo!

                        </p>

                       

                        <div className="flex flex-wrap justify-center gap-6">

                            <a

                                href="mailto:ribeiro.gabrielle989@gmail.com"

                                className="contact-link"

                            >

                                <Mail size={24} />

                                <span>ribeiro.gabrielle989@gmail.com</span>

                            </a>

                            <a

                                href="tel:+5591980683040"

                                className="contact-link"

                            >

                                <Phone size={24} />

                                <span>(91) 98068-3040</span>

                            </a>

                            <a

                                href="https://linkedin.com/in/gabrielle.ribeiro10"

                                target="_blank"

                                rel="noopener noreferrer"

                                className="contact-link"

                            >

                                <Linkedin size={24} />

                                <span>LinkedIn</span>

                            </a>

                            <a

                                href="https://github.com/Gaab-elle"

                                target="_blank"

                                rel="noopener noreferrer"

                                className="contact-link"

                            >

                                <Github size={24} />

                                <span>GitHub</span>

                            </a>

                        </div>

                    </div>

                </div>

            </section>



            {/* Project Modal */}

            {isModalOpen && selectedProject && (

                <div

                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"

                    onClick={closeModal}

                >

                    <div

                        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-in"

                        onClick={(e) => e.stopPropagation()}

                    >

                        <div className="relative">

                            <img

                                src={selectedProject.image}

                                alt={selectedProject.title}

                                className="w-full h-64 object-cover rounded-t-2xl"

                            />

                            <button

                                onClick={closeModal}

                                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"

                            >

                                <X size={20} />

                            </button>

                        </div>

                       

                        <div className="p-8">

                            <div className="flex items-center justify-between mb-4">

                                <h3 className="text-3xl font-bold">{selectedProject.title}</h3>

                                <span className={`px-3 py-1 text-sm rounded-full border ${

                                    selectedProject.status === 'Concluído'

                                        ? 'text-green-400'

                                        : 'text-yellow-400'

                                }`} style={{

                                    backgroundColor: selectedProject.status === 'Concluído'

                                        ? 'rgba(57, 255, 20, 0.2)'

                                        : 'rgba(251, 191, 36, 0.2)',

                                    borderColor: selectedProject.status === 'Concluído'

                                        ? 'rgba(57, 255, 20, 0.3)'

                                        : 'rgba(251, 191, 36, 0.3)'

                                }}>

                                    {selectedProject.status}

                                </span>

                            </div>

                           

                            <p className="text-gray-300 text-lg leading-relaxed mb-6">

                                {selectedProject.description}

                            </p>

                           

                            <div className="mb-6">

                                <h4 className="text-xl font-semibold mb-3" style={{ color: '#8b45ff' }}>

                                    Tecnologias Utilizadas

                                </h4>

                                <div className="flex flex-wrap gap-3">

                                    {selectedProject.technologies.map((tech) => (

                                        <span

                                            key={tech}

                                            className="px-3 py-2 rounded-lg border"

                                            style={{

                                                backgroundColor: 'rgba(139, 69, 255, 0.2)',

                                                color: '#ae81ff',

                                                borderColor: 'rgba(139, 69, 255, 0.3)'

                                            }}

                                        >

                                            {tech}

                                        </span>

                                    ))}

                                </div>

                            </div>

                           

                            <div className="flex gap-4">

                                {selectedProject.demoLink && (

                                    <a

                                        href={selectedProject.demoLink}

                                        target="_blank"

                                        rel="noopener noreferrer"

                                        className="btn-primary"

                                    >

                                        <ExternalLink size={20} />

                                        <span>Ver Demo</span>

                                    </a>

                                )}

                                {selectedProject.codeLink && (

                                    <a

                                        href={selectedProject.codeLink}

                                        target="_blank"

                                        rel="noopener noreferrer"

                                        className="btn-secondary"

                                    >

                                        <Github size={20} />

                                        <span>Código</span>

                                    </a>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            )}



            {/* Footer */}

            <footer className="py-8 px-4" style={{ borderTop: '1px solid rgba(139, 69, 255, 0.2)' }}>

                <div className="max-w-6xl mx-auto text-center">

                    <p className="text-gray-400">

                        © 2025 Gabi Ribeiro. Desenvolvido com 💜 e ☕

                    </p>

                </div>

            </footer>



            {/* CSS para animação dos ícones caindo */}

            <style jsx>{`

                @keyframes fall {

                    0% {

                        transform: translateY(-50px) rotate(0deg);

                        opacity: 0;

                    }

                    10% {

                        opacity: 0.7;

                    }

                    90% {

                        opacity: 0.7;

                    }

                    100% {

                        transform: translateY(calc(100vh + 50px)) rotate(360deg);

                        opacity: 0;

                    }

                }

            `}</style>

        </div>

    );

};



export default PortfolioGabi;