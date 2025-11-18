import React, { createContext, useContext, useMemo, useState, useCallback } from "react";

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      services: "Serviços",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      title1: "Construo soluções",
      title2: "seguras, rápidas e orientadas ao usuário.",
      description: "Oi, eu sou a Gabi! Transformo complexidade em interfaces simples, intuitivas e bonitas. Meu objetivo é desenvolver produtos que encantem e realmente façam diferença no dia a dia das pessoas.",
      bookCall: "Marcar uma conversa",
      viewCV: "Ver currículo",
    },
    services: {
      title: "SERVIÇOS",
      subtitle: "Código eficiente, automações inteligentes e sistemas confiáveis.",
      card1Title: "O que posso fazer por você",
      card1Description: "Crio soluções completas do front ao back, integrando automação e experiência do usuário. Aqui estão os serviços que ofereço:",
      card1Item1: "Desenvolvimento Web Fullstack",
      card1Item2: "Automação (Bots, IA, integrações e workflows)",
      card1Item3: "Design UX/UI para produtos digitais",
      card2Title: "Aplicações que domino",
      card2Description: "Domino as ferramentas e stacks que impulsionam o desenvolvimento moderno:",
      card2Items: [
        "JavaScript / TypeScript",
        "PHP / Laravel",
        "Node.js / Express / APIs REST",
        "React / Next.js",
        "Automação com Python (bots, RPA, IA)",
        "Automação com N8N"
      ],
      card3Title: "O que você pode esperar",
      card3Description: "Entrego soluções completas, confiáveis e preparadas para crescer junto com o seu negócio:",
      card3Item1: "Código limpo, performático e escalável",
      card3Item2: "Automação integrada para reduzir custos e aumentar produtividade",
      card3Item3: "Interfaces rápidas, acessíveis e intuitivas",
      card3Item4: "Arquitetura organizada e fácil de manter",
      card3Item5: "Entrega ágil, documentação e suporte claro",
    },
    projects: {
      title: "PROJETOS",
      subtitle: "Sistemas, automações e experiências que entregam impacto.",
      viewAll: "Ver todos os projetos",
      viewProject: "Ver projeto",
    },
    aboutMe: {
      subtitle: "DESENVOLVEDORA FULL STACK",
      title: "Essa sou eu!",
      description: "Geek, astuta e movida por uma curiosidade que nunca desliga. Trabalho no desenvolvimento end-to-end da arquitetura ao deploy sempre aliando técnica, estratégia e sensibilidade humana. Minha experiência abrange criação de sistemas escaláveis, automações inteligentes, integrações robustas e interfaces que realmente respeitam a jornada do usuário. Sou apaixonada por transformar complexidade em soluções claras e funcionais, mantendo código limpo, bem projetado e preparado para crescer. E, como boa geek, trago comigo aquele brilho nos olhos por tecnologia, inovação e tudo que instiga a explorar além do óbvio — seja otimizando um fluxo de dados ou celebrando pequenas descobertas que fazem a diferença no dia a dia. Unindo criatividade, lógica e muita curiosidade, construo soluções que não apenas funcionam, mas encantam.",
    },
    testimonials: {
      title: "DEPOIMENTOS",
      subtitle: "Palavras na rua",
      prev: "Depoimento anterior",
      next: "Próximo depoimento",
      testimonial1Name: "Cliente Satisfeito",
      testimonial1Role: "CEO, Empresa Tech",
      testimonial1Company: "Tech Solutions",
      testimonial1Text: "Gabi nos ajudou a desenvolver um software tão intuitivo que não precisou de um tutorial. Ela resolveu problemas complexos com design brilhante.",
      testimonial2Name: "Cliente Feliz",
      testimonial2Role: "Founder, Startup",
      testimonial2Company: "StartupX",
      testimonial2Text: "Trabalhar com Gabi foi uma experiência excepcional. Ela entendeu perfeitamente nossa visão e transformou em realidade.",
    },
    faq: {
      title: "FAQ",
      subtitle: "Perguntas frequentes",
      q1: "Que tipo de projetos você aceita?",
      a1: "Aceito projetos de desenvolvimento web e mobile, automação com IA, sistemas web completos e consultoria em tecnologia. Trabalho principalmente com React, Node.js, Python e PHP.",
      q2: "Qual é sua taxa horária?",
      a2: "Minha taxa horária varia dependendo do escopo e complexidade do projeto. Entre em contato para uma cotação personalizada.",
      q3: "Em que fuso horário você trabalha?",
      a3: "Trabalho no horário de Brasília (GMT-3). Sou mais flexível para reuniões com clientes em diferentes fusos horários.",
      q4: "Qual é o prazo típico para um projeto?",
      a4: "O prazo varia de acordo com a complexidade do projeto. Projetos simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses.",
      q5: "Como você cobra pelos projetos?",
      a5: "Ofereço diferentes modelos: taxa horária, preço fixo por projeto ou retainer mensal. A melhor opção depende das necessidades específicas de cada cliente.",
      q7: "Quais métricas você usa para medir o sucesso?",
      a7: "Uso métricas como tempo de carregamento, taxa de conversão, satisfação do usuário, performance do código e alcance dos objetivos do negócio.",
      q8: "E se eu precisar de ajuda depois que o projeto estiver completo?",
      a8: "Ofereço suporte contínuo e manutenção após o lançamento. Também forneço documentação completa e treinamento para sua equipe.",
    },
    sections: {
      aboutTitle: "Sobre Mim",
      skillsTitle: "Habilidades",
      projectsTitle: "Projetos",
      contactTitle: "Vamos Conversar?",
      contactSubtitle:
        "Estou sempre aberta a novas oportunidades e projetos interessantes. Entre em contato comigo!",
    },
    about: {
      p1:
        "Sou Desenvolvedora Full Stack e adoro transformar ideias em soluções práticas e funcionais. Tenho um interesse especial em automações, porque acredito que a tecnologia deve simplificar a vida das pessoas e tornar processos mais leves.",
      p2:
        "Combino criatividade com código limpo para desenvolver aplicações web modernas. Meu objetivo é criar soluções que automatizem processos, tragam praticidade e contribuam para um ecossistema digital mais eficiente e inovador.",
      specialtiesTitle: "Minhas Especialidades",
    },
    stats: {
      completed: "Projetos Completados",
      years: "Anos de Experiência",
      techs: "Tecnologias",
      satisfaction: "Satisfação do Cliente",
    },
    contact: {
      title: "CONTATO",
      subtitle: "Pronto para criar algo incrível?",
      subtitleLarge: "Vamos conversar.",
      description: "Entre em contato comigo através dos links abaixo ou envie uma mensagem.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    modal: {
      close: "Fechar modal",
      aboutProject: "Sobre o Projeto",
      mainFeatures: "Principais Funcionalidades",
      challenges: "Desafios",
      results: "Resultados",
      technologies: "Tecnologias Utilizadas",
      viewDemo: "Ver Demo",
      code: "Código",
    },
    footer: {
      brand: "Portfolio Creator.",
      address: "Desenvolvedora Full Stack, Brasil",
      email: "hi@gabrielle.com",
      aboutTitle: "Sobre",
      servicesTitle: "Serviços",
      moreTitle: "Mais",
      contact: "Contato",
      services: "Serviços",
      projects: "Projetos",
      experience: "Experiência",
      madeWith: "Made with",
      copyright: "© 2025 Gaabzy. Desenvolvido por Gabrielle Ribeiro",
    },
    langLabel: "Idioma",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title1: "I build solutions",
      title2: "secure, fast and user-oriented.",
      description: "Hi, I'm Gabi! I transform complexity into simple, intuitive and beautiful interfaces. My goal is to develop products that delight and really make a difference in people's daily lives.",
      bookCall: "Book a call",
      viewCV: "View resume",
    },
    services: {
      title: "SERVICES",
      subtitle: "Efficient code, intelligent automations and reliable systems.",
      card1Title: "What I can do for you",
      card1Description: "I create complete solutions from front to back, integrating automation and user experience. Here are the services I offer:",
      card1Item1: "Fullstack Web Development",
      card1Item2: "Automation (Bots, AI, integrations and workflows)",
      card1Item3: "UX/UI Design for digital products",
      card2Title: "Applications I'm fluent in",
      card2Description: "I master the tools and stacks that drive modern development:",
      card2Items: [
        "JavaScript / TypeScript",
        "PHP / Laravel",
        "Node.js / Express / REST APIs",
        "React / Next.js",
        "Automation with Python (bots, RPA, AI)",
        "Automation with N8N"
      ],
      card3Title: "What you can expect",
      card3Description: "I deliver complete, reliable solutions ready to grow with your business:",
      card3Item1: "Clean, performant and scalable code",
      card3Item2: "Integrated automation to reduce costs and increase productivity",
      card3Item3: "Fast, accessible and intuitive interfaces",
      card3Item4: "Organized and easy-to-maintain architecture",
      card3Item5: "Agile delivery, documentation and clear support",
    },
    projects: {
      title: "PROJECTS",
      subtitle: "Systems, automations and experiences that deliver impact.",
      viewAll: "View all projects",
      viewProject: "View project",
    },
    aboutMe: {
      subtitle: "FULL STACK DEVELOPER",
      title: "That's me!",
      description: "I work in end-to-end development: from architecture to deployment, including automations, integrations and user experience. My focus is to create scalable, accessible solutions maintained with clean and well-designed code.",
    },
    testimonials: {
      title: "TESTIMONIALS",
      subtitle: "Word on the street",
      prev: "Previous testimonial",
      next: "Next testimonial",
      testimonial1Name: "Satisfied Client",
      testimonial1Role: "CEO, Tech Company",
      testimonial1Company: "Tech Solutions",
      testimonial1Text: "Gabi helped us develop software so intuitive it didn't need a walkthrough. She solved complex problems with brilliant design.",
      testimonial2Name: "Happy Client",
      testimonial2Role: "Founder, Startup",
      testimonial2Company: "StartupX",
      testimonial2Text: "Working with Gabi was an exceptional experience. She perfectly understood our vision and made it reality.",
    },
    faq: {
      title: "FAQ",
      subtitle: "Frequently asked questions",
      q1: "What type of projects do you take on?",
      a1: "I accept web and mobile development projects, AI automation, complete web systems and technology consulting. I work mainly with React, Node.js, Python and PHP.",
      q2: "What is your hourly rate?",
      a2: "My hourly rate varies depending on the scope and complexity of the project. Contact me for a personalized quote.",
      q3: "What time zone do you work in?",
      a3: "I work in Brasília time (GMT-3). I'm flexible for meetings with clients in different time zones.",
      q4: "What is the typical timeline for a project?",
      a4: "The timeline varies according to the complexity of the project. Simple projects can take 2 to 4 weeks, while more complex projects can take 2 to 6 months.",
      q5: "How do you charge for projects?",
      a5: "I offer different models: hourly rate, fixed price per project or monthly retainer. The best option depends on the specific needs of each client.",
      q7: "What metrics do you use to measure success?",
      a7: "I use metrics such as loading time, conversion rate, user satisfaction, code performance and achievement of business objectives.",
      q8: "What if I need help after the project is complete?",
      a8: "I offer ongoing support and maintenance after launch. I also provide complete documentation and training for your team.",
    },
    sections: {
      aboutTitle: "About Me",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      contactTitle: "Let's Talk?",
      contactSubtitle:
        "I'm always open to new opportunities and interesting projects. Get in touch!",
    },
    about: {
      p1:
        "I'm a Full Stack Developer who loves turning ideas into practical, functional solutions. I'm especially interested in automation because I believe technology should simplify people's lives and make processes lighter.",
      p2:
        "I combine creativity with clean code to build modern web applications. My goal is to create solutions that automate processes, bring practicality, and contribute to a more efficient and innovative digital ecosystem.",
      specialtiesTitle: "My Specialties",
    },
    stats: {
      completed: "Projects Completed",
      years: "Years of Experience",
      techs: "Technologies",
      satisfaction: "Client Satisfaction",
    },
    contact: {
      title: "CONTACT",
      subtitle: "Ready to build something amazing?",
      subtitleLarge: "Let's talk.",
      description: "Get in touch with me through the links below or send a message.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
    },
    modal: {
      close: "Close modal",
      aboutProject: "About the Project",
      mainFeatures: "Main Features",
      challenges: "Challenges",
      results: "Results",
      technologies: "Technologies Used",
      viewDemo: "View Demo",
      code: "Code",
    },
    footer: {
      brand: "Portfolio Creator.",
      address: "Full Stack Developer, Brazil",
      email: "hi@gabrielle.com",
      aboutTitle: "About",
      servicesTitle: "Services",
      moreTitle: "More",
      contact: "Contact",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      madeWith: "Made with",
      copyright: "© 2025 Gaabzy. Developed by Gabrielle Ribeiro",
    },
    langLabel: "Language",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title1: "Construyo soluciones",
      title2: "seguras, rápidas y orientadas al usuario.",
      description: "¡Hola, soy Gabi! Transformo la complejidad en interfaces simples, intuitivas y hermosas. Mi objetivo es desarrollar productos que encanten y realmente marquen la diferencia en el día a día de las personas.",
      bookCall: "Agendar una conversación",
      viewCV: "Ver currículum",
    },
    services: {
      title: "SERVICIOS",
      subtitle: "Código eficiente, automatizaciones inteligentes y sistemas confiables.",
      card1Title: "Lo que puedo hacer por ti",
      card1Description: "Creo soluciones completas del front al back, integrando automatización y experiencia del usuario. Aquí están los servicios que ofrezco:",
      card1Item1: "Desarrollo Web Fullstack",
      card1Item2: "Automatización (Bots, IA, integraciones y flujos de trabajo)",
      card1Item3: "Diseño UX/UI para productos digitales",
      card2Title: "Aplicaciones que domino",
      card2Description: "Domino las herramientas y stacks que impulsan el desarrollo moderno:",
      card2Items: [
        "JavaScript / TypeScript",
        "PHP / Laravel",
        "Node.js / Express / REST APIs",
        "React / Next.js",
        "Automatización con Python (bots, RPA, IA)",
        "Automatización con N8N"
      ],
      card3Title: "Lo que puedes esperar",
      card3Description: "Entregó soluciones completas, confiables y preparadas para crecer junto con tu negocio:",
      card3Item1: "Código limpio, performático y escalable",
      card3Item2: "Automatización integrada para reducir costos y aumentar la productividad",
      card3Item3: "Interfaces rápidas, accesibles e intuitivas",
      card3Item4: "Arquitectura organizada y fácil de mantener",
      card3Item5: "Entrega ágil, documentación y soporte claro",
    },
    projects: {
      title: "PROYECTOS",
      subtitle: "Sistemas, automatizaciones y experiencias que generan impacto.",
      viewAll: "Ver todos los proyectos",
      viewProject: "Ver proyecto",
    },
    aboutMe: {
      subtitle: "DESARROLLADORA FULL STACK",
      title: "¡Esa soy yo!",
      description: "Actúo en el desarrollo end-to-end: desde la arquitectura hasta el despliegue, incluyendo automatizaciones, integraciones y experiencia del usuario. Mi enfoque es crear soluciones escalables, accesibles y mantenidas con código limpio y bien diseñado.",
    },
    testimonials: {
      title: "TESTIMONIOS",
      subtitle: "Lo que se dice",
      prev: "Testimonio anterior",
      next: "Próximo testimonio",
      testimonial1Name: "Cliente Satisfecho",
      testimonial1Role: "CEO, Empresa Tech",
      testimonial1Company: "Tech Solutions",
      testimonial1Text: "Gabi nos ayudó a desarrollar un software tan intuitivo que no necesitó un tutorial. Resolvió problemas complejos con diseño brillante.",
      testimonial2Name: "Cliente Feliz",
      testimonial2Role: "Fundador, Startup",
      testimonial2Company: "StartupX",
      testimonial2Text: "Trabajar con Gabi fue una experiencia excepcional. Entendió perfectamente nuestra visión y la hizo realidad.",
    },
    faq: {
      title: "FAQ",
      subtitle: "Preguntas frecuentes",
      q1: "¿Qué tipo de proyectos aceptas?",
      a1: "Acepto proyectos de desarrollo web y móvil, automatización con IA, sistemas web completos y consultoría tecnológica. Trabajo principalmente con React, Node.js, Python y PHP.",
      q2: "¿Cuál es tu tarifa por hora?",
      a2: "Mi tarifa por hora varía según el alcance y la complejidad del proyecto. Contáctame para una cotización personalizada.",
      q3: "¿En qué zona horaria trabajas?",
      a3: "Trabajo en horario de Brasília (GMT-3). Soy flexible para reuniones con clientes en diferentes zonas horarias.",
      q4: "¿Cuál es el plazo típico para un proyecto?",
      a4: "El plazo varía según la complejidad del proyecto. Los proyectos simples pueden tomar de 2 a 4 semanas, mientras que los proyectos más complejos pueden tomar de 2 a 6 meses.",
      q5: "¿Cómo cobras por los proyectos?",
      a5: "Ofrezco diferentes modelos: tarifa por hora, precio fijo por proyecto o retainer mensual. La mejor opción depende de las necesidades específicas de cada cliente.",
      q7: "¿Qué métricas usas para medir el éxito?",
      a7: "Uso métricas como tiempo de carga, tasa de conversión, satisfacción del usuario, rendimiento del código y alcance de los objetivos del negocio.",
      q8: "¿Y si necesito ayuda después de que el proyecto esté completo?",
      a8: "Ofrezco soporte continuo y mantenimiento después del lanzamiento. También proporciono documentación completa y entrenamiento para tu equipo.",
    },
    sections: {
      aboutTitle: "Sobre mí",
      skillsTitle: "Habilidades",
      projectsTitle: "Proyectos",
      contactTitle: "¿Hablamos?",
      contactSubtitle:
        "Siempre estoy abierta a nuevas oportunidades y proyectos interesantes. ¡Contáctame!",
    },
    about: {
      p1:
        "Soy Desarrolladora Full Stack y me encanta transformar ideas en soluciones prácticas y funcionales. Tengo un interés especial en automatización, porque creo que la tecnología debe simplificar la vida de las personas y hacer los procesos más livianos.",
      p2:
        "Combino creatividad con código limpio para desarrollar aplicaciones web modernas. Mi objetivo es crear soluciones que automaticen procesos, aporten practicidad y contribuyan a un ecosistema digital más eficiente e innovador.",
      specialtiesTitle: "Mis Especialidades",
    },
    stats: {
      completed: "Proyectos Completados",
      years: "Años de Experiencia",
      techs: "Tecnologías",
      satisfaction: "Satisfacción del Cliente",
    },
    contact: {
      title: "CONTACTO",
      subtitle: "¿Listo para crear algo increíble?",
      subtitleLarge: "Hablemos.",
      description: "Ponte en contacto conmigo a través de los enlaces de abajo o envía un mensaje.",
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Correo",
    },
    modal: {
      close: "Cerrar modal",
      aboutProject: "Sobre el Proyecto",
      mainFeatures: "Funcionalidades Principales",
      challenges: "Desafíos",
      results: "Resultados",
      technologies: "Tecnologías Utilizadas",
      viewDemo: "Ver Demo",
      code: "Código",
    },
    footer: {
      brand: "Portfolio Creator.",
      address: "Desarrolladora Full Stack, Brasil",
      email: "hi@gabrielle.com",
      aboutTitle: "Sobre",
      servicesTitle: "Servicios",
      moreTitle: "Más",
      contact: "Contacto",
      services: "Servicios",
      projects: "Proyectos",
      experience: "Experiencia",
      madeWith: "Hecho con",
      copyright: "© 2025 Gaabzy. Desarrollado por Gabrielle Ribeiro",
    },
    langLabel: "Idioma",
  },
};

const I18nContext = createContext({ t: (k) => k, lang: "pt", setLang: () => {} });

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    // Tenta carregar o idioma salvo no localStorage
    const savedLang = localStorage.getItem('portfolio-lang');
    return savedLang || 'pt';
  });

  const t = useMemo(() => {
    return (key) => {
      const parts = key.split(".");
      let cur = translations[lang];
      for (const p of parts) {
        if (!cur || typeof cur !== "object") return key;
        cur = cur[p];
      }
      return cur ?? key;
    };
  }, [lang]);

  // Salva o idioma no localStorage quando muda
  const handleSetLang = useCallback((newLang) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  }, []);

  const value = useMemo(() => ({ t, lang, setLang: handleSetLang }), [t, lang, handleSetLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);


