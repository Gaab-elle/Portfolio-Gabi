import React, { useState, useEffect, useCallback } from "react";
import WindowManager from "./components/common/WindowManager";
import DesktopIcons from "./components/common/DesktopIcons";
import MobileHelper from "./components/common/MobileHelper";
// import DynamicLucideIcon from "./components/common/DynamicLucideIcon";
// import { techIcons } from "./data/techIcons";

// Importar componentes das seções
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";

// Importar modais
import ProjectModal from "./components/modals/ProjectModal";
import BlogModal from "./components/modals/BlogModal";

// Importar estilos
import "./styles/globals.css";
import "./styles/windows7.css";

const PortfolioWindows7 = () => {
  // Estados
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  // const [fallingIcons, setFallingIcons] = useState([]);
  const [windowManager, setWindowManager] = useState(null);

  // Função para criar ícones caindo - DESABILITADA
  // const createFallingIcon = useCallback(() => {
  //   const randomTech = techIcons[Math.floor(Math.random() * techIcons.length)];
  //   const newIcon = {
  //     id: Math.random(),
  //     iconName: randomTech.icon,
  //     color: randomTech.color,
  //     left: Math.random() * 90 + 5,
  //     animationDuration: 4 + Math.random() * 3,
  //     delay: Math.random() * 1,
  //   };

  //   setFallingIcons((prev) => [...prev, newIcon]);

  //   setTimeout(() => {
  //     setFallingIcons((prev) => prev.filter((icon) => icon.id !== newIcon.id));
  //   }, (newIcon.animationDuration + newIcon.delay + 1) * 1000);
  // }, []);

  // Effect para gerar ícones caindo - DESABILITADO
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFallingIcons((prev) => {
  //       if (prev.length > 12) {
  //         return prev.slice(-8);
  //       }
  //       return prev;
  //     });
  //     createFallingIcon();
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, [createFallingIcon]);

  // Handlers para modais de projetos
  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
  }, []);

  // Handlers para modais do blog
  const openBlogModal = useCallback((post) => {
    setSelectedPost(post);
    setIsBlogModalOpen(true);
  }, []);

  const closeBlogModal = useCallback(() => {
    setIsBlogModalOpen(false);
    setSelectedPost(null);
  }, []);

  // Função para abrir janelas do portfolio
  const openPortfolioWindow = useCallback((windowConfig) => {
    if (windowManager) {
      windowManager.openWindow(windowConfig);
    }
  }, [windowManager]);

  // Abrir janelas iniciais quando o window manager estiver pronto
  useEffect(() => {
    if (windowManager) {
      // Abrir janela de boas-vindas
      setTimeout(() => {
        openPortfolioWindow({
          title: "Bem-vindo ao Portfolio da Gabi",
          icon: "👋",
          position: { x: 200, y: 100 },
          size: { width: 600, height: 400 },
          content: (
            <div className="portfolio-content">
              <h1>🎉 Bem-vindo ao meu Portfolio!</h1>
              <p>Este é um portfolio interativo com tema Windows 7. Use a barra de tarefas para navegar entre as diferentes seções.</p>
              <div style={{ marginTop: '20px' }}>
                <h3>Como usar:</h3>
                <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
                  <li>Clique nos botões da barra de tarefas para abrir diferentes seções</li>
                  <li>Arraste as janelas pela barra de título</li>
                  <li>Use os botões de minimizar, maximizar e fechar</li>
                  <li>Redimensione as janelas pelo canto inferior direito</li>
                </ul>
              </div>
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button 
                  onClick={() => {
                    // Abrir todas as seções
                    openPortfolioWindow({
                      title: "Sobre Mim",
                      icon: "👨‍💻",
                      position: { x: 50, y: 50 },
                      size: { width: 700, height: 500 },
                      content: <About visibleSections={new Set(['about'])} />
                    });
                    
                    openPortfolioWindow({
                      title: "Habilidades",
                      icon: "⚡",
                      position: { x: 100, y: 100 },
                      size: { width: 800, height: 600 },
                      content: <Skills visibleSections={new Set(['skills'])} />
                    });
                    
                    openPortfolioWindow({
                      title: "Projetos",
                      icon: "🚀",
                      position: { x: 150, y: 150 },
                      size: { width: 900, height: 700 },
                      content: <Projects visibleSections={new Set(['projects'])} openModal={openModal} />
                    });
                    
                    openPortfolioWindow({
                      title: "Blog",
                      icon: "📝",
                      position: { x: 200, y: 200 },
                      size: { width: 750, height: 550 },
                      content: <Blog visibleSections={new Set(['blog'])} openBlogModal={openBlogModal} />
                    });
                    
                    openPortfolioWindow({
                      title: "Contato",
                      icon: "📧",
                      position: { x: 250, y: 250 },
                      size: { width: 600, height: 450 },
                      content: <Contact visibleSections={new Set(['contact'])} />
                    });
                  }}
                  style={{
                    background: 'linear-gradient(to bottom, #4a90e2 0%, #357abd 100%)',
                    border: '1px solid #2c5aa0',
                    borderRadius: '4px',
                    color: 'white',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  Abrir Todas as Seções
                </button>
              </div>
            </div>
          )
        });
      }, 1000);
    }
  }, [windowManager, openPortfolioWindow, openModal, openBlogModal]);

  return (
    <WindowManager 
      onWindowManagerReady={setWindowManager}
      openModal={openModal}
      openBlogModal={openBlogModal}
    >
      {/* Helper para mobile */}
      <MobileHelper />

      {/* Ícones do Desktop */}
      <DesktopIcons 
        onOpenWindow={openPortfolioWindow} 
        openModal={openModal}
        openBlogModal={openBlogModal}
      />

      {/* Container para ícones caindo - REMOVIDO */}
      {/* <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {fallingIcons.map((iconData) => (
          <DynamicLucideIcon
            key={iconData.id}
            iconName={iconData.iconName}
            size={40}
            color={iconData.color}
            className="absolute"
            style={{
              left: `${iconData.left}%`,
              top: "-50px",
              animation: `fall ${iconData.animationDuration}s linear ${iconData.delay}s forwards`,
              opacity: 0.8,
            }}
          />
        ))}
      </div> */}

      {/* Modais */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />

      <BlogModal
        isOpen={isBlogModalOpen}
        post={selectedPost}
        onClose={closeBlogModal}
      />
    </WindowManager>
  );
};

export default PortfolioWindows7;
