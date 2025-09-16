import React, { createContext, useContext, useMemo, useState } from "react";

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      subtitle: "Desenvolvedora Full Stack • Especialista em Automação • Cientista de Dados",
      talk: "Fale Comigo",
      viewProjects: "Ver Projetos",
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
      copyright: "© 2025 Gaabzy. Desenvolvido por Gabrielle Ribeiro",
    },
    langLabel: "Idioma",
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      subtitle: "Full Stack Developer • Automation Specialist • Data Scientist",
      talk: "Let's Talk",
      viewProjects: "View Projects",
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
      copyright: "© 2025 Gaabzy. Developed by Gabrielle Ribeiro",
    },
    langLabel: "Language",
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      subtitle: "Desarrolladora Full Stack • Especialista en Automatización • Científica de Datos",
      talk: "Hablemos",
      viewProjects: "Ver Proyectos",
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
      copyright: "© 2025 Gaabzy. Desarrollado por Gabrielle Ribeiro",
    },
    langLabel: "Idioma",
  },
};

const I18nContext = createContext({ t: (k) => k, lang: "pt", setLang: () => {} });

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState("pt");

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

  const value = useMemo(() => ({ t, lang, setLang }), [t, lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);


