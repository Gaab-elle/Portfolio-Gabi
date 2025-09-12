import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';

const Taskbar = ({ windows, onWindowClick, onStartClick }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="taskbar">
      {/* Start Button */}
      <button className="start-button" onClick={onStartClick}>
        <Play size={14} className="start-icon" />
        Iniciar
      </button>

      {/* Taskbar Items */}
      <div className="taskbar-items">
        {windows.map((window) => (
          <div
            key={window.id}
            className={`taskbar-item ${window.isActive ? 'active' : ''}`}
            onClick={() => onWindowClick(window.id)}
          >
            <span className="taskbar-icon">{window.icon}</span>
            <span className="taskbar-title">{window.title}</span>
          </div>
        ))}
      </div>

      {/* System Tray */}
      <div className="system-tray">
        <div className="tray-item" title="Volume">
          🔊
        </div>
        <div className="tray-item" title="Rede">
          📶
        </div>
        <div className="tray-item" title="Bateria">
          🔋
        </div>
      </div>

      {/* Clock */}
      <div className="clock" title={formatDate(currentTime)}>
        <Clock size={12} style={{ marginRight: '4px' }} />
        {formatTime(currentTime)}
      </div>
    </div>
  );
};

export default Taskbar;
