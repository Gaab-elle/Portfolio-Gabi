import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';

const WindowFrame = ({ 
  title, 
  children, 
  initialPosition = { x: 100, y: 100 },
  initialSize = { width: 800, height: 600 },
  isMinimized = false,
  isMaximized = false,
  onClose,
  onMinimize,
  onMaximize,
  className = ""
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-buttons')) return;
    
    setIsDragging(true);
    
    // Suporte para touch events
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    // Suporte para touch events
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (isDragging) {
      setPosition({
        x: clientX - dragStart.x,
        y: clientY - dragStart.y
      });
    }
    
    if (isResizing) {
      const newWidth = Math.max(300, resizeStart.width + (clientX - resizeStart.x));
      const newHeight = Math.max(200, resizeStart.height + (clientY - resizeStart.y));
      setSize({ width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleResizeStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height
    });
  };

  React.useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleMouseMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart]);

  if (isMinimized) {
    return null;
  }

  return (
    <div
      className={`window-frame ${className}`}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex: 10
      }}
    >
      {/* Barra de título */}
      <div 
        className="window-titlebar"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="window-title">
          <span className="window-icon">📁</span>
          {title}
        </div>
        <div className="window-buttons">
          <button 
            className="window-button minimize"
            onClick={onMinimize}
            title="Minimizar"
          >
            <Minus size={12} />
          </button>
          <button 
            className="window-button maximize"
            onClick={onMaximize}
            title="Maximizar"
          >
            <Square size={10} />
          </button>
          <button 
            className="window-button close"
            onClick={onClose}
            title="Fechar"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Conteúdo da janela */}
      <div className="window-content">
        {children}
      </div>

      {/* Handle de redimensionamento */}
      <div 
        className="window-resize-handle"
        onMouseDown={handleResizeStart}
      />
    </div>
  );
};

export default WindowFrame;
