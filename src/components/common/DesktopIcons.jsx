import React, { useState } from 'react';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Blog from '../sections/Blog';
import Contact from '../sections/Contact';

const DesktopIcons = ({ onOpenWindow, openModal, openBlogModal }) => {
  const [desktopItems, setDesktopItems] = useState([
    {
      id: 'about',
      title: 'Sobre Mim',
      icon: '👨‍💻',
      position: { x: 50, y: 50 }
    },
    {
      id: 'skills',
      title: 'Habilidades',
      icon: '⚡',
      position: { x: 50, y: 120 }
    },
    {
      id: 'projects',
      title: 'Projetos',
      icon: '🚀',
      position: { x: 50, y: 190 }
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: '📝',
      position: { x: 50, y: 260 }
    },
    {
      id: 'contact',
      title: 'Contato',
      icon: '📧',
      position: { x: 50, y: 330 }
    }
  ]);

  const [draggedIcon, setDraggedIcon] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, item) => {
    e.preventDefault();
    setDraggedIcon(item);
    setDragOffset({
      x: e.clientX - item.position.x,
      y: e.clientY - item.position.y
    });
  };

  const handleMouseMove = (e) => {
    if (draggedIcon) {
      const newPosition = {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      };

      // Limitar o movimento dentro da tela
      newPosition.x = Math.max(0, Math.min(newPosition.x, window.innerWidth - 60));
      newPosition.y = Math.max(0, Math.min(newPosition.y, window.innerHeight - 100));

      setDesktopItems(prev => 
        prev.map(item => 
          item.id === draggedIcon.id 
            ? { ...item, position: newPosition }
            : item
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggedIcon(null);
    setDragOffset({ x: 0, y: 0 });
  };

  React.useEffect(() => {
    if (draggedIcon) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedIcon, dragOffset]);

  const handleIconDoubleClick = (item) => {
    onOpenWindow({
      title: item.title,
      icon: item.icon,
      position: { x: 100 + Math.random() * 200, y: 100 + Math.random() * 200 },
      size: { width: 800, height: 600 },
      content: getContentForItem(item.id)
    });
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

  return (
    <div className="desktop-icons">
      {desktopItems.map((item) => (
        <div
          key={item.id}
          className={`desktop-icon ${draggedIcon?.id === item.id ? 'dragging' : ''}`}
          style={{
            position: 'absolute',
            left: item.position.x,
            top: item.position.y,
            width: '60px',
            height: '60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: draggedIcon?.id === item.id ? 'grabbing' : 'grab',
            padding: '8px',
            borderRadius: '4px',
            transition: draggedIcon?.id === item.id ? 'none' : 'background-color 0.2s ease',
            userSelect: 'none',
            zIndex: draggedIcon?.id === item.id ? 1000 : 1
          }}
          onMouseDown={(e) => handleMouseDown(e, item)}
          onDoubleClick={() => handleIconDoubleClick(item)}
          onMouseEnter={(e) => {
            if (draggedIcon?.id !== item.id) {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (draggedIcon?.id !== item.id) {
              e.target.style.backgroundColor = 'transparent';
            }
          }}
        >
          <div 
            style={{
              fontSize: '32px',
              marginBottom: '4px',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            {item.icon}
          </div>
          <div 
            style={{
              fontSize: '11px',
              color: 'white',
              textAlign: 'center',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
              lineHeight: '1.2',
              wordBreak: 'break-word'
            }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;
