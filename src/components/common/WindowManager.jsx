import React, { useState, useCallback } from 'react';
import WindowFrame from './WindowFrame';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';

const WindowManager = ({ children, onWindowManagerReady, openModal, openBlogModal }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const bringToFront = useCallback((windowId) => {
    setNextZIndex(prev => prev + 1);
    setActiveWindowId(windowId);
  }, []);

  const openWindow = useCallback((windowConfig) => {
    const newWindow = {
      id: `window-${Date.now()}`,
      zIndex: nextZIndex + 1,
      isMinimized: false,
      isMaximized: false,
      isActive: true,
      ...windowConfig
    };

    setWindows(prev => {
      // Desativar todas as outras janelas
      const updatedWindows = prev.map(w => ({ ...w, isActive: false }));
      return [...updatedWindows, newWindow];
    });

    setActiveWindowId(newWindow.id);
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const closeWindow = useCallback((windowId) => {
    setWindows(prev => prev.filter(w => w.id !== windowId));
    if (activeWindowId === windowId) {
      const remainingWindows = windows.filter(w => w.id !== windowId);
      if (remainingWindows.length > 0) {
        setActiveWindowId(remainingWindows[remainingWindows.length - 1].id);
      } else {
        setActiveWindowId(null);
      }
    }
  }, [activeWindowId, windows]);

  const minimizeWindow = useCallback((windowId) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { ...w, isMinimized: true, isActive: false }
        : w
    ));
    
    if (activeWindowId === windowId) {
      const remainingWindows = windows.filter(w => w.id !== windowId);
      if (remainingWindows.length > 0) {
        setActiveWindowId(remainingWindows[remainingWindows.length - 1].id);
      } else {
        setActiveWindowId(null);
      }
    }
  }, [activeWindowId, windows]);

  const maximizeWindow = useCallback((windowId) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { ...w, isMaximized: !w.isMaximized }
        : w
    ));
  }, []);

  const restoreWindow = useCallback((windowId) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { ...w, isMinimized: false, isActive: true }
        : { ...w, isActive: false }
    ));
    setActiveWindowId(windowId);
    setNextZIndex(prev => prev + 1);
  }, []);

  const handleWindowClick = useCallback((windowId) => {
    const window = windows.find(w => w.id === windowId);
    if (window && window.isMinimized) {
      restoreWindow(windowId);
    } else {
      bringToFront(windowId);
    }
  }, [windows, restoreWindow, bringToFront]);

  const handleStartClick = useCallback(() => {
    setIsStartMenuOpen(prev => !prev);
  }, []);

  const handleStartMenuClose = useCallback(() => {
    setIsStartMenuOpen(false);
  }, []);

  // Preparar dados para a taskbar
  const taskbarWindows = windows.map(window => ({
    id: window.id,
    title: window.title,
    icon: window.icon || '📁',
    isActive: window.isActive && !window.isMinimized
  }));

  // Criar objeto windowManager
  const windowManagerAPI = {
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    windows,
    activeWindowId
  };

  // Notificar quando o window manager estiver pronto
  React.useEffect(() => {
    if (onWindowManagerReady) {
      onWindowManagerReady(windowManagerAPI);
    }
  }, [onWindowManagerReady]);

  return (
    <div className="desktop">
      {/* Janelas */}
      {windows.map((window) => (
        <WindowFrame
          key={window.id}
          title={window.title}
          initialPosition={window.position}
          initialSize={window.size}
          isMinimized={window.isMinimized}
          isMaximized={window.isMaximized}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          className={window.className}
          style={{ zIndex: window.zIndex }}
        >
          {window.content}
        </WindowFrame>
      ))}

      {/* Barra de tarefas */}
      <Taskbar
        windows={taskbarWindows}
        onWindowClick={handleWindowClick}
        onStartClick={handleStartClick}
      />

      {/* Menu Iniciar */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={handleStartMenuClose}
        onOpenWindow={openWindow}
        openModal={openModal}
        openBlogModal={openBlogModal}
      />

      {/* Renderizar children */}
      {children}
    </div>
  );
};

export default WindowManager;
