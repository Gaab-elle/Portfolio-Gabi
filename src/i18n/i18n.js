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
      talk: "Fale Conosco",
      viewProjects: "Ver Projetos",
    },
    sections: {
      projects: "Projetos",
      contactTitle: "Vamos Conversar?",
      contactSubtitle:
        "Estou sempre aberta a novas oportunidades e projetos interessantes. Entre em contato comigo!",
    },
    contact: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
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
      projects: "Projects",
      contactTitle: "Let's Talk?",
      contactSubtitle:
        "I'm always open to new opportunities and interesting projects. Get in touch!",
    },
    contact: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Email",
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
      projects: "Proyectos",
      contactTitle: "¿Hablamos?",
      contactSubtitle:
        "Siempre estoy abierta a nuevas oportunidades y proyectos interesantes. ¡Contáctame!",
    },
    contact: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Correo",
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


