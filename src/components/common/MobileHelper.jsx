import React, { useState, useEffect } from 'react';

const MobileHelper = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showHelper, setShowHelper] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Mostrar helper apenas uma vez por sessão
      if (mobile && !sessionStorage.getItem('mobileHelperShown')) {
        setShowHelper(true);
        sessionStorage.setItem('mobileHelperShown', 'true');
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile || !showHelper) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={() => setShowHelper(false)}
    >
      <div 
        style={{
          background: 'linear-gradient(to bottom, #4a90e2 0%, #357abd 100%)',
          border: '1px solid #2c5aa0',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '300px',
          color: 'white',
          textAlign: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>
          📱 Modo Mobile
        </h3>
        <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.4' }}>
          Toque nos ícones para abrir as seções. 
          Arraste para mover os ícones.
        </p>
        <p style={{ margin: '0 0 15px 0', fontSize: '12px', opacity: '0.8' }}>
          As janelas ocupam a tela inteira em mobile.
        </p>
        <button 
          onClick={() => setShowHelper(false)}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '4px',
            color: 'white',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Entendi
        </button>
      </div>
    </div>
  );
};

export default MobileHelper;
