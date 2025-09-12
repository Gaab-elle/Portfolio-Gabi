import React, { useState } from 'react';
import { Play, User, Folder, Mail, Code, BookOpen } from 'lucide-react';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const StartMenu = ({ isOpen, onClose, onOpenWindow, openModal, openBlogModal }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  React.useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const menuItems = [
    {
      id: 'about',
      title: 'Sobre Mim',
      icon: <User size={16} />,
      description: 'Conheça mais sobre mim'
    },
    {
      id: 'skills',
      title: 'Habilidades',
      icon: <Code size={16} />,
      description: 'Minhas competências técnicas'
    },
    {
      id: 'projects',
      title: 'Projetos',
      icon: <Folder size={16} />,
      description: 'Meus trabalhos e projetos'
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: <BookOpen size={16} />,
      description: 'Artigos e pensamentos'
    },
    {
      id: 'contact',
      title: 'Contato',
      icon: <Mail size={16} />,
      description: 'Entre em contato comigo'
    }
  ];

  const handleItemClick = (item) => {
    onOpenWindow({
      title: item.title,
      icon: item.icon,
      position: { x: 100 + Math.random() * 200, y: 100 + Math.random() * 200 },
      size: { width: 800, height: 600 },
      content: getContentForItem(item.id)
    });
    onClose();
  };

  const getContentForItem = (id) => {
    const visibleSections = new Set([id]);
    
    switch (id) {
      case 'about':
        return <About visibleSections={visibleSections} />;
      case 'skills':
        return <Skills visibleSections={visibleSections} />;
      case 'projects':
        return <Projects visibleSections={visibleSections} openModal={openModal} />;
      case 'blog':
        return <Blog visibleSections={visibleSections} openBlogModal={openBlogModal} />;
      case 'contact':
        return <Contact visibleSections={visibleSections} />;
      default:
        return <div className="portfolio-content"><h1>Conteúdo</h1></div>;
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay para fechar o menu */}
      <div 
        className="start-menu-overlay"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: 'transparent'
        }}
      />
      
      {/* Menu Iniciar */}
      <div 
        className="start-menu"
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '8px',
          width: '300px',
          height: '400px',
          background: 'linear-gradient(to bottom, #4a90e2 0%, #357abd 100%)',
          border: '1px solid #2c5aa0',
          borderRadius: '4px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Header do menu */}
        <div 
          style={{
            background: 'linear-gradient(to bottom, #5ba0f2 0%, #4580cd 100%)',
            padding: '12px',
            borderBottom: '1px solid #2c5aa0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Play size={16} color="white" />
          <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>
            Portfolio da Gabi
          </span>
        </div>

        {/* Lista de itens */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="start-menu-item"
              onClick={() => handleItemClick(item)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 12px',
                borderRadius: '3px',
                cursor: 'pointer',
                color: 'white',
                transition: 'background-color 0.1s ease',
                marginBottom: '2px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '24px',
                height: '24px'
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ 
                  fontSize: '13px', 
                  fontWeight: '500',
                  lineHeight: '1.2'
                }}>
                  {item.title}
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  opacity: 0.8,
                  lineHeight: '1.2'
                }}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer do menu */}
        <div 
          style={{
            background: 'rgba(0, 0, 0, 0.1)',
            padding: '8px 12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center'
          }}
        >
          Developed by Gabrielle Ribeiro
        </div>
      </div>
    </>
  );
};

export default StartMenu;
